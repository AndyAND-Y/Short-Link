import prisma from "@/lib/prismadb";
import { permanentRedirect } from "next/navigation";

interface RedirectPageProps {
    params: {
        shortLink: string
    }
}

export default async function RedirectPage({ params }: RedirectPageProps) {

    const shortLink = params.shortLink;

    const link = await prisma.link.findFirst({
        where: {
            shortLink
        }
    })

    if (shortLink.length !== 8) {
        return (
            <div
                className="flex h-2/3 w-full justify-center text-white"
            >
                <div
                    className="h-2/3 w-1/2 flex flex-col gap-6 justify-center items-center "
                >
                    <div
                        className="text-6xl font-semibold"
                    >
                        Upss...
                    </div>
                    <div
                        className="text-4xl font-semibold"
                    >
                        The link is not valid!
                    </div>
                </div>
            </div>
        )
    }

    if (!link) {
        return (
            <div
                className="flex h-2/3 w-full justify-center text-white"
            >
                <div
                    className="h-2/3 w-1/2 flex flex-col gap-6 justify-center items-center "
                >
                    <div
                        className="text-6xl font-semibold"
                    >
                        Upss...
                    </div>
                    <div
                        className="text-4xl font-semibold"
                    >
                        The link is not available!
                    </div>
                </div>
            </div>
        )
    }

    return permanentRedirect(link.originalLink,);
}