import { query, executeQuery } from "../shared/db.js";

export const getWines = async (req, res) => {
  const sql = `SELECT * FROM wines.wine`;
  await executeQuery(req, res, sql, "wines");
};

export const createWine = async (req, res) => {
  const { appellation_id, producer, cuvee, color_id, vintage } = req.body;
  const sql = `INSERT INTO wines.wine
			(appellation_id, producer, cuvee, color_id, vintage)
			VALUES ($1, $2, $3, $4, $5)
			RETURNING *`;
  const params = [appellation_id, producer, cuvee, color_id, vintage];
  await executeQuery(req, res, sql, { params });
};

export const createColor = async (req, res) => {
  const { color } = req.body;
  const sql = `INSERT INTO wines.color (default_name) VALUES ($1) RETURNING *`;
  const params = [color];
  await executeQuery(req, res, sql, { params });
};
