import { PrismaClient } from '@models/mongo/generated/client'


export const prisma =
  new PrismaClient({
    log: ['query'],
})