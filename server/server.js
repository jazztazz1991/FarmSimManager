import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

import { userRouter } from './src/routes/users.js';
import { fieldsRouter } from './src/routes/Fields.js';

dotenv.config();

const app = express();

app.use(express.json()); //sets all data given from the front end in the form of a JSON file.
app.use(cors());

app.use("/auth", userRouter);
app.use("/fields", fieldsRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/'));
})

mongoose.connect(process.env.DB_LINK);

if (process.env.PORT) {
    app.listen(process.env.PORT, () => console.log("SERVER STARTED!"));
}


