import { redirect } from "next/navigation";
import Login from "./Login";
import getCurrentUser from "@/actions/getCurrentUser";


export default async function RegisterPage() {

    const currentUser = await getCurrentUser();

    if (currentUser) {
        return redirect("/");
    }

    return <Login />

}