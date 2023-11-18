import express from 'express';
import { FieldModel } from '../models/Fields.js';
import { UserModel } from '../models/Users.js';
import { verifyToken } from './users.js';


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await FieldModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err)
    }
});

router.post("/", verifyToken, async (req, res) => {
    const field = new FieldModel(req.body);

    try {
        const response = await field.save();
        res.json(response);
    } catch (err) {
        res.json(err)
    }
});

router.put("/", verifyToken, async (req, res) => {

    try {
        const field = await FieldModel.findById(req.body.fieldID);
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

router.get("/savedFields/:userID", verifyToken, async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        const savedFields = await FieldModel.find({
            _id: { $in: user.savedFields }
        });
        res.json({ savedFields });
    } catch (err) {
        res.json(err)
    }
});

export { router as fieldsRouter };

