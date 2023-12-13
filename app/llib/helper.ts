import prisma from '@/prisma';

export const connectToDb = async () => {
  try {
    await prisma.$connect();
  } catch (error : any) {
    throw new Error(error);
  }
};
