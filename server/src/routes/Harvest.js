import express from 'express';
import { HarvestModel } from '../models/Harvest.js';
import { UserModel } from '../models/Users.js';
import { verifyToken } from './users.js';


const router = express.Router();

router.get("/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        const harvests = await HarvestModel.find({
            user: user._id
        })
        res.json({ harvests });

    } catch (err) {
        res.json(err);
    }
});

router.post("/", async (req, res) => {
    const field = new HarvestModel(req.body);

    try {
        const response = await field.save();
        res.json(response);
    } catch (err) {
        res.json(err)
    }
});

router.post("/harvests", async (req, res) => {
    const user = await UserModel.findById(req.body.userID);
    const userID = req.body.userID;
    const harvestYear = parseInt(req.body.addHarvest.harvestYear);
    const fieldNumber = req.body.addHarvest.fieldNumber;
    const field = req.body;
    try {
        const harvestDoc = await HarvestModel.findOne({
            user: userID
        });
        if (harvestDoc) {
            // const harvestIndex = harvestDoc.harvests.findIndex((harvest) => parseInt(harvest.fieldNumber) === parseInt(fieldNumber));
            // const harvestExist = harvestIndex !== -1 ? harvestDoc.harvests[harvestIndex] : null;

            // if (harvestExist) {
            //     // Update existing harvest
            //     harvestExist.cropType = field.cropType; // Replace with desired crop type
            //     harvestExist.plowed = field.plowed;
            //     harvestExist.cultivated = field.cultivated;
            //     harvestExist.limed = field.limed;
            //     harvestExist.fertilized = field.fertilized;
            //     harvestExist.herbicide = field.herbicide;
            //     harvestExist.mulched = field.mulched;
            //     harvestExist.rolled = field.rolled;
            //     harvestExist.yield = field.yield;
            //     harvestExist.yieldPerAcre = field.yieldPerAcre;
            //     harvestExist.soldAsCrop = field.soldAsCrop;
            //     harvestExist.soldAsSeed = field.soldAsSeed;
            // } else {
            // Add new harvest
            harvestDoc.harvests.push({
                fieldNumber: fieldNumber,
                cropType: field.addHarvest.cropType, // Replace with desired crop type
                plowed: field.addHarvest.plowed,
                cultivated: field.addHarvest.cultivated,
                limed: field.addHarvest.limed,
                fertilized: field.addHarvest.fertilized,
                herbicide: field.addHarvest.herbicide,
                mulched: field.addHarvest.mulched,
                rolled: field.addHarvest.rolled,
                yield: field.addHarvest.yield,
                yieldPerAcre: field.addHarvest.yieldPerAcre,
                soldAsCrop: field.addHarvest.soldAsCrop,
                soldAsSeed: field.addHarvest.soldAsSeed,
                harvestYear: harvestYear, // Add harvestYear
            });
            // }

            await harvestDoc.save();
            res.json(harvestDoc);
        } else {
            res.status(404).json({ message: 'Harvest document not found' });
        }
    } catch (err) {
        res.json(err);
    }
});


export { router as harvestRouter };