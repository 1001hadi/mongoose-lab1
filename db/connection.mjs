import mongoose from "mongoose";
import dotenv from "dotenv";

// setup dotenv
dotenv.config();

//create the connection
async function connectionToDB() {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log("Mongo Connected!");
  } catch (err) {
    console.error(err);
    process.exit();
  }
}

export default connectionToDB;
