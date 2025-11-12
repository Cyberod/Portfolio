import Stats from "../components/Stats";
import Projects from "../components/Projects";
import ArrowLink from "../components/ArrowLink";
import Services from "../components/Services";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import WorkStatus from "../components/WorkStatus";


export default function Home() {
    return(
        <section className="relative max-w-full items-center flex flex-col justify-center text-primary-light ">
            <div className="px-4 lg:px-8 xl:px-10">
                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center">
                    <div className="absolute z-0 top-26 md:top-36  ">
                        <img src="/Profile_image2.jpg" alt="Profile Image" className="w-[230px] md:w-[290px] lg:w-[350px]  rounded-2xl z-0" />
                    </div>

                    {/* Page Heading */}
                    <p className="max-w-full relative text-[35px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[120px]  font-bold font-inter  mt-[280px] sm:mt-[270px] md:mt-[350px] lg:mt-[400px] xl:mt-[380px]  text-center z-10 ">
                        IFEANYI JONATHAN
                    </p>
    
                    {/* Availability status */}
                    <WorkStatus href="/contact" text="Available for Work" />


                    
                    {/* Hero Statement */}
                    <p className="max-w-full md:w-[560px] mt-6 text-center text-primary-light text-[16px] md:text-[18px]  ">
                        I am a dedicated Software Engineer and Project Manager, deeply committed to the principles of result driven solutons. With more than 3 years of hands-on experience in the industry.
                    </p>

                    <ArrowLink href="/about" text="More About Me" className="flex justify-between mt-6 max-w-full" />


                </div>
                <div className="w-full">
                    <Stats />
                </div>
            
            </div>

            <Projects />
            <Services />
            <Cta />
            <Footer/>




            

        </section>
    );
}