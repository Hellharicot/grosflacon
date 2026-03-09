import express from "express";
import { logger } from "./logger.js";
import { query } from "./db.js";

const port = process.env.BACKEND_PORT;
const app = express();

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
    res.status(500).send("Server error");
  }
});

export default app;
