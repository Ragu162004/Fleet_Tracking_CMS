const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    plateNumber: {
        type: String,
        minLength: 10,
    },
    driverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true
    },
    status:{
        type: String,
        enum: ["available", "trip", "repaired"],
        default: "available"
    }
})

const Vehicle = mongoose.Model("Vehicle",vehicleSchema)
module.exports = Vehicle;
