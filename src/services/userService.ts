import { comparePassword, cryptPassword } from '@helpers/encryptionHelper';
// import { decodeJWT } from '@helpers/jwtHelper';
import { getUserByEmailRepository, getUsersRepository, insertUserRepository, deleteUserlRepository, updateUserByIdRepository, getUserByIdRepository } from '@repositories/userRepository';
import  jwt  from  'jsonwebtoken';

export const getUsersService = async () => {
    const users = await getUsersRepository();
    return users;
}

export const getUserByIdService = async (req) => {
    const { id } = req.params
    const users = await getUserByIdRepository(id);
    return users;
}

export const insertUserService = async (req) => {
    const payload = req.body;
    payload.password = await cryptPassword(payload.password);
    const data = {name: payload.name, email: payload.email, password: payload.password}; 
    const user = await insertUserRepository(data);
    return user;
}

export const updateUserService = async (req) => {
    const payload = req.body;
    const { id } = req.params;
    const data = {name: payload.name, email: payload.email};
    const user = await updateUserByIdRepository(id, data);
    return user;
}

export const registerUserService = async (req) => {
    const payload = req.body;
    payload.password = await cryptPassword(payload.password)
    const data = {email: payload.email, password: payload.password}; 
    const user = await insertUserRepository(data);
    return user;
}

export const loginUserService = async (req) => {
    const payload = req.body;
    const user = await getUserByEmailRepository(payload.email);
    const isMatch = await comparePassword(payload.password, user.password);
    if(isMatch){
        const token = jwt.sign(
           {_id: user._id, name: user.name, email: user.email},
            process.env.TOKEN_SECRET,
            {
              expiresIn: "24h",
            }
          );
          return {authorization: true, token: token};
    } 
    else return{authorization: false}
}

export const deleteUserService = async (req) => {
    const payload = req.params;
    const user = await deleteUserlRepository(payload);
    return user;
}