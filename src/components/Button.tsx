
interface ButtonProps {
    label: string,
    onClick?: () => void;
}


const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
}) => {

    return <button
        className="p-4 bg-stone-900 border border-stone-900 rounded-xl hover:bg-stone-950 hover:border-white transition duration-300"
        onClick={onClick}
    >
        {label}
    </button>

}

export default Button;