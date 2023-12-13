import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from '@/app/llib/helper';
import prisma from '@/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectToDb();

    const categories = await prisma.category.findMany();
    return generateSuccessMessage({ categories }, 201);
  } catch (error) {
    return generateErrorMessage(error, 500);
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request) => {
  try {
    const { name } = await req.json();
    await connectToDb();

    const category = await prisma.category.create({ data: { name } });
    return generateSuccessMessage({ category }, 201);
  } catch (error) {
    return generateErrorMessage(error, 500);
  } finally {
    await prisma.$disconnect();
  }
};
