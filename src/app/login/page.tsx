"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

export default function Login() {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        setIsLoading(true)
        signIn('credentials', {
            ...data,
            redirect: false
        })
            .then((cb) => {
                setIsLoading(false);
                if (cb?.ok) {
                    toast.success("Logged in!", {
                        style: {
                            border: '1px solid white',
                            padding: '4px',
                            backgroundColor: '#1c1917',
                            color: 'white'
                        }
                    });
                }
                if (cb?.error) {
                    toast.error(cb.error, {
                        style: {
                            border: '1px solid white',
                            padding: '4px',
                            backgroundColor: '#1c1917',
                            color: 'white'
                        }
                    });
                }
            })
    }

    return (
        <div
            className="flex justify-center items-center p-4 mt-8"
        >
            <div
                className="p-2 flex flex-col sm:w-1/2 w-3/5 border text-white items-center gap-4 rounded-xl shadow-lg "
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
                    type="email"
                    required
                    disabled={isLoading}
                />

                <Input
                    formControl={{
                        id: "password",
                        register,
                        errors
                    }}
                    label="Password"
                    type="password"
                    required
                    disabled={isLoading}
                />


                <Button
                    label="Continue"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isLoading}
                />
                <hr
                    className="w-full"
                />
                <Button
                    label="Continue with Google"
                    icon={FcGoogle}
                    onClick={() => {
                        signIn("google")
                    }}
                    disabled={isLoading}
                />
                <Button
                    label="Continue with Github"
                    icon={AiFillGithub}
                    onClick={() => {
                        signIn("github")
                    }}
                    disabled={isLoading}
                />

                <div
                    className="text-center mt-2 font-light text-xs sm:text-base"
                >
                    <p className="flex gap-1 flex-col sm:flex-row">
                        First time here?
                        <span
                            onClick={() => { router.push('/register') }}
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