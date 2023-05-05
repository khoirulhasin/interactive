import  jwt from 'jsonwebtoken';

export const decodeJWT = async (req) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split('Bearer ')[1]
    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    return decoded;
}