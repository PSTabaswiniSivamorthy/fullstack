import { Router } from "express";
import { sample_cakes, sample_tags } from "../data.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_cakes);
});

router.get("/tags", (req, res) => {
  res.send(sample_tags);
});

router.get("/search/:searchTerm", (req, res) => {
  const { searchTerm } = req.params;
  const cakes = sample_cakes.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(cakes);
});

router.get("/tag/:tag", (req, res) => {
  const { tag } = req.params;
  const cakes = sample_cakes.filter((item) => item.tags?.includes(tag));
  res.send(cakes);
});

router.get("/:cakeId", (req, res) => {
  const { cakeId } = req.params;
  const cake = sample_cakes.find((item) => item.id === cakeId);
  res.send(cake);
});

export default router;
