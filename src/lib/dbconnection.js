import mongoose from "mongoose";

export const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log("Database connected successfully! ")

    }
    catch(err){
        console.log(err)
    }
}