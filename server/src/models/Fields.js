import mongoose from 'mongoose';

const FieldSchema = new mongoose.Schema({
    fieldNumber: { type: Number, required: true, unique: true },
    acres: { type: Number, required: true },
    yieldPotential: { type: Number, required: true }
});

export const FieldModel = mongoose.model("midwestHorizon", FieldSchema);
