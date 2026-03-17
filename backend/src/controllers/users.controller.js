import { query } from "../shared/db.js";
import {
  successResponse,
  notFound,
  serverError,
} from "../shared/response-helpers.js";

export const getUsersRoles = async (req, res) => {
  const sql = `SELECT * FROM users.role`;
  try {
    const { rows } = await query(sql);
    if (!rows || rows.length === 0) {
      return notFound(rows);
    }
    return successResponse(res, rows, "Roles successfully fetched");
  } catch (err) {
    serverError(res, err, "Error getting roles");
  }
};
