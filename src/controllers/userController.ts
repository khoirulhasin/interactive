import { getUsersService } from '@services/userService';
export const getUsersController = async (_, res) => {
    const users = await getUsersService();
    res.success({result: users, message: 'NOT IMPLEMENTED: message index'});
};