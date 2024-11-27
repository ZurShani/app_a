const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// MongoDB Connection
const dbConnect =
  process.env.DB_CONNECT || "mongodb://localhost:27017/ExampleDB";

const connectDB = async () => {
  try {
    await mongoose.connect(dbConnect, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 10000,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postsRoutes = require("./routes/posts_routes");
app.use("/posts", postsRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
