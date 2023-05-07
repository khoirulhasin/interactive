
import TaskSchema from '@models/task.model';
import ProjectSchema from '@models/project.model';
import { castIdToObject } from '@helpers/mongoHelper';

export const getTasksRepository = async (userId) => {
    const tasks = await TaskSchema.aggregate([
        {'$match': { 'user_id': castIdToObject(userId) }},
        {'$lookup': {
            'from': 'projects',
            'localField': 'project_id',
            'foreignField': '_id',
            'as': 'project'
        }},
        {$unwind: '$project'},
        {'$lookup': {
            'from': 'users',
            'localField': 'user_id',
            'foreignField': '_id',
            'as': 'user'
        }},
        {$unwind: '$user'}
    ]);
    return tasks;
} 

export const getTaskByIdRepository = async (id) => {
    const task = await TaskSchema.aggregate([
        {'$match': { '_id': castIdToObject(id) }},
        {'$lookup': {
            'from': 'projects',
            'localField': 'project_id',
            'foreignField': '_id',
            'as': 'project'
        }},
        {$unwind: '$project'},
        {'$lookup': {
            'from': 'users',
            'localField': 'user_id',
            'foreignField': '_id',
            'as': 'user'
        }},
        {$unwind: '$user'}
    ]);
    return task;
} 

export const insertTaskRepository = async (payload) => {
    const task = await TaskSchema.create(payload);
    await ProjectSchema.findByIdAndUpdate(
        payload.project_id,
        { $push: { tasks: task._id } },
        { new: true, useFindAndModify: false }
      );
    return task; 
}

export const updateTaskByIdRepository = async (id, data) => {
    const task = await TaskSchema.findByIdAndUpdate(id, data);
    return task;
}

export const deleteTasklRepository = async (payload) => {
    const task = await TaskSchema.deleteOne({_id: payload.id});
    return task; 
}