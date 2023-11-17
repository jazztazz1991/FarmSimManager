import express from 'express';
import mongoose from 'mongoose';
import { FieldModel } from '../models/Fields.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await FieldModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err)
    }
});

router.post("/", async (req, res) => {
    const field = new FieldModel(req.body);

    try {
        const response = await field.save();
        res.json(response);
    } catch (err) {
        res.json(err)
    }
});

export { router as fieldsRouter };

