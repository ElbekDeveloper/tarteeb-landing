import { Phone } from "lucide-react";

export default function AnimatedPhone () {
    return (
        <a href={`tel:${process.env.PHONE_NUMBER}`}
            className="relative flex h-20 w-20 group hover:cursor-pointer"
            aria-label="call us now">
            <Phone className="w-full h-full p-4 absolute z-10 
        text-amber-700 group-hover:text-cyan-800
        transition-all duration-300
        " />
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full 
        bg-amber-500/50 opacity-75 group-hover:bg-cyan-800/50
        transition-all duration-300
        ">
            </span>
            <span className="
        bg-yellow-500 group-hover:bg-cyan-800/50
        transition-all duration-300
        relative inline-flex rounded-full h-20 w-20
        ">
            </span>
        </a>
    )
}