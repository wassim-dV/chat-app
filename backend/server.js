// const express = require('express');
import express from 'express';
import cookieParser from "cookie-parser";

import authRoutes from './routes/authrouter.js'
import connectToMongoDB from "./DB/connectToMongoDB.js"
import dotenv from 'dotenv';
const app = express();


dotenv.config();

const PORT = process.env.PORT  || 5000 ;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());


// app.get("/" , (req, res) =>{
//     res.send("hello")
// } );


app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});

//OkVuOAT14LMdvdUH