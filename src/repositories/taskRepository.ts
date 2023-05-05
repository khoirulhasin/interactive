
import TaskSchema from '@models/task.model';
import ProjectSchema from '@models/project.model';

export const getTasksRepository = async (userId) => {
    const tasks = await TaskSchema.find({user_id: userId});
    return tasks;
} 

export const getTaskByIdRepository = async (id) => {
    const task = await TaskSchema.findOne({_id: id});
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