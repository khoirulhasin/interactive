import mongoose from 'mongoose';

export const castIdToObject = (id) => {
    return new mongoose.Types.ObjectId(id);
}

