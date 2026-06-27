const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Root endpoint for health check
app.get("/", (req, res) => {
    res.send("CollegeHUB API Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

