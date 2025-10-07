export default function Home() {
    return(
        <section className="max-w-full items-center flex flex-col  justify-center text-primary-light  ">

            {/* Hero Section */}
            <div className="mt-30 lg:mt-40 ">
                <div className=" ">
                    <img src="/Profile_image2.jpg" alt="Profile Image" className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] rounded-2xl" />
                </div>

                
                <div className="text-center mt-9 text-base lg:text-[24px] bg-background-secondary  flex border border-bg-primary-light p-3 rounded-full  justify-center items-center gap-3">
                <p className="max-w-full text-[40px] md:text-[80px] lg:text-[105px] xl:text-[130px] absolute font-bold font-inter mt-6 top-78 lg:top-110 text-center">
                    IFEANYI JONATHAN
                </p>
                    {/* Status Indicator */}
                    <div className="relative flex items-center justify-center">
                        {/* Outer dotted circle */}
                        <div className="w-3 h-3 rounded-full border-2 border-dotted border-green-500 flex items-center justify-center">
                            {/* Inner solid circle */}
                            <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                        </div>
                    </div>

                    <span font-inter> Available for Work </span>

                </div>


                {/* <div class="relative h-64">
                <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/Profile_image2.jpg"
                    alt="Image description"
                />
                <div class="absolute inset-0 flex items-center justify-center p-4">
                    <h1 class="text-3xl font-bold text-white">This is overlaid text</h1>
                </div>
                </div> */}


            </div>

            

        </section>
    );
}