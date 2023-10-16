import { dbConnection } from "@/lib/dbconnection";
import Pets from "@/models/sellPets";
import { NextResponse } from "next/server";

export async function POST(request){

    const {age,breed,sex,price,petImage,contact,mobile,description} = await request.json();
    await dbConnection();
    await Pets.create({age,breed,sex,price,petImage,contact,mobile,description});
    return NextResponse.json({"message":"Pets Details are Listed successfully"},{status:201})


}