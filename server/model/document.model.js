const mongoose=require("mongoose");

const documentSchema=new mongoose.Schema({
    documentid:{
        type:String,
        require:true,
        unique:true
    },
    documenttype:{
        type:String,
        require:true
    },
    documentname:{
        type:String,
        require:true
    },
    filepath:{
        type:String,
        require:true
    },
    uploaddate:{
        type:Date,
        default:Date.now
    },
    vehicle:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vehicle",
        require:true
    },
    driver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    }
})
const Document=mongoose.model("Document",documentSchema);
module.exports=Document;