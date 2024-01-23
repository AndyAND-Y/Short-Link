import getCurrentUser from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";
import Register from "./Register";

export default async function RegisterPage() {

    const currentUser = await getCurrentUser();

    if (currentUser) {
        return redirect("/");
    }

    return <Register />

}