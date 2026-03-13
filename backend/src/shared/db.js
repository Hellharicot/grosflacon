import { HTTP_STATUS } from "../shared/http-status.js";
import { logger } from "../shared/logger.js";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // TODO: maximum connections
  // TODO: idle timeout
});

export const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
};

export const executeQuery = async (req, res, sqlQuery, options = {}) => {
  const { label = "data", params = [] } = options;
  try {
    const isWriteOp = ["INSERT", "UPDATE", "DELETE"].some((op) =>
      sqlQuery.trim().toUpperCase().startsWith(op),
    );
    const { rows } = await query(sqlQuery, params);

    if (!isWriteOp && rows.length === 0) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        error: `No ${label} found`,
      });
    }

    let responseData = isWriteOp ? rows[0] || { success: "created" } : rows;
    const responseStatus = isWriteOp ? HTTP_STATUS.CREATED : HTTP_STATUS.OK;
    res.status(responseStatus).json(responseData);
    return responseData;
  } catch (error) {
    logger.error("Error getting aromas", error);
    res.status(HTTP_STATUS.SERVER_ERROR).json({
      error: "Internal Server Error",
    });
  }
};
