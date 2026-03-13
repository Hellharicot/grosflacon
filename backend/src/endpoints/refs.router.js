import { Router } from "express";
import { getCriteria, getAllAromas } from "../controllers/refs.controller.js";

export const refsRouter = Router();

refsRouter.get("/criteria", getCriteria);
refsRouter.get("/aromas", getAllAromas);
