import { deleteProjectService, getProjectByIdService, getProjectsService, insertProjectService, updateProjectService } from '@services/projectService';
export const getProjectsController = async (req, res) => {
    const projects = await getProjectsService(req);
    res.success({result: projects});
};

export const getProjectByIdController = async (req, res) => {
    const project = await getProjectByIdService(req);
    res.success({result: project});
};

export const insertProjectController = async (req, res) => {
    const project = await insertProjectService(req);
    res.success({result: project});
};

export const updateProjectController = async (req, res) => {
    const project = await updateProjectService(req);
    res.success({result: project});
};

export const deleteProjectController = async (req, res) => {
    const project = await deleteProjectService(req);
    res.success({result: project});
};