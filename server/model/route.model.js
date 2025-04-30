const mongoose = require("mongoose")

const routeSchema = new mongoose.Schema({
    trip:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Trip",
    },
    routeDetails:{
        type: String,
        require: true
    }
})

const Routes = mongoose.model("Routes",routeSchema)

module.exports= { Routes};