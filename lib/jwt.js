import jwt from "jsonwebtoken";

const secret_key = process.env.JWT_SECRET || 'jwt'

export async function signToken(payload) {
   const ret = await jwt.sign(payload, secret_key, { expiresIn: '24h' })
    return ret
    
}

export function verifyToken(token){
try {
    const decode = jwt.verify(token, secret_key)
    return decode
} catch (error) {
    // console.log('token verification failed', error)
    return error
}
}