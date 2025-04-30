const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      enum: ["read", "unread"],
      default: "unread",
    },
  },
  {
    timestamps: true,
  }
);

const Alert = mongoose.model("Alert", alertSchema);
module.exports = Alert;
