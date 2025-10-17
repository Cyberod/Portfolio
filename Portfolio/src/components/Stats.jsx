import CountUp from "./CountUp";
import SectionHeader from "./SectionHeader";

export default function Stats() {
    return (
        <section className="w-full flex flex-col items-center mt-20 pt-10 px-6 xl:flex-row xl:items-start xl:justify-between gap-10 ">
            
            {/* Section Header */}
            <SectionHeader title="Stats" />

            {/* Metrics */}
            <div
                className="
                    w-full flex flex-col items-center text-center 
                    md:flex-row md:justify-between gap-10 
                    xl:w-[65%] xl:items-end xl:mt-4
                "
            >
                <div className="flex-1 flex flex-col items-center">
                    <CountUp target={3} suffix="+" decimals={0} duration={2500} />
                    <h6 className="text-primary-light text-sm font-inter mt-2">Years of Experience</h6>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <CountUp target={15} suffix="+" decimals={0} duration={2500} />
                    <h6 className="text-primary-light text-sm font-inter mt-2">Projects Delivered</h6>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <CountUp target={2} suffix="" decimals={0} duration={2500} />
                    <h6 className="text-primary-light text-sm font-inter mt-2">Core Certifications</h6>
                </div>
            </div>
        </section>
    );
}
