import { connectionStr } from "@/lib/db";
import { restaurantSchema } from "@/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    const data = await restaurantSchema.find()
    console.log("data",data)
return NextResponse.json({result:true});
}
