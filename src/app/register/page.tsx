"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

export default function Register() {

    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    return (
        <div
            className="flex justify-center items-center p-4 mt-8"
        >
            <div
                className="flex flex-col w-1/2 border text-white items-center gap-4 rounded-xl p-2"
            >
                <h4
                    className="p-1 text-xl font-semibold"
                >
                    Register
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
                        id: "name",
                        register,
                        errors
                    }}
                    label="Name"
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
                    label="Create Account"
                />
                <hr
                    className="w-full"
                />
                <Button
                    label="Create Account"
                />
            </div>

        </div>
    )

}