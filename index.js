require("dotenv").config();
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const router=require('./routes/routes')


const app=express();


app.use(express.json())

app.use(cors())

const PORT=5000;

app.use('/',router)

const URI=process.env.MONGO_URL;

mongoose.connect(URI).then(()=>{
   app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`)
   }) 
}).catch((error)=>{


})