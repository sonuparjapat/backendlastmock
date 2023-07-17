const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')
const SubtaskSchema=mongoose.Schema({
    _id:ObjectId,
    title:String,
    isCompleted:Boolean
})

const subtaskmodel=mongoose.model("subtask",SubtaskSchema)
module.exports={subtaskmodel}