import { prisma as prismaPostgre } from '@config/database/postgre';

export const getUsersRepository = async () => {
    const users = await prismaPostgre.user.findMany({
        include: {
            posts: {
                select: {
                    title: true,
                    content: true
                }
            }
        }
    });
    return users;
} 

export const insertUserRepository = async (payload) => {
    const users = await prismaPostgre.user.create({
        data: {
            name: payload.name,
            email: payload.email
        }
    });
    return users;
} 