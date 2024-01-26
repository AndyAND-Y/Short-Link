"use client";
import { Link, User } from "@prisma/client";
import Image from "next/image";
import NextLink from "next/link";
import Button from "./Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import toastStyle from "@/providers/CustomStyle";

interface LinkCardProps {
    link: ({ User: User } & Link)
    canBeDeleted: boolean
}

export const LinkCard: React.FC<LinkCardProps> = ({
    link,
    canBeDeleted
}) => {

    const router = useRouter();
    const host = process.env.NODE_ENV !== 'production' ? "localhost:3000" : process.env.PUBLIC_URL;
    const pathShortLink = `http://${host}/` + link.shortLink;

    console.log(process.env.NODE_ENV);
    console.log(host);

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
                    className="text-blue-500 hover:text-blue-600"
                    href={link.originalLink}
                >
                        {link.originalLink}
                    </NextLink>
                </p>


            </div>
            <div
                className="flex gap-1 overflow-x-clip"
            >
                <p
                    className=""
                >Shorten Link ({pathShortLink.length}): <NextLink
                    className="text-blue-500 hover:text-blue-600"
                    href={pathShortLink}
                >
                        {pathShortLink}
                    </NextLink>
                </p>
            </div>

            <div
                className="flex gap-1 justify-between"
            >
                <Button
                    label="Share"
                    size={canBeDeleted ? "sm" : 'lg'}
                    onClick={() => {
                        navigator.clipboard.writeText(pathShortLink);
                        toast.success("Copied to clipboard!", toastStyle);
                    }}
                />
                {canBeDeleted && <Button
                    label="Delete"
                    size={canBeDeleted ? "sm" : 'lg'}
                    onClick={() => {
                        axios.delete('/api/link', { data: { linkId: link.id } })
                            .then(() => {
                                toast.success("Deleted successfully!", toastStyle);
                                router.refresh()
                            })
                            .catch(() => {
                                toast.error("Something went wrong!", toastStyle)
                            })
                    }}
                />}

            </div>

        </div >
    )
}