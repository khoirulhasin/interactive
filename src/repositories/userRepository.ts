import { prisma as prismaPostgre } from '@config/databasePostgre';

export const getUsersRepository = async () => {
    const users = await prismaPostgre.user.findMany();
    return users;
} 