import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './src/routes/users.js';

const app = express();

app.use(express.json()); //sets all data given from the front end in the form of a JSON file.
app.use(cors());

app.use("/auth", userRouter)

mongoose.connect("mongodb+srv://lanugginoso:helloworld@farmsim.zpw2zwz.mongodb.net/?retryWrites=true&w=majority");

app.listen(3001, () => console.log("SERVER STARTED!"));

