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

    if (!isEmail(email)) {
        return NextResponse.json({ error: "Not a valid email!" }, { status: 400 })
    }

    if (!isStrongPassword(password)) {
        return NextResponse.json({ error: "Not a strong password!" }, { status: 400 })
    }

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

function isEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
}