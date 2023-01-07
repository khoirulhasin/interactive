import { prisma as prismaPostgre } from '@config/database/postgre';

export const getUsersRepository = async () => {
    const users = await prismaPostgre.user.findMany();
    return users;
} 