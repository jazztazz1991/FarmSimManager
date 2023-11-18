import mongoose from "mongoose";
import { FieldModel } from "./models/Fields";

import { useGetUserID } from "../hooks/useGetUserID";


mongoose.connect(process.env.DB_LINK);

const userID = useGetUserID();


const seedFields = [
    {
        "userOwner": userID,
        "fieldNumber": 9,
        "acres": 59.08,
        "cropType": "Canola",
        "plowed": true,
        "cultivated": true,
        "limed": true,
        "fertilized": true,
        "herbicide": false,
        "mulched": false,
        "rolled": true,
        "yieldPotential": 21
    }
]