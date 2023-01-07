import { PrismaClient } from '@models/postgre/generated/client'

export const prisma =
  new PrismaClient({
    log: ['query'],
  })

