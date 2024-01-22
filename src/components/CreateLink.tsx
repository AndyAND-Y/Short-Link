"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import SafeUser from "@/types/SafeUser";
import toast from "react-hot-toast";
import toastStyle from "@/providers/CustomStyle";
import axios from "axios";


interface CreateLinkProps {
    currentUser: SafeUser | null
}

const CreateLink: React.FC<CreateLinkProps> = ({
    currentUser
}) => {

    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = currentUser !== null;

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm<FieldValues>({
        defaultValues: {
            link: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (!isLoggedIn) {
            toast.error("You have to be logged in!", toastStyle);
            return;
        }

        if (!data.link) {
            toast.error("No input! What did you expect?", toastStyle);
            return;
        }


        axios.post("/", data)
            .then(() => { })
            .catch((error) => {

            })




    }


    return (
        <div
            className="w-2/3 flex flex-col gap-4 mt-4"
        >
            <Input
                label="Link"
                formControl={{
                    id: "link",
                    errors,
                    register
                }}
                disabled={isLoading}
                required
                type="url"
            />
            <Button
                label="Get short link"
                onClick={handleSubmit(onSubmit)}
            />
        </div>
    )
}


export default CreateLink;