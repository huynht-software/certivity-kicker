import { PrismaClient } from '@/app/generated/prisma'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : [],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

if (process.env.NODE_ENV === 'development') {
  process.on('beforeExit', async () => {
    await prisma.$disconnect()
  })
}

export default prisma
