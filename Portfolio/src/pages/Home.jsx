export default function Home() {
    return(
        <section className="relative max-w-full items-center flex flex-col justify-center text-primary-light  ">
            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center ">
                <div className="absolute z-0 top-16 md:top-26  ">
                    <img src="/Profile_image2.jpg" alt="Profile Image" className="w-[240px] md:w-[300px] lg:w-[360px]  rounded-2xl" />
                </div>

                <p className="max-w-full relative text-[35px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[120px]  font-bold font-inter  mt-[280px] sm:mt-[270px] md:mt-[350px] lg:mt-[400px] xl:mt-[380px]  text-center z-10 ">
                    IFEANYI JONATHAN
                </p>
 
                {/* Availability status */}
                <div className="w-[220px] md:w-[246px]  text-center mt-4 text-[18px] bg-background-secondary  flex border border-bg-primary-light p-3 rounded-full  justify-center items-center gap-3 z-10 ">

                    {/* Status Indicator */}
                    <div className="relative flex justify-center gap-3">
                        {/* Outer dotted circle */}
                        <div className="w-3 h-3 rounded-full border-2  border-green-500 flex items-center justify-center">
                            {/* Inner solid circle */}
                            <div className="w-2 h-2 rounded-full bg-green-300"></div>
                        </div>
                    </div>
                    <span font-inter> Available for Work </span>


                </div>
                {/* Hero Statement */}
                <p className="max-w-full md:w-[560px] mt-6 text-center text-primary-light text-[18px]">
                    I am a dedicated web designer and developer, deeply committed to the principles of minimalist design. With more than 5 years of hands-on experience in the industry.
                </p>

                <p className="max-w-full mt-6 text-center text-primary-light text-[18px] underline underline-offset-5 "> More about Me</p>


            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16 mb-20">
                <div className="bg-background-secondary  p-6 rounded-full flex flex-col items-center">
                    <p className="text-primary-light text-[18px]">My Stats</p>

                </div>
            </div>

            

        </section>
    );
}