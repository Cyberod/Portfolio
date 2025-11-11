
import { Link } from "react-router-dom";

export default function WorkStatus({href, text, download}) {
  return (

        <Link
        to={href}
        download={download}
        className="w-[220px] md:w-[246px] text-center mt-4 text-[18px] bg-background-secondary flex border border-bg-primary-light p-3 rounded-full justify-center items-center gap-3 z-10 animate-breathe"
        >
        {/* Status Indicator */}
        <div className="relative flex justify-center gap-3">
            {/* Outer dotted circle */}
            <div className="w-3 h-3 rounded-full border-3 border-green-900 flex items-center justify-center animate-blink">
            {/* Inner solid circle */}
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
        </div>

        <span className="font-inter">{text}</span>
        </Link>
    );
}
