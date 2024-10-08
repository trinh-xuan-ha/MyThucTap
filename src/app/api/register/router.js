import { NextResponse } from "next/server";
export async function POST(req) {
    try{
        const { name, email, password} = await request.json();
        console.log(name, email, password);
        return NextResponse.json({ message: "user registered."}, { status: 201})
    }catch(error){
        return NextResponse.json(
            { message: "an error occurred white registering the user." },
            { status: 500}
        )
    }
        
}