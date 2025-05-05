const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then((result) => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error(`Error occurred while connecting to MongoDB: ${error}`);
    });
};
