import prisma from "@/lib/prismadb";


export default async function getRecentLinks() {

    const links = await prisma.link.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        take: 20,
        include: {
            User: true
        }
    })



    return links;

}