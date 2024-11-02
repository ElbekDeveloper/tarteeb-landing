import { Phone } from "lucide-react";

export default function AnimatedPhone () {
    return (
        <a href={`tel:+998914490133`}
            className="relative flex h-12 w-12 group hover:cursor-pointer"  // Changed from h-20 w-20 to h-12 w-12
            aria-label="call us now">
            <Phone className="w-full h-full p-3 absolute z-10  // Changed padding from p-4 to p-3
                text-amber-700 group-hover:text-cyan-800
                transition-all duration-500"  // Increased duration from 300 to 500
            />
            <span className="!animate-[ping_1.5s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full  // Modified animate-ping to be slower
                bg-amber-500/50 opacity-75 group-hover:bg-cyan-800/50
                transition-all duration-500"
            >
            </span>
            <span className="
                bg-yellow-500 group-hover:bg-cyan-800/50
                transition-all duration-500
                relative inline-flex rounded-full h-12 w-12"  // Changed from h-20 w-20 to h-12 w-12
            >
            </span>
        </a>
    )
}