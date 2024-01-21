import { User } from "@prisma/client";
import prisma from "@/lib/prismadb";

export default async function getUserLinks(userId: string) {

    const links = await prisma.link.findMany({
        where: {
            userId: userId
        }
    })

    if (!links) {
        return []
    }

    return links.map((link) => ({
        ...link,
        createdAt: link.createdAt.toISOString()
    }))

}