import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from '@/app/llib/helper';
import prisma from '@/prisma';

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    await connectToDb();

    const category = await prisma.category.findFirst({
      where: { id },
      include: { _count: true, blogs: true },
    });
    return generateSuccessMessage(category, 201);
  } catch (error) {
    return generateErrorMessage(error, 500);
  } finally {
    await prisma.$disconnect();
  }
};
