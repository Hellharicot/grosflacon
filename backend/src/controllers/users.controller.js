import { HTTP_STATUS } from "../shared/http-status.js";
import { logger } from "../shared/logger.js";
import { query } from "../shared/db.js";

export const getUsersRoles = async (req, res) => {
  try {
    const { rows } = await query(`SELECT * FROM users.role`);
    console.log(rows.length);

    if (rows.length === 0) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        error: "No roles found",
      });
    }

    res.json(rows);
  } catch (error) {
    logger.error("Error getting roles", error);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
    });
  }
};
