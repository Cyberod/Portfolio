import CountUp from "./CountUp";
import SectionHeader from "./SectionHeader";

export default function Stats() {
  return (
    <section className="w-full text-primary-light px-4 lg:px-10">
      <div className="flex flex-col items-center xl:flex-row xl:justify-between lg:items-start gap-6">
        {/* Header */}
        <div className="flex justify-center lg:justify-start w-full">
          <SectionHeader title="Stats" />
        </div>

        {/* Metrics */}
        <div className="flex flex-col lg:flex-row  justify-between lg:items-start text-left gap-4 w-full">
          <div className="flex-1 flex flex-col items-center">
            <CountUp target={3} suffix="+" decimals={0} duration={2500} />
            <h6 className="text-primary-light text-sm font-inter mt-2">
              Years of Experience
            </h6>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <CountUp target={15} suffix="+" decimals={0} duration={2500} />
            <h6 className="text-primary-light text-sm font-inter mt-2">
              Projects Delivered
            </h6>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <CountUp target={2} suffix="" decimals={0} duration={2500} />
            <h6 className="text-primary-light text-sm font-inter mt-2">
              Core Certifications
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
