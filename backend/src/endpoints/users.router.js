import { Router } from "express";
import { getUsersRoles } from "../controllers/users.controller.js";

export const usersRouter = Router();

// TODO: usersRouter.get("/", getAllUsers);
// TODO: usersRouter.post("/", createUser);
usersRouter.get("/roles", getUsersRoles);
// TODO: usersRouter.get("/:id", getUserById);
// TODO: usersRouter.put("/:id", updateUser);
// TODO: usersRouter.delete("/:id", deleteUser);
// TODO: usersRouter.get("/:id/profile", getUserProfile);
// TODO: usersRouter.get("/:id/notes", getUserNotes);
