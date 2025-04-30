const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["general", "driver"],
        default: "general"
    },
    generated_date: {
        type: Date,
        default: Date.now(),
    },
    data: {
        type: String,
        default: ""
    }
})

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;