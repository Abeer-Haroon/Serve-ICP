import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ItemSchema = new Schema({
    FirstName:{
        type: String
    },

    LastName:{
        type: String
    },

    Phone: {
        type: String
    },

    Email: {
        type: String
    }

});