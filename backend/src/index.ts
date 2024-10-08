import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
const port:string | undefined = process.env.PORT;
const mongo:string| undefined = process.env.MONGO;

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());



if(mongo){
    mongoose.connect(mongo).then(()=>{
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.log(err);
    })
}
if(port){
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
}
