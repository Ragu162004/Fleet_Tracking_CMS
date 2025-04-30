const mongoose = require("mongoose");

const tripSchema = new mongoose(
  {
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
    src: {
      type: String,
      require: true,
    },
    dest: {
      type: String,
      require: true,
    },
    distance: {
      type: Number,
      require: true,
    },
    NoOfDays: {
      type: Number,
      default: 1,
    },
    startedAt: {
      type: Date,
    },
    endedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
