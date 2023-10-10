import mongoose, {Schema, models} from "mongoose";
const userRole = ['buyer','seller']
const userProfileSchema = new Schema(
    {
        name:{
            type:String,
            required: true,

        },
        email:{
            type:String,
            required:true,
        },
        address:{
            type:String,
           
        },
        mobile:{
            type:String,
            
        },
        profileImg:{
            type:String
        },
        role:{
            type:String,
            enum:userRole,
            default:'buyer',
        }

    },{timestamps:true}
)

const User = models.User || mongoose.model('userProfile',userProfileSchema)
export default User