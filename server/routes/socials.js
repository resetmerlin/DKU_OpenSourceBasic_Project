import { Router } from "express";

const router = Router();

router.get("/socials", (_, res) => {
  res.json({
    socials: [
      { platform: "github", url: "https://github.com/shinsuin" },
      { platform: "linkedin", url: "https://linkedin.com/in/your-profile" },
      { platform: "notion", url: "https://notion.so/your-portfolio" },
    ],
  });
});

export default router;
