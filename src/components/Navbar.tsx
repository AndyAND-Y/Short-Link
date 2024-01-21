"use client";

import Button from "./Button";

export default function Navbar() {

    return (
        <nav
            className="h-24 border-b-2 shadow-md flex justify-between items-center"
        >
            <div className="p-2">
                <h3 className="text-white font-semibold text-2xl">Short Link</h3>
            </div>
            <div className="flex gap-4 p-2 text-lg text-white">
                <Button
                    label="Sign In"
                />
                <Button
                    label="Sign Up"
                />

            </div>
        </nav >
    )

}