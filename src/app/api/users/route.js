import {user} from "@/app/utils/db"
import { NextResponse } from "next/server"

export async function GET(){
    const data = user;
    return NextResponse.json({result:data, success: true},{status:200}) 
}

export async function POST(request){
    const payload = await request.json();
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"require field not found", success: false},{status:400}) 
    }
    return NextResponse.json({result:payload, success: true},{status:201}) 
}