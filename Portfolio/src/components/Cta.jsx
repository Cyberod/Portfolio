import WorkStatus from "./WorkStatus";

export default function Cta() {
  return (
    <section className="my-background-section w-full h-[500px] xl:h-[700px] flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        {/* Availability status */}
        <WorkStatus />

        {/* Animated email text */}
        <div className="group relative inline-block overflow-hidden cursor-pointer mt-6">
          <span
            className="block text-center font-bold font-inter leading-tight
              text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px]
              text-primary-light whitespace-normal break-words transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
          >
            <a href="mailto:jonazkeez@gmail.com">
                JONAZKEEZ{""}<span className="block sm:inline">@GMAIL.COM</span>

            </a>          
            </span>

          <span
            className="block text-center font-bold font-inter leading-tight
              text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px]
              text-primary-light whitespace-normal break-words absolute top-full left-0 w-full transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
          >
            <a href="mailto:jonazkeez@gmail.com">
                JONAZKEEZ{""}<span className="block sm:inline">@GMAIL.COM</span>

            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
