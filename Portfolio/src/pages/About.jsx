import TopClients from "../components/TopClients";
import SectionHeader from "../components/SectionHeader";
import Stats from "../components/Stats";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import WorkStatus from "../components/WorkStatus";

export default function About() {
  return (
    <section className="relative max-w-full flex flex-col items-center justify-center text-primary-light ">
        <div className="px-4 lg:px-8 xl:px-10">
            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center text-center mt-20">
                <h1 className="text-[35px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[120px] font-bold font-inter ">
                ABOUT JONATHAN
                </h1>
                <p className="max-w-[464px] mt-6 text-[16px] md:text-[18px] font-inter leading-relaxed mb-6">
                Throughout my career, I have collaborated with clients from diverse industries,
                translating their visions into polished digital solutions.
                </p>
                <WorkStatus href="/My_CV_Resume.pdf" text="Download CV" download="My_CV_Resume.pdf" />
            </div>

            <TopClients />

            {/* My Info Section */}
            <div className="w-full mt-20 px-4 lg:px-10 flex flex-col xl:flex-row xl:justify-between lg:items-start gap-6">
                <div className="flex justify-center lg:justify-start w-full">
                <SectionHeader title="My Info" />
                </div>

                <div className="flex flex-col items-center lg:items-start text-left gap-4 w-full">
                <p className="text-primary-light text-[16px] md:text-[18px] font-inter leading-relaxed">
                    I approach each project with meticulous attention to detail, striving to
                    exceed expectations and deliver results that align with both the client's
                    objectives and the latest industry standards.
                </p>
                <p className="text-primary-light text-[16px] md:text-[18px] font-inter leading-relaxed">
                    As I continue to evolve professionally, I remain committed to refining my
                    craft and embracing new challenges. I am driven by a relentless pursuit of
                    excellence and a desire to create meaningful impact through my work. Let's
                    collaborate to bring your vision to life and shape the future of the web
                    together.
                </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-full px-6">
                <Stats />
            </div>

            {/* My Experience Section */}
            <div className="w-full mt-20 px-4 lg:px-10 flex flex-col xl:flex-row xl:justify-between lg:items-start gap-6">
                <div className="flex justify-center lg:justify-start w-full">
                <SectionHeader title="My Experience" />
                </div>

                <div className="text-[16px] lg:text-[18px] font-inter leading-relaxed w-full flex flex-col gap-6 lg:gap-2">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between text-left">
                    <p>Freelance Fullstack Developer</p>
                    <p className="text-primary-light opacity-50">Currently</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:justify-between text-left">
                    <p>Project Manager</p>
                    <p className="text-primary-light opacity-50">Aug. 2025 - Sep. 2025</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:justify-between text-left">
                    <p>Search Engine Optimiser</p>
                    <p className="text-primary-light opacity-50">Jan. 2022 - July 2022</p>
                </div>
                </div>
            </div>

            {/* Certification section */}
            <div className="w-full mt-20 px-4 lg:px-10 flex flex-col xl:flex-row xl:justify-between lg:items-start gap-6">
                <div className="flex justify-center lg:justify-start w-full">
                <SectionHeader title="Certifications" />
                </div>

                <div className="text-[16px] lg:text-[18px] font-inter font-semibold leading-relaxed w-full flex flex-col gap-6 lg:gap-2">

                    <div className="flex flex-col items-center text-left lg:mb-10">
                        <p className="mb-2">ALX, Software Engineer</p>
                        <a href="https://drive.google.com/file/d/1BmYaezjD_EfGGRQILvGng2V1JaPVCGiv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img src="/MY_ALX_CERT.png" alt="Software Engineer Cert" className="w-[250px] sm:w-[464px] xl:w-full" />
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-left">
                        <p className="mb-2">Google, Project Manager</p>
                        <a href="https://drive.google.com/file/d/1BmYaezjD_EfGGRQILvGng2V1JaPVCGiv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img src="/PM_certificate.png" alt="Project Manager Cert" className="w-[250px] sm:w-[464px] xl:w-full" />
                        </a>
                    </div>

                </div>
            </div>

        </div>

        <Cta />
        <Footer/>
      
    </section>

  );
}
