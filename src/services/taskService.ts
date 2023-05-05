import { decodeJWT } from '@helpers/jwtHelper';
import { getTasksRepository, insertTaskRepository, deleteTasklRepository, updateTaskByIdRepository, getTaskByIdRepository } from '@repositories/taskRepository';
import ESAPI from 'node-esapi';

export const getTasksService = async (req) => {
    const decoded = await decodeJWT(req)
    const tasks = await getTasksRepository(decoded._id);
    return tasks;
}

export const getTaskByIdService = async (req) => {
    const { id } = req.params
    const task = await getTaskByIdRepository(id);
    return task;
}

export const insertTaskService = async (req) => {
    const decoded = await decodeJWT(req)
    const payload = req.body;
    const data = {name: payload.name, description: ESAPI.encoder().encodeForHTML(payload.description), due_date: payload.due_date, user_id: decoded._id, project_id: payload.project_id, decription: payload.decription}; 
    const task = await insertTaskRepository(data);
    return task;
}

export const updateTaskService = async (req) => {
    const payload = req.body;
    const id = req.params;
    const data = {name: payload.name, description: ESAPI.encoder().encodeForHTML(payload.description), due_date: payload.due_date, project_id: payload.project_id};
    const task = await updateTaskByIdRepository(id.id, data);
    return task;
}

export const deleteTaskService = async (req) => {
    const payload = req.params;
    const task = await deleteTasklRepository(payload);
    return task;
}