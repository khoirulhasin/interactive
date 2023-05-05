import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';

export interface IProject extends Document {
    name: String
    description: string;
    due_date: string;
    user_id: IUser['_id'];
}

const ProjectSchema: Schema = new Schema({
    name:  { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: Date, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        } 
    ]
    
});

export default mongoose.model<IProject>('Project', ProjectSchema);