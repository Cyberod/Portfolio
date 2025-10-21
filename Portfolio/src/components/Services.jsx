import SectionHeader from "./SectionHeader";

export default function Services() {
    return(
    <section className="w-full flex flex-col mt-20 px-4 lg:px-10 pt-10">

        <div className="px-4 lg:px-8 xl:px-10">
            {/* Header & More Button Row */}
            <div className="w-[170px] lg:w-[169px] items-center lg:items-start mb-10">
                <SectionHeader title="My Services" />
                
            </div>
                {/* Services Grid */}
                <div className="w-full ">
                    <div className="bg-background-secondary text-left p-6 rounded-3xl flex flex-col xl:flex-row items-start xl:items-center justify-between xl:justify-start navbox gap-6 xl:gap-80 2xl mb-6">
                        <h2 className="text-primary-light text-left font-inter font-semibold sm:font-normal text-[20px] sm:text-[24px] w-[300px] flex-shrink-0">01. Web Development</h2>
                        <p className="text-[14px] sm:text-[18px] flex-1">I specialize in creating modern and elegant designs that not only captivate audiences but also effectively communicate your brand message.</p>
                    </div>

                    <div className="bg-background-secondary text-left p-6 rounded-3xl flex flex-col xl:flex-row items-start xl:items-center justify-between xl:justify-start navbox gap-6 xl:gap-80 2xl mb-6">
                        <h2 className="text-primary-light text-left font-inter font-semibold sm:font-normal text-[20px] sm:text-[24px] w-[300px] flex-shrink-0">02. Web Design</h2>
                        <p className="text-[14px] sm:text-[18px] flex-1">With proficiency in HTML, CSS, JavaScript, and various development frameworks, I bring your vision to life with pixel-perfect precision.</p>
                    </div>

                    <div className="bg-background-secondary text-left p-6 rounded-3xl flex flex-col xl:flex-row items-start xl:items-center justify-between xl:justify-start navbox gap-6 xl:gap-80 2xl mb-6">
                        <h2 className="text-primary-light text-left font-inter font-semibold sm:font-normal text-[20px] sm:text-[24px] w-[300px] flex-shrink-0">03. Graphic Design</h2>
                        <p className="text-[14px] sm:text-[18px] flex-1">I specialize in creating impactful visual assets that reflect the unique personality and core values of your brand, ensuring a memorable and authentic representation.</p>
                    </div>

                    <div className="bg-background-secondary text-left p-6 rounded-3xl flex flex-col xl:flex-row items-start xl:items-center justify-between xl:justify-start navbox gap-6 xl:gap-80 2xl mb-6">
                        <h2 className="text-primary-light text-left font-inter font-semibold sm:font-normal text-[20px] sm:text-[24px] w-[300px] flex-shrink-0">01. Website Maintenance</h2>
                        <p className="text-[14px] sm:text-[18px] flex-1">With my comprehensive website maintenance and support services, you can trust that your online presence is expertly cared for, allowing you to focus on what matters most.</p>
                    </div>




                
                </div>
        </div>

    </section>
    );
}