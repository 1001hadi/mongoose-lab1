import express from "express";
import dotenv from "dotenv";

// setup and config
const app = express();
dotenv.config();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());

// routes

// global error handling

// listener
app.listen(PORT, (req, res) => {
  console.log(`Server runs on port: ${PORT}`);
});
