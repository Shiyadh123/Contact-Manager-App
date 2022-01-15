import express from "express";
const app=express();
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
 
const PORT=process.env.PORT||5000;
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,
    useUnifiedTopology: true
     });

     app.use(

        express.urlencoded({
          extended: true
        })
      )
      
      app.use(express.json());
      app.use(cors());
      
      
import contactRoute from './routes/routes.js';
app.use("/",contactRoute);

app.listen(PORT,()=>{
    console.log("server running on port"+PORT);
})