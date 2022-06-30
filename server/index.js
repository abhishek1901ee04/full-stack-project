import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const express = require('express');
const app = express();
app.use('/posts',postRoutes);
app.use(bodyparser.json({ limit : "30mb",extended: true}));
app.use(bodyparser.json({limit: "30mb",extended: true}));
app.use(cors());
// https://www.
const CONNECTION_URL ='mongodb+srv://abhishek_demonslayer:abhishek_1901ee04@cluster0.ttwmcju.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, {userNewUrlParser : true ,useUnifiedTopology : true })
.then(()=>app.listen(PORT ,()=>console.log(`Server running on port:${PORT}`)))
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);