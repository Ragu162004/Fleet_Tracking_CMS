const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
    },
    lat: {
        type: String,
    },
    lat: {
        type: String
    }
})

const Map = mongoose.model("Map", mapSchema);

module.exports = { Map };