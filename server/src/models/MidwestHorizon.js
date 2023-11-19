import mongoose from 'mongoose';

const midwestHorizonSchema = new mongoose.Schema({
    fieldNumber: { type: Number, required: true, unique: true },
    acres: { type: Number, required: true },
    yieldPotential: { type: Number, required: true }
});

export const MidwestHorizonModel = mongoose.model("midwestHorizon", midwestHorizonSchema);
