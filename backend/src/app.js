import express from "express";
import { logger } from "./logger.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

export default app;
