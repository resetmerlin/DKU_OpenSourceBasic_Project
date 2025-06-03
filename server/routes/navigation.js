import { Router } from "express";

const router = Router();

router.get("/navigation", (_, res) => {
  res.json({
    links: [
      { label: "Home", href: "/" },
      { label: "About me", href: "/about" },
    ],
  });
});

export default router;
