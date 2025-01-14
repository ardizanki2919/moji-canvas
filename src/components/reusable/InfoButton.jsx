import { Info } from "@phosphor-icons/react";

export default function InfoButton() {
    return <button className="mx-auto hover:animate-shake hover:text-black transition-colors duration-300" aria-label="Open modal for information about this website">
        <Info size={24} onClick={() => console.log("Hello World!")}/>
    </button>
}