import { deleteTaskService, getTaskByIdService, getTasksService, insertTaskService, updateTaskService } from '@services/taskService';
export const getTasksController = async (req, res) => {
    const tasks = await getTasksService(req);
    res.success({result: tasks});
};

export const getTaskByIdController = async (req, res) => {
    const task = await getTaskByIdService(req);
    res.success({result: task});
};

export const insertTaskController = async (req, res) => {
    const task = await insertTaskService(req);
    res.success({result: task});
};

export const updateTaskController = async (req, res) => {
    const task = await updateTaskService(req);
    res.success({result: task});
};

export const deleteTaskController = async (req, res) => {
    const task = await deleteTaskService(req);
    res.success({result: task});
};