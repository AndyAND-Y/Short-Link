import RecentLinks from "@/components/ListLinks";
import { Link, User } from "@prisma/client";

interface AccountProps {
    links: Link[],
    currentUser: User,
}

const Account: React.FC<AccountProps> = ({
    links,
    currentUser
}) => {
    return (
        <div
            className="flex w-full justify-center mt-8 text-white"
        >
            <div
                className="flex flex-col w-2/3 items-center"
            >
                <div
                    className="flex flex-col gap-2 items-center"
                >
                    <h1
                        className="text-3xl font-semibold"
                    >
                        Hi {currentUser.name}
                    </h1>
                    <h3
                        className="text-xl font-semibold"
                    >
                        Here are your short links.
                    </h3>
                </div>



                <RecentLinks
                    links={
                        links.map((link) => {
                            return { User: currentUser, ...link }
                        })
                    }
                />

            </div>
        </div>
    )
}

export default Account;