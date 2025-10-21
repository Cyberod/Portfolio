import PortfolioProject from "../components/PortfolioProject";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
        <section className="relative max-w-full flex flex-col items-center justify-center text-primary-light ">
            <div className="px-4 lg:px-8 xl:px-10">
                <div className="relative flex flex-col items-center justify-center text-center mt-20">
                    <h1 className="text-[55px] sm:text-[80px] md:text-[95px] lg:text-[130px] xl:text-[150px] font-bold font-inter">
                    MY PORTFOLIO
                    </h1>
                    <p className="max-w-[464px] mt-6 text-[16px] md:text-[18px] font-inter leading-relaxed">
                        Discover my diverse portfolio showcasing polished 
                        digital solutions crafted for clients across various industries.
                    </p>
                </div>

                <div className="mt-20 w-full ">
                {/* Section Header Container */}


                {/* Projects Grid Container */}
                <div className=" gap-0">
                    <PortfolioProject />
                </div>
                </div>

            </div>
            <Cta />
            <Footer/>

        </section>
  );
}