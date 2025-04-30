const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
})

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;