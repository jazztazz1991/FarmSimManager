import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

const SiteInfoSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    day: { type: Number, required: true },
    monthCounter: { type: Number, required: true },
    year: { type: Number, required: true }

});

export const SiteInfoModel = mongoose.model("siteInfo", SiteInfoSchema);