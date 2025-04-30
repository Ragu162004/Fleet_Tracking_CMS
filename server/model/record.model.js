const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    },
    service_date: {
        type: Date,
    },
    service_type: {
        type: String,
    },
    remarks: {
        type: String,
        require: false,
    }
})

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;