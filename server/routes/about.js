import { Router } from "express";

const router = Router();

router.get("/about", (_, res) => {
  res.json({
    heading: "Hi my name is shinsuin",
    paragraphs: [
      "I'm a student studying in dankook university",
      "I have an interest in learning methodology so that I can improve my development skills.",
    ],
  });
});

export default router;
