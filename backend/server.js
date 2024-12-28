const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const eventRoutes = require("./routes/eventRoutes");
const stripe = require('stripe')(process.env.STRIPE_SECRET);





const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

MONGO_URI = process.env.MONGO_URI;


const userRouter = require("./routes/user");

app.use("/", userRouter);


app.get("/", (req, res) => {
    res.send("Welcome to the Server! 🌐");
  });
  
  
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB!");
});

app.use("/", eventRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});