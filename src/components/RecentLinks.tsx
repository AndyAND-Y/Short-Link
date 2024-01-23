import { Link, User } from "@prisma/client"
import Image from "next/image"
import NextLink from "next/link";


interface RecentLinksProps {
    links: ({ User: User } & Link)[];
}

const RecentLinks: React.FC<RecentLinksProps> = ({
    links
}) => {

    return (
        <div
            className="text-white w-1/2"
        >
            <div
                className="flex justify-center"
            >
                <h2
                    className="text-3xl font-semibold"
                >
                    Recent Links
                </h2>
            </div>

            <div
                className="flex flex-col gap-4 w-full mt-4"
            >
                {links.map((link) =>
                    <LinkCard key={link.id} link={link} />
                )}
            </div>
        </div>
    )
}

interface LinkCardProps {
    link: ({ User: User } & Link)
}

const LinkCard: React.FC<LinkCardProps> = ({
    link
}) => {
    return (
        <div
            className="flex flex-col gap-3 p-3 bg-zinc-800 rounded-lg border border-white shadow-md"
        >
            <div
                className="flex justify-between items-center w-full"
            >
                <div
                    className="flex gap-1 items-center mt-2"
                >
                    <Image
                        alt="ProfilePic"
                        width={30}
                        height={30}
                        className="rounded-full"
                        src={link.User.image || '/placeholder.jpg'}
                    />
                    <p>
                        {link.User.name}
                    </p>
                </div>
                <div>
                    {link.createdAt.toDateString()}
                </div>
            </div>
            <div
                className="flex gap-1"
            >
                <p>Original Link:</p>
                <NextLink
                    className="text-blue-500"
                    href={link.originalLink}
                >
                    {link.originalLink}
                </NextLink>
            </div>
            <div
                className="flex gap-1"
            >
                <p>Shorten Link:</p>
                <NextLink
                    className="text-blue-500"
                    href={"http://localhost:3000/short/" + link.shortLink}
                >
                    {"/short/" + link.shortLink}
                </NextLink>
            </div>
        </div >
    )
}


export default RecentLinks;

