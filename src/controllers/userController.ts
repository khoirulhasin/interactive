import { getUsersService, insertUserService } from '@services/userService';
export const getUsersController = async (_, res) => {
    const users = await getUsersService();
    res.success({result: users, message: 'NOT IMPLEMENTED: message index'});
};

export const insertUserController = async (req, res) => {
    const users = await insertUserService(req);
    res.success({result: users, message: 'NOT IMPLEMENTED: message index'});
};