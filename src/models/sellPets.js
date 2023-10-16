import mongoose, { Schema, models } from 'mongoose';

const petTypes = ['Select Pet Type', 'cat', 'dog', 'bird'];

const sellPetsSchema = new Schema({
  name: {
    type: String,
   
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  petImage: {
    type: String,
    required: true,
  },
  petType: {
    type: String,
    enum: petTypes,
    default: petTypes[0],
  },
  contact: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Pets = models.Pets || mongoose.model('Pets', sellPetsSchema);
export default Pets;
