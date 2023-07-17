const { ObjectId } = require("mongodb")

const mongoose=require("mongoose")
require('dotenv').config()
const connection=mongoose.connect(process.env.MognoUrl)
const BoardSchema=mongoose.Schema({
_id:ObjectId,
name:String,
tasks:[{type:ObjectId,ref:"Task"}]
})

const Boardmodel=mongoose.model("mock6",BoardSchema)
module.exports={Boardmodel,connection}