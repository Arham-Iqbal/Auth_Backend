const express=require('express')
const router=express.Router()
const {login,signup}=require("../Controllers/Auth")
router.post("/signup",signup)

module.exports=router