import { Link, User } from "@prisma/client"
import Image from "next/image"
import NextLink from "next/link";


interface ListLinksProps {
    links: ({ User: User } & Link)[];
}

const ListLinks: React.FC<ListLinksProps> = ({
    links
}) => {

    return (
        <div
            className="text-white w-2/3"
        >
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

export const LinkCard: React.FC<LinkCardProps> = ({
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
                <div
                    className="sm:block hidden"
                >
                    {link.createdAt.toLocaleDateString('en-us', {
                        year: 'numeric',
                        day: '2-digit',
                        month: 'short',
                    })}
                </div>
            </div>
            <div
                className="flex gap-1 overflow-x-clip"
            >
                <p
                    className="text-nowrap"
                >Original Link ({link.originalLink.length}): <NextLink
                    className="text-blue-500"
                    href={link.originalLink}
                >
                        {link.originalLink}
                    </NextLink>
                </p>


            </div>
            <div
                className="flex gap-1"
            >
                <p>Shorten Link ({(`http://${process.env.NODE_ENV === 'development' ? "localhost:3000" : process.env.PUBLIC_URL}/short/` + link.shortLink).length}): <NextLink
                    className="text-blue-500"
                    href={`http://${process.env.NODE_ENV === 'development' ? "localhost:3000" : process.env.PUBLIC_URL}/short/` + link.shortLink}
                >
                    {`http://${process.env.NODE_ENV === 'development' ? "localhost:3000" : process.env.PUBLIC_URL}/short/` + link.shortLink}
                </NextLink>

                </p>

            </div>
        </div >
    )
}


export default ListLinks;

