import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// MongoDB Connection
const dbConnect =
  process.env.DB_CONNECT || "mongodb://localhost:27017/ExampleDB";

// Function to connect to the database
const connectDB = async () => {
  try {
    // Use the dbConnect constant here
    await mongoose.connect(dbConnect, {
      // Add options if needed
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if connection fails
  }
};

// Call the connectDB function to initiate the connection
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import postsRoutes from "./routes/posts_routes";
app.use("/posts", postsRoutes);

export default app;
