import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET(request: Request) {

    const numberLinks = await prisma.link.count();

    return NextResponse.json(numberLinks);

}
