
import ProjectSchema from '@models/project.model';
import UserSchema from '@models/user.model';

export const getProjectsRepository = async (userId) => {
    const users = await ProjectSchema.find({user_id: userId}).populate('tasks');
    return users;
} 

export const getProjectByIdRepository = async (id) => {
    const users = await ProjectSchema.findOne({_id: id});
    return users;
} 

export const insertProjectRepository = async (payload) => {
    const project = await ProjectSchema.create(payload);
    await UserSchema.findByIdAndUpdate(
        payload.user_id,
        { $push: { projects: project._id } },
        { new: true, useFindAndModify: false }
      );
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