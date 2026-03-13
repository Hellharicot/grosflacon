import express from "express";
import { logger } from "./shared/logger.js";
import cors from "cors";
import { usersRouter } from "./endpoints/users.router.js";
import { winesRouter } from "./endpoints/wines.router.js";
import { refsRouter } from "./endpoints/refs.router.js";

const port = process.env.BACKEND_PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/wines", winesRouter);
app.use("/api/refs", refsRouter);

app.use("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

export default app;
