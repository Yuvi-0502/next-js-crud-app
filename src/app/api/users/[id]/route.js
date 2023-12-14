import {user} from "@/app/utils/db"
import { NextResponse } from "next/server"

export async function GET(request,content){
    const data = user;
    const userData = data.filter((item) => item.id.toString() === content.params.id )
    return NextResponse.json(userData.length === 0 ? {result:"No user found", success: false}:{result:userData, success: true},{status:200}) 
}
export async function PUT(request,content){
    const payload = await request.json();
    payload.id = content.params.id;
    if(!payload.id || !payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"require field not found", success: false},{status:400}) 
    }
    return NextResponse.json({result: payload, success: true},{status:200}) 
}

export async function DELETE(request,content){;
    const id = content.params.id;

    if(id){
      return NextResponse.json({result: "User Deleted",success: true},{status:200}) 
    }else{
        return NextResponse.json({result: "Internal error, Please try after sometime",success: false},{status:404}) 
    }
}