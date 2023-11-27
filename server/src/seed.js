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
{
        "fieldNumber": 10, 
        "acres": 27.34,
        "yieldPotential": 112
    },
 {
        "fieldNumber": 11, 
        "acres": 44.84,
        "yieldPotential": 115
    },
 {
        "fieldNumber": 12, 
        "acres": 19.89,
        "yieldPotential": 105 
    },
{
        "fieldNumber": 13, 
        "acres": 23.01,
        "yieldPotential": 112
    },
{
        "fieldNumber": 14, 
        "acres": 43.84,
        "yieldPotential": 110
    },
{
        "fieldNumber": 15, 
        "acres": 6.52,
        "yieldPotential": 94
    },
{
        "fieldNumber": 16, 
        "acres": 7.79,
        "yieldPotential": 94
    },
{
        "fieldNumber": 17, 
        "acres": 13.91,
        "yieldPotential": 94
    },


{
        "fieldNumber": 18, 
        "acres": 17.73,
        "yieldPotential": 94
    },
{
        "fieldNumber": 19, 
        "acres": 3.7,
        "yieldPotential": 95
    },
{
        "fieldNumber": 20, 
        "acres": 27.55,
        "yieldPotential": 90
    },
{
        "fieldNumber": 21, 
        "acres": 13.85,
        "yieldPotential": 90
    },
 {
        "fieldNumber": 22, 
        "acres": 25.38,
        "yieldPotential": 91
    },
 {
        "fieldNumber": 23, 
        "acres": 33.3,
        "yieldPotential": 96 
    },
{
        "fieldNumber": 24, 
        "acres": 18.21,
        "yieldPotential": 94
    },
{
        "fieldNumber": 25, 
        "acres": 5.62,
        "yieldPotential": 91
    },
{
        "fieldNumber": 26, 
        "acres": 2.31,
        "yieldPotential": 92
    },


{
        "fieldNumber": 27, 
        "acres": 2.22,
        "yieldPotential": 92
    },
{
        "fieldNumber": 28, 
        "acres": 4.13,
        "yieldPotential": 91
    },


{
        "fieldNumber": 29, 
        "acres": 3.92,
        "yieldPotential": 91
    },
{
        "fieldNumber": 30, 
        "acres": 33.15,
        "yieldPotential": 89
    },
 {
        "fieldNumber": 31, 
        "acres": 14.64,
        "yieldPotential": 87
    },
 {
        "fieldNumber": 32, 
        "acres": 14.25,
        "yieldPotential": 89 
    },
{
        "fieldNumber": 33, 
        "acres": 10.18,
        "yieldPotential": 96
    },
{
        "fieldNumber": 34, 
        "acres": 6.29,
        "yieldPotential": 89
    },
{
        "fieldNumber": 35, 
        "acres": 22.19,
        "yieldPotential": 90
    },
{
        "fieldNumber": 36, 
        "acres": 31.24,
        "yieldPotential": 92
    },
{
        "fieldNumber": 37, 
        "acres": 8.08,
        "yieldPotential": 92
    },


{
        "fieldNumber": 38, 
        "acres": 24.92,
        "yieldPotential": 95
    },
{
        "fieldNumber": 39, 
        "acres": 15.17,
        "yieldPotential": 89
    },
{
        "fieldNumber": 40, 
        "acres": 16.04,
        "yieldPotential": 89
    },
{
        "fieldNumber": 41, 
        "acres": 59.08,
        "yieldPotential": 100
    },
 {
        "fieldNumber": 42, 
        "acres": 134.96,
        "yieldPotential": 96
    },
 {
        "fieldNumber": 43, 
        "acres": 5.7,
        "yieldPotential": 89 
    },
{
        "fieldNumber": 44, 
        "acres": 3.23,
        "yieldPotential": 89
    },
{
        "fieldNumber": 45, 
        "acres": 10.11,
        "yieldPotential": 89
    },
{
        "fieldNumber": 46, 
        "acres": 24.55,
        "yieldPotential": 90
    },
{
        "fieldNumber": 47, 
        "acres": 3.51,
        "yieldPotential": 89
    },
{
        "fieldNumber": 48, 
        "acres": 13.18,
        "yieldPotential": 89
    },


