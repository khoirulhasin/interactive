import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';
import { IProject } from './project.model';

export interface ITask extends Document {
    name: String
    description: string;
    due_date: string;
    user_id: IUser['_id'];
    project_id: IProject['_id'];
}

const TaskSchema: Schema = new Schema({
    name:  { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: Date, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    project_id: { type: Schema.Types.ObjectId, required: true },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }
});

export default mongoose.model<ITask>('Task', TaskSchema);