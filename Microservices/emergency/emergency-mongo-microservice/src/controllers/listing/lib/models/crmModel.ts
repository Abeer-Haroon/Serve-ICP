import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ItemSchema = new Schema({
    Name:{
        type: String
    },


    Emirate: {
        type: String
    },
    PreferredLocation: {
        type: String 
    },

    Phone: {
        type: String
    }

   

});