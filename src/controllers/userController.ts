import { deleteUserService, getUserByIdService, getUsersService, insertUserService, loginUserService, registerUserService, updateUserService } from '@services/userService';

export const getUsersController = async (_, res) => {
    const users = await getUsersService();
    res.success({result: users});
};

export const getUserByIdController = async (req, res) => {
    const users = await getUserByIdService(req);
    res.success({result: users});
};

export const insertUserController = async (req, res) => {
    const user = await insertUserService(req);
    res.success({result: user});
};

export const updateUserController = async (req, res) => {
    const user = await updateUserService(req);
    res.success({result: user});
};

export const registerUserController = async (req, res) => {
    const user = await registerUserService(req);
    res.success({result: user});
};

export const loginUserController = async (req, res) => {
    const user = await loginUserService(req);
    res.success({result: user});
};

export const deleteUserController = async (req, res) => {
    const user = await deleteUserService(req);
    res.success({result: user});
};