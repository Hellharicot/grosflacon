import { Router } from "express";
import {
  getWines,
  createWine,
  getAppellations,
  getCountries,
  getRegions,
  getColors,
} from "../controllers/wines.controller.js";

export const winesRouter = Router();

winesRouter.get("/", getWines);
winesRouter.post("/", createWine);
// TODO: winesRouter.get("/:id", getWineById);
winesRouter.get("/countries", getCountries);
winesRouter.get("/regions", getRegions);
winesRouter.get("/appellations", getAppellations);
winesRouter.get("/colors", getColors);