{
        "fieldNumber": 49, 
        "acres": 5.25,
        "yieldPotential": 89
    },
{
        "fieldNumber": 50, 
        "acres": 2.38,
        "yieldPotential": 89
    },
{
        "fieldNumber": 51, 
        "acres": 4.35,
        "yieldPotential": 89
    },
 {
        "fieldNumber": 52, 
        "acres": 4.35,
        "yieldPotential": 89
    },
 {
        "fieldNumber": 53, 
        "acres": 20.12,
        "yieldPotential": 98 
    },
{
        "fieldNumber": 54, 
        "acres": 30.29,
        "yieldPotential": 121
    },
{
        "fieldNumber": 55, 
        "acres": 1.59,
        "yieldPotential": 89
    },
{
        "fieldNumber": 56, 
        "acres": 5.65,
        "yieldPotential": 89
    },
{
        "fieldNumber": 57, 
        "acres": 6,
        "yieldPotential": 89
    },
{
        "fieldNumber": 58, 
        "acres": 14.86,
        "yieldPotential": 89
    },


{
        "fieldNumber": 59, 
        "acres": 11.39,
        "yieldPotential": 89
    },
{
        "fieldNumber": 60, 
        "acres": 3.52,
        "yieldPotential": 92
    },
{
        "fieldNumber": 61, 
        "acres": 9.67,
        "yieldPotential": 102
    },
 {
        "fieldNumber": 62, 
        "acres": 101.74,
        "yieldPotential": 97
    },
 {
        "fieldNumber": 63, 
        "acres": 12.88,
        "yieldPotential": 89 
    },
{
        "fieldNumber": 64, 
        "acres": 38.49,
        "yieldPotential": 91
    },
{
        "fieldNumber": 65, 
        "acres": 12.43,
        "yieldPotential": 110
    },
{
        "fieldNumber": 66, 
        "acres": 27.95,
        "yieldPotential": 103
    },
{
        "fieldNumber": 67, 
        "acres": 21.62,
        "yieldPotential": 107
    },
{
        "fieldNumber": 68, 
        "acres": 10,
        "yieldPotential": 99
    },


{
        "fieldNumber": 69, 
        "acres": 37.86,
        "yieldPotential": 97
    },
{
        "fieldNumber": 70, 
        "acres": 25.12,
        "yieldPotential": 95
    },
{
        "fieldNumber": 71, 
        "acres": 4.29,
        "yieldPotential": 95
    },
 {
        "fieldNumber": 72, 
        "acres": 17.36,
        "yieldPotential": 95
    },
 {
        "fieldNumber": 73, 
        "acres": 19.9,
        "yieldPotential": 91 
    },
{
        "fieldNumber": 74, 
        "acres": 22.89,
        "yieldPotential": 94
    },
{
        "fieldNumber": 75, 
        "acres": 31.06,
        "yieldPotential": 110
    },
{
        "fieldNumber": 76, 
        "acres": 5.33,
        "yieldPotential": 116
    },
{
        "fieldNumber": 77, 
        "acres": 80.76,
        "yieldPotential": 108
    },
{
        "fieldNumber": 78, 
        "acres": 49.12,
        "yieldPotential": 107
    },


{
        "fieldNumber": 79, 
        "acres": 26.85,
        "yieldPotential": 102
    },
{
        "fieldNumber": 80, 
        "acres": 13.16,
        "yieldPotential": 86
    },
{
        "fieldNumber": 81, 
        "acres": 69.24,
        "yieldPotential": 102
    },
 {
        "fieldNumber": 82, 
        "acres": 10.72,
        "yieldPotential": 83
    },
 {
        "fieldNumber": 83, 
        "acres": 27.16,
        "yieldPotential": 105 
    },
{
        "fieldNumber": 84, 
        "acres": 8.17,
        "yieldPotential": 92
    },
{
        "fieldNumber": 85, 
        "acres": 0.69,
        "yieldPotential": 111
    },
{
        "fieldNumber": 86, 
        "acres": 20.5,
        "yieldPotential": 111
    },
{
        "fieldNumber": 87, 
        "acres": 6.04,
        "yieldPotential": 106
    },
{
        "fieldNumber": 88, 
        "acres": 9.95,
        "yieldPotential": 106
    },


