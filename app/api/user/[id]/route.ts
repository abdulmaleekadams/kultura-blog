import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from '@/app/llib/helper';
import prisma from '@/prisma';
import { NextResponse } from 'next/server';

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    await connectToDb();

    const user = await prisma.user.findFirst({
      where: { id },
      include: { _count: true, blogs: true },
    });
    return generateSuccessMessage(user, 201);
  } catch (error) {
    return generateErrorMessage(error, 500);
  } finally {
    await prisma.$disconnect();
  }
};
