import mongoose from 'mongoose';

const HarvestSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    year: { type: Number, required: true },
    harvests: [{
        fieldNumber: { type: Number, required: true },
        cropType: { type: String, required: true },
        plowed: { type: Boolean, required: true },
        cultivated: { type: Boolean, required: true },
        limed: { type: Boolean, required: true },
        fertilized: { type: Boolean, required: true },
        herbicide: { type: Boolean, required: true },
        mulched: { type: Boolean, required: true },
        rolled: { type: Boolean, required: true },
        yield: { type: Number },
        yieldPerAcre: { type: Number },
        soldAsCrop: { type: Number },
        soldAsSeed: { type: Number },
    }]
});

export const HarvestModel = mongoose.model("harvests", HarvestSchema);