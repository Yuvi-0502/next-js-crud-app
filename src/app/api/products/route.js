import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionLink } from "@/lib/db";
import Product from "@/lib/models/product";

export async function GET(request) {
  let data;
  let success = true;
  try{
  await mongoose.connect(connectionLink);

   data = await Product.find();
  } catch(error){
    data = {error:error}
    success = false;
  }

  return NextResponse.json({ result: data, success },{status: 200});
}

export async function POST(request) {
  await mongoose.connect(connectionLink);

  const body = await request.json();
     
  
  const product = new Product(body);
  
  const data = await product.save();


  return NextResponse.json({ result: data, success: true }, { status: 201 });
}
