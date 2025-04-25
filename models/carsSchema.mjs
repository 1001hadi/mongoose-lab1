import mongoose from "mongoose";

const carsSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  horsepower: {
    type: Number,
    required: false,
  },
});

export default mongoose.model("Cars", carsSchema);
