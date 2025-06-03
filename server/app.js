import express from "express";
import profileRouter from "./routes/profile.js";
import aboutRouter from "./routes/about.js";
import socialsRouter from "./routes/socials.js";
import navigationRouter from "./routes/navigation.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use("/api", profileRouter);
app.use("/api", aboutRouter);
app.use("/api", socialsRouter);
app.use("/api", navigationRouter);

export default app;
