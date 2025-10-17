export default function TextLink({ href, text, className="" }) {
    return (
        <a
          href={href}
          className={`group relative font-inter items-center gap-2 text-primary-light transition-all underline-animate-hide duration-300 ${className}`}
        >
          {text}
          <img 
            src="/arrow.svg" 
            alt="arrow" 
            className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:rotate-[30deg] arrow-tilt" 
          />
        </a>
    );
}