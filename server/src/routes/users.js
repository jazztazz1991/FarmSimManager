import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js'

const router = express.Router();

router.post("/register", async (req, res) => {
    // const { username, password } = req.body;

    const username = req.body.username;
    console.log("this is before user " + username);
    const user = await UserModel.findOne({ username: username });
    console.log("this is the user in the user route " + user)
    res.json(user);
});

router.post("/login");

export { router as userRouter };