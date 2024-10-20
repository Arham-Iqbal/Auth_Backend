const user=require("../models/user")
const bcrypt=require("bcrypt")
require("dotenv").config()

exports.signup=async (req,res)=>{
    try{

        const{name,email,password,role}=req.body;
        const existinguser=await user.findOne({email})
        if(existinguser)
        {
            return res.status(500).json({
                success:false,
                message:"existing user",
            })
        }
        let hashedpass;
        try{
             hashedpass=await bcrypt.hash(password,10)

        }
        catch(e)
        {
            console.error(e)
            return res.status(500).json({
                success:false,
                message:"error in hashing password",

            })
        }
        const newuser=await user.create({name,email,password:hashedpass,role})
        res.status(201).json({
            user:newuser,
            success:true,
            message:"signup success",

        })


    }
    catch(e){
        console.error(e)
        res.status(500).json({
            success:false,
            message:"signup unsuccessfull"
        })

    }
}