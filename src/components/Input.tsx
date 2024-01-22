"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {

    label: string,
    type?: string,
    disabled?: boolean,
    required?: boolean,
    formControl: {
        id: string,
        register: UseFormRegister<FieldValues>,
        errors: FieldErrors,
    }
}

const Input: React.FC<InputProps> = ({
    formControl,
    label,
    disabled,
    required,
    type = "text"
}) => {

    return (
        <div className="w-full relative">

            <input
                id={formControl.id}
                disabled={disabled}
                {...formControl.register(formControl.id, { required })}
                type={type}
                placeholder=" "
                className={`
                    peer
                    w-full
                    p-4
                    pt-5
                    font-light 
                    bg-white 
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    
                    ${formControl.errors[formControl.id] ? 'border-rose-500' : 'text-stone-950'}
                    ${formControl.errors[formControl.id] ? 'focus:border-rose-500' : 'focus:border-stone-900'}
                `}
            />
            <label
                className={`
                    absolute 
                    text-sm
                    border-b
                    duration-150 
                    transform
                    -translate-y-4
                    top-5
                    left-3
                    z-10 
                    origin-[0] 
                    peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75
                    peer-focus:-translate-y-5
                    ${formControl.errors[formControl.id] ? 'text-rose-500' : 'text-stone-950'}
                
                `}
            >
                {label}
            </label>
        </div>
    );

}

export default Input;