import { query } from "../shared/db.js";
import {
  createdResponse,
  successResponse,
  notFound,
  serverError,
} from "../shared/response-helpers.js";

export const getWines = async (req, res) => {
  const sql = `SELECT * FROM wines.wine`;
  try {
    const { rows } = await query(sql);
    if (!rows || rows.length === 0) {
      return notFound(rows);
    }
    return successResponse(res, rows, "Wines successfully fetched");
  } catch (err) {
    serverError(res, err, "Error getting wines");
  }
};

export const getColors = async (req, res) => {
  const sql = `SELECT * FROM wines.color`;
  try {
    const { rows } = await query(sql);
    if (!rows || rows.length === 0) {
      return notFound(rows);
    }
    return successResponse(res, rows, "Colors successfully fetched");
  } catch (err) {
    serverError(res, err, "Error getting colors");
  }
};

export const getCountries = async (req, res) => {
  const sql = `SELECT * FROM wines.country`;
  try {
    const { rows } = await query(sql);
    if (!rows || rows.length === 0) {
      return notFound(rows);
    }
    return successResponse(res, rows, "Countries successfully fetched");
  } catch (err) {
    serverError(res, err, "Error getting countries");
  }
};

export const getRegions = async (req, res) => {
  const sql = `SELECT * FROM wines.region`;
  try {
    const { rows } = await query(sql);
    if (!rows || rows.length === 0) {
      return notFound(rows);
    }
    return successResponse(res, rows, "Regions successfully fetched");
  } catch (err) {
    serverError(res, err, "Error getting regions");
  }
};

export const getAppellations = async (req, res) => {
  const sql = `SELECT * FROM wines.appellation`;
  try {
    const { rows } = await query(sql);
    if (!rows || rows.length === 0) {
      return notFound(rows);
    }
    return successResponse(res, rows, "Appellations successfully fetched");
  } catch (err) {
    serverError(res, err, "Error getting appellations");
  }
};

export const createWine = async (req, res) => {
  const { appellation_id, producer, cuvee, color_id, vintage } = req.body;
  const sql = `INSERT INTO wines.wine
			(appellation_id, producer, cuvee, color_id, vintage)
			VALUES ($1, $2, $3, $4, $5)
			RETURNING *`;
  const params = [appellation_id, producer, cuvee, color_id, vintage];
  try {
    const { rows } = await query(sql, params);
    if (!rows || rows.length === 0) {
      return notFound(rows);
    }
    return createdResponse(res, rows, "Wine successfully created");
  } catch (err) {
    serverError(res, err, "Error creating wine");
  }
};
