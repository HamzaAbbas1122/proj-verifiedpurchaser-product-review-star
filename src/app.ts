// src/app.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users";

dotenv.config();
export const app = express();
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", service: "backend-api" });
});

// Mounted Domain Routers
app.use("/api/v1/users", usersRouter);

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;
