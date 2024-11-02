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

export async function POST(request){
    let payload = await request.json();
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    let restaurant = new restaurantSchema(payload);
    const result = restaurant.save();
    console.log("payload",payload);
    return NextResponse.json({result,success:true});
}
