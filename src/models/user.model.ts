import mongoose, { Schema, Document } from 'mongoose';


export interface IUser extends Document {
    name: String
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    name:  { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
});

export default mongoose.model<IUser>('User', UserSchema);