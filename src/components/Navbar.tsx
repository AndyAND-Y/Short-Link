"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import { signOut } from "next-auth/react";
import { User } from "@prisma/client";

interface NavbarProps {
    currentUser: User | null,
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {

    const router = useRouter();
    const isLoggedIn = currentUser !== null;

    let buttons = <div className="flex gap-4 p-2 text-lg text-white">
        <Button
            label={"Login"}
            onClick={() => router.push('/login')}
        />
        <Button
            label={"Register"}
            onClick={() => router.push('/register')}
        />
    </div>

    if (isLoggedIn) {
        buttons = <div className="flex gap-4 p-2 text-lg text-white">
            <Button
                label={"Account"}
                onClick={() => router.push('/account')}
            />
            <Button
                label={"Logout"}
                onClick={() => {
                    signOut({ redirect: false, callbackUrl: '/' }).then((data) => {
                        router.push(data.url);
                        router.refresh();
                    })
                }}
            />
        </div>
    }

    return (
        <nav
            className="h-20 border-b-2 shadow-md flex justify-between items-center"
        >
            <div className="p-2">
                <div className="text-white font-semibold text-2xl cursor-pointer"
                    onClick={() => router.push('/')}
                >Short Link</div>
            </div>
            {buttons}
        </nav >
    )
}


export default Navbar;