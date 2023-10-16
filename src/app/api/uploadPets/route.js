import { dbConnection } from "@/lib/dbconnection";
import Pets from "@/models/sellPets";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request){

    const {age,breed,sex,price,petImage,contact,mobile,description} = await request.json();
    await dbConnection();
    await Pets.create({age,breed,sex,price,petImage,contact,mobile,description});
    return NextResponse.json({"message":"Pets Details are Listed successfully"},{status:201})


}
export const GET = async (request) => {
    try {
      await dbConnection();
  
      const pet = await Pets.find();
      return new NextResponse(JSON.stringify(pet), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
  