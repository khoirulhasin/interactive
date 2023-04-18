import { getUsersRepository, insertUserRepository } from '@repositories/userRepository';

export const getUsersService = async () => {
    const users = await getUsersRepository();
    return users;
}

export const insertUserService = async (req) => {
    const payload = req.body;
    const users = await insertUserRepository(payload);
    return users;
}