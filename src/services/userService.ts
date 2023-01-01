import { getUsersRepository } from '@repositories/userRepository';

export const getUsersService = async () => {
    const users = await getUsersRepository();
    return users;
}