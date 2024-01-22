import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    request: Request,
) {
    const body = await request.json();
    const {
        email,
        name,
        password
    } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const registered = await prisma.user.findUnique({
        where: {
            email,
        }
    })

    if (registered) {
        return NextResponse.json({ error: "Already registerd!" }, { status: 400 })
    }

    const user = await prisma.user.create({
        data:
            { email, name, hashedPassword }
    })

    return NextResponse.json(user);
}