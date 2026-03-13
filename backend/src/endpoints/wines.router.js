import { Router } from "express";
import { getWines, createColor } from "../controllers/wines.controller.js";

export const winesRouter = Router();

winesRouter.get("/", getWines);
winesRouter.post("/", createColor);
// TODO: winesRouter.get("/:id", getWineById);
// TODO: winesRouter.get("/country/:country", getCountry);
// TODO: winesRouter.get("/region/:region", getRegion);
// TODO: winesRouter.get("/appellation/:appellation", getAppellation);
// TODO: winesRouter.get("/color/:color", getColor);
