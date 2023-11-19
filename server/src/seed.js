import mongoose from "mongoose";
import { MidwestHorizonModel } from "./models/MidwestHorizon.js";

mongoose.connect('mongodb+srv://lanugginoso:helloworld@farmsim.zpw2zwz.mongodb.net/FarmSim?retryWrites=true&w=majority');

const seedFields = [
    {
        "fieldNumber": 1,
        "acres": 12.76,
        "yieldPotential": 98
    },
    {
        "fieldNumber": 2,
        "acres": 11.73,
        "yieldPotential": 92
    },
    {
        "fieldNumber": 3,
        "acres": 16.11,
        "yieldPotential": 98
    },
    {
        "fieldNumber": 4,
        "acres": 42.84,
        "yieldPotential": 99
    },
    {
        "fieldNumber": 5,
        "acres": 6.29,
        "yieldPotential": 116
    },
    {
        "fieldNumber": 6,
        "acres": 21.93,
        "yieldPotential": 108
    },
    {
        "fieldNumber": 7,
        "acres": 22.85,
        "yieldPotential": 111
    },
    {
        "fieldNumber": 8,
        "acres": 72.04,
        "yieldPotential": 104
    },


    {
        "fieldNumber": 9,
        "acres": 15.54,
        "yieldPotential": 85
    },

];

const seedDB = async () => {
    await MidwestHorizonModel.deleteMany({});
    await MidwestHorizonModel.insertMany(seedFields);
};

seedDB().then(() => {
    mongoose.connection.close();
});