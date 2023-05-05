import { decodeJWT } from '@helpers/jwtHelper';
import { getProjectsRepository, insertProjectRepository, deleteProjectlRepository, updateProjectByIdRepository, getProjectByIdRepository } from '@repositories/projectRepository';
import ESAPI from 'node-esapi'
export const getProjectsService = async (req) => {
    const decoded = await decodeJWT(req)
    const projects = await getProjectsRepository(decoded._id);
    return projects;
}

export const getProjectByIdService = async (req) => {
    const { id } = req.params
    const task = await getProjectByIdRepository(id);
    return task;
}

export const insertProjectService = async (req) => {
    const decoded = await decodeJWT(req)
    const payload = req.body;
    const data = {name: payload.name, description: ESAPI.encoder().encodeForHTML(payload.description), due_date: payload.due_date, user_id: decoded._id}; 
    const project = await insertProjectRepository(data);
    return project;
}

export const updateProjectService = async (req) => {
    const payload = req.body;
    const id = req.params;
    const data = {name: payload.name, description: ESAPI.encoder().encodeForHTML(payload.description), due_date: payload.due_date};
    const project = await updateProjectByIdRepository(id.id, data);
    return project;
}

export const deleteProjectService = async (req) => {
    const payload = req.params;
    const project = await deleteProjectlRepository(payload);
    return project;
}