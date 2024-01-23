import crypto from "crypto";
import { NextResponse } from "next/server";
import prisma from '@/lib/prismadb';

export async function POST(request: Request) {

    const {
        link,
        user
    } = await request.json();

    const hashedUrl = await hashUrl(link);

    const storedLink = await prisma.link.findFirst({
        where: {
            originalLink: link
        }
    })

    if (storedLink) {
        return NextResponse.json(storedLink);
    }

    const createdLink = await prisma.link.create({
        data: {
            originalLink: link,
            shortLink: hashedUrl,
            userId: user.id,
        }
    })

    return NextResponse.json(createdLink);
}

async function hashUrl(url: string): Promise<string> {

    const hash = crypto.createHash('sha256');

    hash.update(url);

    const decimalNumber = parseInt(hash.digest('hex'), 16);

    const base62String = await base62Encode(decimalNumber);

    const shortenedString = base62String.slice(0, 8);

    return shortenedString;
}


async function base62Encode(number: number): Promise<string> {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let base62 = '';

    while (number) {
        const { quotient, remainder } = divmod(number, 62);
        number = quotient;
        base62 = characters[remainder] + base62;
    }

    return base62 || '0';
}

function divmod(a: number, b: number) {
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return { quotient, remainder };
}
