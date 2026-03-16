import express from "express";
import { logger } from "./shared/logger.js";
import cors from "cors";
import { usersRouter } from "./endpoints/users.router.js";
import { winesRouter } from "./endpoints/wines.router.js";
import { refsRouter } from "./endpoints/refs.router.js";

const PORT = process.env.BACKEND_PORT;
const app = express();

app.use(
  cors({
    origin: "http://localhost:4200",
  }),
);

app.use(express.json());

app.use("/api/test", (req, res) => {
  logger.info(`Route /api/test appelée !`);
});
app.use("/api/users", usersRouter);
app.use("/api/wines", winesRouter);
app.use("/api/refs", refsRouter);

app.use("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

export default app;
