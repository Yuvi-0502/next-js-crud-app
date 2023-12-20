import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionLink } from "@/lib/db";
import Product from "@/lib/models/product";

export async function PUT(request, content) {

  const body = await request.json();
  const id = content.params.productId;
  await mongoose.connect(connectionLink);

  const data = await Product.findByIdAndUpdate({_id:id},{$set:body},{ new: true })

  if(!data)
  return NextResponse.json({ result: "Not found", success:false },{status: 404});

  return NextResponse.json({ result: data, success:true },{status: 200});
}

export async function GET(request, content) {

    const id = content.params.productId;
    await mongoose.connect(connectionLink);
  
    const data = await Product.findById({_id:id})
    
    if(!data)
      return NextResponse.json({ result: "Not found", success:false },{status: 404});
  
    return NextResponse.json({ result: data, success:true },{status: 200});
}

export async function DELETE(request, content) {

    const id = content.params.productId;
    await mongoose.connect(connectionLink);
  
    const data = await Product.findOneAndDelete({_id:id})

    if(!data)
    return NextResponse.json({ result: "Not found", success:false },{status: 404});
  
    return NextResponse.json({ result: data, success:true },{status: 200});
  }
