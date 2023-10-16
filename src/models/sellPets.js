import mongoose, { Schema, models } from 'mongoose';

const petTypes = ['Select Pet Type', 'cat', 'dog', 'bird'];

const sellPetsSchema = new Schema({
  
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



// {
  
//   "breed": "Ninja",
//   "age": "3",
//   "petType": "cat",
//   "contact": "123 Main St",
//   "mobile": "24234650",
//   "description": "A lovely Ninja cat ready for adoption",
//   "sex": "Male",
//   "price": 100,
//   "petImage": "path_to_image.jpg"
// }