import getCurrentUser from "@/actions/getCurrentUser";
import getRecentLinks from "@/actions/getRecentLinks";
import CreateLink from "@/components/CreateLink";
import RecentLinks from "@/components/RecentLinks";

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
                    className="border border-white w-1/2 p-4 gap-2 flex flex-col items-center text-white rounded-xl shadow-lg"
                >

                    <h1
                        className="text-3xl font-semibold"
                    >
                        The link is too long ?
                    </h1>

                    <h2
                        className="text-xl font-light"
                    >
                        Short Link is here to help
                    </h2>

                    <CreateLink currentUser={currentUser} />
                </div>
            </div>
            <div
                className="flex justify-center w-full mt-4"
            >
                <RecentLinks links={recentLinks} />
            </div>
        </div >

    );
}
