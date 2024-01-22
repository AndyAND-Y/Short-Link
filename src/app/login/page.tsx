"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

export default function Register() {

    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        }
    })

    return (
        <div
            className="flex justify-center items-center p-4 mt-8"
        >
            <div
                className="p-2 flex flex-col sm:w-1/2 w-3/5 border text-white items-center gap-4 rounded-xl shadow-lg"
            >
                <h4
                    className="p-1 text-2xl font-bold"
                >
                    Login
                </h4>

                <Input
                    formControl={{
                        id: "email",
                        register,
                        errors
                    }}
                    label="Email"
                />
                <Input
                    formControl={{
                        id: "password",
                        register,
                        errors
                    }}
                    label="Password"
                    type="password"
                />


                <Button
                    label="Continue"
                    onClick={() => { }}
                />
                <hr
                    className="w-full"
                />
                <Button
                    label="Continue with Google"
                    icon={FcGoogle}
                    onClick={() => signIn("google")}
                />
                <Button
                    label="Continue with Github"
                    icon={AiFillGithub}
                    onClick={() => signIn("google")}
                />

                <div
                    className="text-center mt-2 font-light text-xs sm:text-base"
                >
                    <p className="flex gap-1 flex-col sm:flex-row">
                        First time using Short Link?
                        <span
                            onClick={() => { }}
                            className="cursor-pointer hover:underline"
                        >
                            Create an account
                        </span>
                    </p>
                </div>

            </div>

        </div>
    )

}