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
    required: true,
  },
});

// static method  to get car model over the given value
carsSchema.statics.horsepowerAbove = function (num) {
  return this.find({ horsepower: { $gt: num } });
};

console.log("carsSchema.statics:", carsSchema.statics);

carsSchema.virtual("isHighHorsepower").get(function () {
  return this.horsepower > 260;
});

carsSchema.set("toJSON", { virtuals: true });

export default mongoose.model("Cars", carsSchema);
