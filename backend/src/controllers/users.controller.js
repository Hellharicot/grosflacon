import { executeQuery } from "../shared/db.js";

export const getUsersRoles = async (req, res) => {
  const sql = `SELECT * FROM users.role`;
  await executeQuery(req, res, sql, { label: "roles" });
};
