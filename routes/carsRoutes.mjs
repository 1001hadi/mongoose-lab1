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

// Update Route

// Delete Route

export default router;
