const mongoose=require('mongoose')
const userschema=mongoose.Schema({
      name:{
        required:true,
        type:String,
        trim:true
      },
      email:{
        required:true,
        type:String,
        trim:true,

      },
      password:{
        required:true,
        type:String,
        
      },
      role:{
        type:String,
        enum:["admin","student","visitor"]

      }    
})
module.exports=mongoose.model("user",userschema)