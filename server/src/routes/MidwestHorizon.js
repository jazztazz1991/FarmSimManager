import express from 'express';
import { MidwestHorizonModel } from '../models/MidwestHorizon.js';
import { UserModel } from '../models/Users.js';
import { verifyToken } from './users.js';


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await MidwestHorizonModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", verifyToken, async (req, res) => {
    const field = new MidwestHorizonModel(req.body);

    try {
        const response = await field.save();
        res.json(response);
    } catch (err) {
        res.json(err)
    }
});

router.put("/", verifyToken, async (req, res) => {

    try {
        const field = await MidwestHorizonModel.findById(req.body.fieldID);
        const user = await UserModel.findById(req.body.userID);

        user.savedFields.push(field);
        await user.save();
        res.json({ savedFields: user.savedFields });
    } catch (err) {
        res.json(err)
    }
});

router.get("/savedFields/ids/:userID", verifyToken, async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        res.json({ savedFields: user?.savedFields });
    } catch (err) {
        res.json(err)
    }
});

router.get("/savedFields/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        const savedFields = await MidwestHorizonModel.find({
            _id: { $in: user.savedFields }
        });
        res.json({ savedFields });
    } catch (err) {
        res.json(err)
    }
});

export { router as midwestHorizonRouter };

