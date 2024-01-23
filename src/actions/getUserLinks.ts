import prisma from "@/lib/prismadb";

export default async function getUserLinks(userId: string) {

    const links = await prisma.link.findMany({
        where: {
            userId: userId
        }
    })

    return links

}