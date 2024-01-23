import getCurrentUser from "@/actions/getCurrentUser";
import getUserLinks from "@/actions/getUserLinks";
import Account from "./Account";


const AccountPage: React.FC = async () => {

    const currentUser = await getCurrentUser();

    if (!currentUser) {
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
                        You are not logged in!
                    </div>
                </div>
            </div>
        );
    }

    const userLinks = await getUserLinks(currentUser.id);



    return <Account links={userLinks} currentUser={currentUser} />

}


export default AccountPage;