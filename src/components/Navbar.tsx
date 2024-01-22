"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";



export default function Navbar() {

    const router = useRouter();

    return (
        <nav
            className="h-20 border-b-2 shadow-md flex justify-between items-center"
        >
            <div className="p-2">
                <h3 className="text-white font-semibold text-2xl">Short Link</h3>
            </div>
            <div className="flex gap-4 p-2 text-lg text-white">
                <Button
                    label="Log In"
                    onClick={() => router.push('/login')}
                />
                <Button
                    label="Register"
                    onClick={() => router.push('/register')}
                />

            </div>
        </nav >
    )

}