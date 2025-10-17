export default function ProjectCta({ href, text, className="" }) {
    return (
            <a
                href={href}
                className={`group flex py-1 px-2 sm:py-2 sm:px-4 rounded-4xl  border border-primary-light bg-primary-light hover:bg-transparent  items-center  transition-colors ease-in duration-300 ${className}`}
            >
                <p className="font-inter text-[14px] lg:text-[18px] text-primary-dark lg:font-semibold group-hover:text-primary-light">{text}</p>
                <img src="/arrow.svg" alt="" className="w-6 h-6 arrow-tilt group-hover:rotate-[30deg] invert group-hover:invert-0 transition-all duration-300 ease-in-out" />
            </a>
    );
}