import mongoose from 'mongoose';

const FieldSchema = new mongoose.Schema({
    userOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    fieldNumber: { type: String, required: true, unique: true },
    acres: { type: Number, required: true },
    cropType: { type: String, required: true },
    plowed: { type: Boolean, required: true },
    cultivated: { type: Boolean, required: true },
    limed: { type: Boolean, required: true },
    fertilized: { type: Boolean, required: true },
    herbicide: { type: Boolean, required: true },
    mulched: { type: Boolean, required: true },
    rolled: { type: Boolean, required: true },
    perLoam: { type: Number, required: true },
    perSandyLoam: { type: Number, required: true },
    perLoamySand: { type: Number, required: true },
    perSiltyClay: { type: Number, required: true },
});

export const FieldModel = mongoose.model("fields", FieldSchema);
