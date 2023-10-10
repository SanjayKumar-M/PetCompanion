import { dbConnection } from "@/lib/dbconnection";
import User from "@/models/userProfile";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name,email,mobile,address,profileImg,role} = await request.json();
    await dbConnection();
    await User.create({name,email,mobile,address,profileImg,role});
    return NextResponse.json({message:"User registered!"},{status:201}); 

}

