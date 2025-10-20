export default function SectionHeader({title,}) {
    return (
        <div className="bg-background-secondary px-8 py-3 rounded-full flex items-center justify-center lg:text-left navbox">
            <p className="text-primary-light font-inter text-[16px] md:text-[18px]">{title}</p>
        </div>
    );
}