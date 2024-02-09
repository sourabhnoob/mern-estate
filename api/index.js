import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.log(err)
    })



const app = express();

app.listen(3000,()=>{
    console.log('Server running !! ')
})

app.get('/test',(req,res)=>{
    res.send("hello world")
})

app.use('/api/user',userRouter)