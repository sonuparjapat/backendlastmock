const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')
const taskSchema=mongoose.Schema({
    _id:ObjectId,
    title:String,
    description:String,
    status:{type:String,enum:["Todo","Doing","Done"],default:"Todo"},
  subtask:[{type:ObjectId,ref:"Subtask"}]  })

const taskmodel=mongoose.model("taskmodel",taskSchema)
module.exports={taskmodel}