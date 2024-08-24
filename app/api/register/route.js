import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'

export async function POST(request) {
    //   res.json(200).json({message: "perfect"})
    
    const { email, password, role } = await request.json();
    // return NextResponse.json({email, password, role})

    if (!email || !password) {
       return NextResponse.json({message: 'Email and Password are required'},{status: 402});
    }

    const existingUser = await prisma.User.findUnique({ where: { email } });
    if (existingUser) {
        return NextResponse.json({message: 'User already exist'},{status: 401});
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.User.create({
            data: { email, password: hashedPassword, role },
        });
        return NextResponse.json({message: 'user registered successfully', user },{status: 200})
    }

}