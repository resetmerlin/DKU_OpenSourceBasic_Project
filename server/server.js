import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import app from "./app.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static frontend
const staticPath = path.join(__dirname, "../client/dist");
app.use(express.static(staticPath));

// Serve index.html for any unmatched route (SPA fallback)
app.get("/", (_, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
