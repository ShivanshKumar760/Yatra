import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app=express();
const port=process.env.PORT||3001;


app.listen(port,()=>{
    console.log("Server is running!");
});