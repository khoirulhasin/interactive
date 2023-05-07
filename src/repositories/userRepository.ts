
import { castIdToObject } from '@helpers/mongoHelper';
import UserSchema from '@models/user.model';

export const getUsersRepository = async () => {
    const users = await UserSchema.aggregate([
        {'$lookup': {
            'from': 'projects',
            'localField': "_id",
            'foreignField': 'user_id',
            'as': 'projects'
        }}
    ]);
    return users;
} 

export const getUserByIdRepository = async (id) => {
    const user: any = await UserSchema.aggregate([
        {'$match': { '_id': castIdToObject(id) }},
        {'$lookup': {
            'from': 'projects',
            'localField': "_id",
            'foreignField': 'user_id',
            'as': 'project'
        }},
        {$unwind: '$project'}
    ]);
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