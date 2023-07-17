const express=require("express")
const cors=require("cors")
const { connection } = require("./Models/BoardModel")
const { userRouter } = require("./Routers/userRouter")
const app=express()
app.use(cors())
app.use(express.json())
app.get("/",async(req,res)=>{
    res.status(200).json({msg:"welcome to home route"})
})
app.use("/user",userRouter)
app.listen(8080,async()=>{
    try{
await connection
console.log("connected to mongodb")
    }catch(err){
        console.log(err)

    }
    console.log("port is running on 8080")
})