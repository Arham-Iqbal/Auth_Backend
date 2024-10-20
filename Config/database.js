const mongoose=require("mongoose")

exports.connect=()=>{
    mongoose.connect(process.env.URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log(" db connection done ")

    })
    .catch((error)=>{
        console.log("error in db connection")
        console.log(error)
    })
}