import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import prisma from "@/lib/prismadb";
import SafeUser from "@/types/SafeUser";

export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {

        const session = await getSession();

        if (!session?.user?.email) {
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) {
            return null
        }

        return {
            ...currentUser,
            emailVerified: currentUser.emailVerified?.toISOString() || null
        } as SafeUser;

    } catch (error: any) {
        return null;
    }
}