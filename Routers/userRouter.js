const express=require('express')
const userRouter=express.Router()

userRouter.get("/",async(req,res)=>{
    res.status(200).json({msg:"welcome to home route"})
})