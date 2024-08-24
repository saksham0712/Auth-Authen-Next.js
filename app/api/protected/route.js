import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

// pages/api/protected.js

export async function GET(request) {
    const newToken = await request.headers.get('authorization')
    const token = newToken.split(' ')[1]
    // console.log('this is reponse', newToken1)
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJoZXJvQGdtYWlsLmNvbSIsImlhdCI6MTcyNDI0MDIzMCwiZXhwIjoxNzI0MzI2NjMwfQ.q64OL8udHkYDXggR8v6u_Ez05WLeWWUk30rVCxqiYNE";

  if (!token) {
    return NextResponse.json({ error: 'Access denied, token missing!' }, {status: 401});
  }

  try {
    const decoded = verifyToken(token);
    console.log('this is decode',decoded)
    return NextResponse.json({user: decoded},{ message: 'This is protected data'}, {status: 200});
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, {status: 400});
  }
}