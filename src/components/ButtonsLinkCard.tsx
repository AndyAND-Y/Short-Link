"use client";

import toast from "react-hot-toast";
import Button from "./Button";
import toastStyle from "@/providers/CustomStyle";
import axios from "axios";
import { useRouter } from "next/navigation";

interface BtnsInterface {
    canBeDeleted: boolean,
    textToPaste: string,
    linkId: string
}

const Btns: React.FC<BtnsInterface> = ({
    canBeDeleted,
    textToPaste,
    linkId
}) => {

    const router = useRouter();

    return (
        <div
            className="flex gap-1 justify-between"
        >
            <Button
                label="Share"
                size={canBeDeleted ? "sm" : 'lg'}
                onClick={() => {
                    navigator.clipboard.writeText(textToPaste);
                    toast.success("Copied to clipboard!", toastStyle);
                }}
            />
            {canBeDeleted && <Button
                label="Delete"
                size={canBeDeleted ? "sm" : 'lg'}
                onClick={() => {
                    axios.delete('/api/link', { data: { linkId } })
                        .then(() => {
                            toast.success("Deleted successfully!", toastStyle);
                            router.refresh()
                        })
                        .catch(() => {
                            toast.error("Something went wrong!", toastStyle)
                        })
                }}
            />}

        </div>
    )
}

export default Btns;