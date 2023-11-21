import express from 'express';
import { SiteInfoModel } from '../models/SiteInfo.js';

const router = express.Router();

router.get("/", async (req, res) => {
    const dateInfo = await SiteInfoModel.findById(process.env.siteInfoID);
    res.json(dateInfo);
});

export { router as siteRouter };
