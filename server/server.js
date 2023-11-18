import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './src/routes/users.js';
import { fieldsRouter } from './src/routes/fields.js';

dotenv.config();

const app = express();

app.use(express.json()); //sets all data given from the front end in the form of a JSON file.
app.use(cors());

app.use("/auth", userRouter);
app.use("/fields", fieldsRouter);

mongoose.connect(process.env.DB_LINK);

if (process.env.port) {
    app.listen(process.env.PORT, () => console.log("SERVER STARTED!"));
}


