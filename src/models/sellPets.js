import mongoose, { Schema } from "mongoose";

const sellPetsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: String, 
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    petImage: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
},{timestamps:true});

const Pets = mongoose.model('uploadPetDetails', sellPetsSchema);
export default Pets;
