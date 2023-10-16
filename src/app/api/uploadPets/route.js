import { dbConnection } from "@/lib/dbconnection";
import Pets from "@/models/sellPets";
import { NextResponse } from "next/server";

export async function POST(request){

    const {name,age,breed,sex,price,petImage,contact} = await request.json();
    await dbConnection();
    await Pets.create({name,age,breed,sex,price,petImage,contact});
    return NextResponse.json({"message":"Pets Details are Listed successfully"},{status:201})


}