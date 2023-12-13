import { connectToDb } from '@/app/llib/helper';
import prisma from '@/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectToDb();

    const users = await prisma.user.findMany();
    return NextResponse.json({ message: 'Success', users }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};