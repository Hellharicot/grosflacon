import express from "express";
import { HTTP_STATUS } from "./shared/http-status.js";
import { logger } from "./shared/logger.js";
import { query } from "./shared/db.js";
import cors from "cors";
import { usersRouter } from "./endpoints/users.router.js";

const port = process.env.BACKEND_PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);

app.use("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

export default app;
