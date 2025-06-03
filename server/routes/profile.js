import { Router } from "express";

const router = Router();

router.get("/profile", (_, res) => {
  res.json({
    name: "Shinsuin",
    major: "Mobile Systems Engineering",
    role: "Server/Backend Engineer",
  });
});

export default router;
