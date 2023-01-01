import { prisma } from '@config/database';

export const getUsersRepository = async () => {
    const users = await prisma.user.findMany();
    return users;
} 