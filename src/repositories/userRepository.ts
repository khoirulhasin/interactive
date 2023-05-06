
import UserSchema from '@models/user.model';

export const getUsersRepository = async () => {
    const users = await UserSchema.find({});
    return users;
} 

export const getUserByIdRepository = async (id) => {
    const user = await UserSchema.findOne({_id: id});
    return user;
} 

export const insertUserRepository = async (payload) => {
    const user = await UserSchema.create(payload);
    return user; 
}

export const getUserByEmailRepository = async (email) => {
    const user = await UserSchema.findOne({ email: email});
    return user; 
}

export const updateUserByIdRepository = async (id, data) => {
    const user = await UserSchema.findByIdAndUpdate(id, data);
    return user;
}

export const deleteUserlRepository = async (payload) => {
    const user = await UserSchema.deleteOne({_id: payload.id});
    return user; 
}