{
        "fieldNumber": 89, 
        "acres": 7.84,
        "yieldPotential": 106
    },
{
        "fieldNumber": 90, 
        "acres": 9.11,
        "yieldPotential": 102
    },
{
        "fieldNumber": 91, 
        "acres": 5.69,
        "yieldPotential": 102
    },
 {
        "fieldNumber": 92, 
        "acres": 34.45,
        "yieldPotential": 112
    },
 {
        "fieldNumber": 93, 
        "acres": 16.73,
        "yieldPotential": 102 
    },
{
        "fieldNumber": 94, 
        "acres": 28.21,
        "yieldPotential": 91
    },
{
        "fieldNumber": 95, 
        "acres": 17.5,
        "yieldPotential": 102
    },
{
        "fieldNumber": 96, 
        "acres": 2.76,
        "yieldPotential": 102
    },
{
        "fieldNumber": 97, 
        "acres": 9.1,
        "yieldPotential": 102
    },
{
        "fieldNumber": 98, 
        "acres": 14.63,
        "yieldPotential": 98
    },


{
        "fieldNumber": 99, 
        "acres": 40.84,
        "yieldPotential": 119
    },
{
        "fieldNumber": 100, 
        "acres": 34.18,
        "yieldPotential": 95
    },
{
        "fieldNumber": 101, 
        "acres": 5.36,
        "yieldPotential": 95
    },
 {
        "fieldNumber": 102, 
        "acres": 3.11,
        "yieldPotential": 95
    },
 {
        "fieldNumber": 103, 
        "acres": 55.09,
        "yieldPotential": 100 
    },
{
        "fieldNumber": 104, 
        "acres": 10.59,
        "yieldPotential": 122
    },
{
        "fieldNumber": 105, 
        "acres": 6.29,
        "yieldPotential": 125
    },
{
        "fieldNumber": 106, 
        "acres": 9.43,
        "yieldPotential": 99
    },
{
        "fieldNumber": 107, 
        "acres": 14.55,
        "yieldPotential": 98
    },


{
        "fieldNumber": 108, 
        "acres": 159.75,
        "yieldPotential": 96
    },


{
        "fieldNumber": 109, 
        "acres": 52.33,
        "yieldPotential": 106
    },
{
        "fieldNumber": 110, 
        "acres": 69.93,
        "yieldPotential": 98
    },
{
        "fieldNumber": 111, 
        "acres": 19.53,
        "yieldPotential": 100
    },
 {
        "fieldNumber": 112, 
        "acres": 8.19,
        "yieldPotential": 96
    },
 {
        "fieldNumber": 113, 
        "acres": 6.18,
        "yieldPotential": 96 
    },
{
        "fieldNumber": 114, 
        "acres": 36.12,
        "yieldPotential": 92
    },
{
        "fieldNumber": 115, 
        "acres": 36.26,
        "yieldPotential": 101
    },
{
        "fieldNumber": 116, 
        "acres": 22.83,
        "yieldPotential": 106
    },
{
        "fieldNumber": 117, 
        "acres": 77.96,
        "yieldPotential": 103
    },
{
        "fieldNumber": 118, 
        "acres": 37.03,
        "yieldPotential": 114
    },


{
        "fieldNumber": 119, 
        "acres": 76.7,
        "yieldPotential": 99
    },
{
        "fieldNumber": 120, 
        "acres": 10.2,
        "yieldPotential": 109
    },
 {
        "fieldNumber": 121, 
        "acres": 55.81,
        "yieldPotential": 102
    },
 {
        "fieldNumber": 122, 
        "acres": 9.08,
        "yieldPotential": 122
    },
 {
        "fieldNumber": 123, 
        "acres": 12.85,
        "yieldPotential": 125 
    },
{
        "fieldNumber": 124, 
        "acres": 21.29,
        "yieldPotential": 123
    },
{
        "fieldNumber": 125, 
        "acres": 13.2,
        "yieldPotential": 113
    },
{
        "fieldNumber": 126, 
        "acres": 8.87,
        "yieldPotential": 99
    },
{
        "fieldNumber": 127, 
        "acres": 29.29,
        "yieldPotential": 115
    }


];

const seedDB = async () => {
    await MidwestHorizonModel.deleteMany({});
    await MidwestHorizonModel.insertMany(seedFields);
};

seedDB().then(() => {
    mongoose.connection.close();
});