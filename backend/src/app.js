import express from "express";
import { HTTP_STATUS } from "./shared/httpCodes.js";
import { logger } from "./shared/logger.js";
import { query } from "./config/db.js";
import cors from "cors";

const port = process.env.BACKEND_PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

app.get("/db", async (req, res) => {
  try {
    const db = await query("SELECT * FROM users.role");
    res.json(db.rows);
  } catch (err) {
    logger.error(err);
    res.status(HTTP_STATUS.SERVER_ERROR).send("Server error");
  }
});

export default app;
