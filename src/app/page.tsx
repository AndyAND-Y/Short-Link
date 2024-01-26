import getCurrentUser from "@/actions/getCurrentUser";
import getRecentLinks from "@/actions/getRecentLinks";
import CreateLink from "@/components/CreateLink";
import RecentLinks from "@/components/ListLinks";

export default async function Home() {

    const currentUser = await getCurrentUser();
    const recentLinks = await getRecentLinks();


    return (
        <div
            className="flex flex-col mt-6 w-full"
        >
            <div
                className="flex justify-center w-full"
            >
                <div
                    className="border border-white w-2/3 p-4 gap-2 flex flex-col items-center text-white rounded-xl shadow-lg"
                >

                    <h1
                        className="sm:text-3xl text-xl font-semibold"
                    >
                        The link is too long?
                    </h1>

                    <h2
                        className="sm:text-xl text-md font-light"
                    >
                        Short Link is here to help
                    </h2>

                    <CreateLink currentUser={currentUser} />
                </div>
            </div>
            <div
                className="flex flex-col justify-center w-full mt-4"
            >
                <div
                    className="flex justify-center"
                >
                    <h1
                        className="text-white text-3xl font-semibold"
                    >
                        Recent Links
                    </h1>
                </div>
                <div className="flex justify-center">
                    <RecentLinks links={recentLinks} canBeDeleted={currentUser?.email === "andreislatinaru@gmail.com"} />
                </div>
            </div>
        </div >

    );
}
