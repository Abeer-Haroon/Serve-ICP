import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ItemSchema = new Schema({
    FirstName:{
        type: String
    },

    LastName:{
        type: String
    },

    ContractType: {
        type: String
    },

    
    EmiratesID: {
        type: String
    },

    Emirate: {
        type: String
    },

    Purpose: {
        type: String
    },
   

    Phone: {
        type: String
    },

    Email: {
        type: String
    }

});