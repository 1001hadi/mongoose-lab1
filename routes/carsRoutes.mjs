import express from "express";
import Cars from "../models/carsSchema.mjs";

const router = express.Router();

// Create Route
router.post("/", async (req, res) => {
  let newCar = await new Cars(req.body);
  await newCar.save();
  res.json(newCar).status(201);
});

// Read Route
router.get("/", async (req, res) => {
  let newCar = await Cars.find({});

  res.json(newCar).status(200);
});

// Update Route
router.put("/:id", async (req, res) => {
  let updatedCar = await Cars.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updatedCar).status(204);
});

// Delete Route
router.delete("/:id", async (req, res) => {
  let removeCar = await Cars.findByIdAndDelete(req.params.id);

  res.json(removeCar);
});

export default router;
