const express=require("express")
const cors=require("cors")
const { connection } = require("./Models/BoardModel")
const app=express()
app.use(cors())
app.use(express.json())


app.listen(8080,async()=>{
    try{
await connection
console.log("connected to mongodb")
    }catch(err){
        console.log(err)

    }
    console.log("port is running on 8080")
})