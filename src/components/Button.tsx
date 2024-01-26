import { IconType } from "react-icons";

interface ButtonProps {
    label: string,
    onClick: () => void;
    disabled?: boolean,
    icon?: IconType
    size?: "sm" | "lg"
}


const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    icon: Icon,
    disabled,
    size
}) => {

    return <button
        disabled={disabled}
        className={`
            
        
            ${((size && size === 'lg') || size === undefined) && "w-full"}
            ${(size && size === 'sm') && "w-fit"}
            items-center
            relative
            gap-1
            p-[10px]
            bg-zinc-900 
            border 
            border-zinc-900
            shadow
            rounded-xl 
            hover:bg-zinc-950 
            hover:border-white 
            transition 
            duration-200
            disabled:opacity-70
            disabled:cursor-not-allowed
        `}
        onClick={onClick}
    >
        {Icon && (
            <Icon
                size={24}
                className="absolute left-3 hidden sm:block"
            />
        )}
        {label}
    </button>

}

export default Button;