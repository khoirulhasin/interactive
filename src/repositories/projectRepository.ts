
import { castIdToObject } from '@helpers/mongoHelper';
import ProjectSchema from '@models/project.model';
// import UserSchema from '@models/user.model';

export const getProjectsRepository = async (userId) => {
    const projects = await ProjectSchema.aggregate([
        {'$match': { 'user_id': castIdToObject(userId) }},
        {'$lookup': {
            'from': 'tasks',
            'localField': '_id',
            'foreignField': 'project_id',
            'as': 'tasks'
        }},
        {'$lookup': {
            'from': 'users',
            'localField': 'user_id',
            'foreignField': '_id',
            'as': 'user'
        }},
        {$unwind: '$user'}
    ]);
    return projects;
} 

export const getProjectByIdRepository = async (id) => {
    const project = await ProjectSchema.aggregate([
        {'$match': { '_id': castIdToObject(id) }},
        {'$lookup': {
            'from': 'tasks',
            'localField': "_id",
            'foreignField': 'project_id',
            'as': 'tasks'
        }}
    ]);
    return project;
} 

export const insertProjectRepository = async (payload) => {
    const project = await ProjectSchema.create(payload);
    // await UserSchema.findByIdAndUpdate(
    //     payload.user_id,
    //     { $push: { projects: project._id } },
    //     { new: true, useFindAndModify: false }
    //   );
    return project; 
}

export const updateProjectByIdRepository = async (id, data) => {
    const project = await ProjectSchema.findByIdAndUpdate(id, data);
    return project;
}

export const deleteProjectlRepository = async (payload) => {
    const project = await ProjectSchema.deleteOne({_id: payload.id});
    return project; 
}