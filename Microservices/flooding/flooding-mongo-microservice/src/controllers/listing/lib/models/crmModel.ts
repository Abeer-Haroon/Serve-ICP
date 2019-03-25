import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ItemSchema = new Schema({
    Area:{
        type: String
    },

    NearestLandmark:{
        type: String
    },

    LevelofUrgency: {
        type: String
    },

    Description: {
        type: String
    },

    Phone: {
        type: String
    },

    Name: {
        type: String
    }

});