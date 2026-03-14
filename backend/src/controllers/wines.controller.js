import { executeQuery } from "../shared/db.js";

export const getWines = async (req, res) => {
  const sql = `SELECT * FROM wines.wine`;
  await executeQuery(req, res, sql, "wines");
};

export const getColors = async (req, res) => {
  const sql = `SELECT * FROM wines.color`;
  await executeQuery(req, res, sql, "color");
};

export const getCountries = async (req, res) => {
  const sql = `SELECT * FROM wines.country`;
  await executeQuery(req, res, sql, "country");
};

export const getRegions = async (req, res) => {
  const sql = `SELECT * FROM wines.region`;
  await executeQuery(req, res, sql, "region");
};

export const getAppellations = async (req, res) => {
  const sql = `SELECT * FROM wines.appellation`;
  await executeQuery(req, res, sql, "appellation");
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
