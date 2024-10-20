const express=require("express")
const app=express()
app.use(express.json())
require("dotenv").config()

const PORT=process.env.PORT

require("./Config/database").connect()

const user=require("./Routes/user")

app.use("/api/v1",user)

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})