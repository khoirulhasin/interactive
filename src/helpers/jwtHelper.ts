import  jwt from 'jsonwebtoken';

export const createJwtToken = (email) => {
    return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}