const dotenv = require('dotenv').config();
const PORT= process.env.PORT;
const URL=process.env.URL;

const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')


const app=express()
app.use(cors());
app.use(express.json())
app.get('/',function(req,res){ res.send("welcome")})

//api fetch
app.get('/data',function(req,res){
    Data.find().then((item)=>res.send(item))
})

//api to post
app.post('/create',function(req,res){

    Data.create(req.body).then((item)=>res.send(item))
})

//api to update

app.put('/update/:id',function(req,res){
    // console.log(req.params);
    // console.log(req.body);
    Data.findByIdAndUpdate({_id:req.params.id},req.body,{new:"true"}).then((item)=>res.send(item))})

// app.delete('/delete/:id')
app.delete('/delete/:id',function(req,res){
    
    Data.findByIdAndDelete({_id:req.params.id}).then((item)=>console.log(item))})

  
app.listen(PORT,()=>{console.log("server connected")})

mongoose.connect(URL).then(console.log("MongoDB connected"))

//create schema

var newSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    amount:Number
})

//model 

let Data =mongoose.model('mca',newSchema)

//create data  for testing

// let data1 = new Data(
//     {
//         name:"Arthi V",
//         email:"arthiv2608@gmail.com",
//         password:"123",
//         amount:100
//     }
// )
// data1.save()