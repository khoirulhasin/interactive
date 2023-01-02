import { PrismaClient } from '@models/mongo/generated/client'


export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
})