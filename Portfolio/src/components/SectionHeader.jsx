export default function SectionHeader({title}) {
    return (
        <div className="bg-background-secondary px-8 py-3 rounded-full flex items-center justify-center xl:justify-start navbox">
            <p className="text-primary-light font-inter text-[18px]">{title}</p>
        </div>
    );
}