import { Link, User } from "@prisma/client"
import { LinkCard } from "./LinkCard";


interface ListLinksProps {
    links: ({ User: User } & Link)[];
    canBeDeleted: boolean
}

const ListLinks: React.FC<ListLinksProps> = ({
    links,
    canBeDeleted
}) => {

    return (
        <div
            className="text-white w-2/3"
        >
            <div
                className="flex flex-col gap-4 w-full mt-4"
            >
                {links.map((link) =>
                    <LinkCard key={link.id} link={link} canBeDeleted={canBeDeleted === true} />
                )}
            </div>
        </div>
    )
}

export default ListLinks;

