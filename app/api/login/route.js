import { signToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(request, res) {
    const { email, password } = await request.json();
    console.log(email,password)

        if (!email || !password) {
       return NextResponse.json({message: 'Email and Password are required'},{status: 402});
        }
    
    const user = await prisma.User.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return NextResponse.json({message: 'Invalid Credentials'},{status: 401});
    } else {   
        const token = await signToken({ id: user.id, email: user.email, role: user.role })
        return NextResponse.json({ token: token,user }, { message: 'user logged in' }, { status: 200 })
    }
}


