import SectionHeader from "./SectionHeader";

export default function Services() {
    const services = [
        { number: "01.", title: "Software Engineering", description: "As a fullstack developer, I excel in building robust and scalable software solutions, leveraging both frontend and backend technologies to deliver seamless user experiences and efficient server-side logic." },
        { number: "02.", title: "Website Maintenance", description: "With my comprehensive website maintenance and support services, you can trust that your online presence is expertly cared for, allowing you to focus on what matters most." },
        { number: "03.", title: "Automation", description: "I streamline your workflows by implementing intelligent automation solutions that reduce manual tasks, minimize errors, and boost productivity across your operations." },
        { number: "04.", title: "SaaS Development", description: "I design and build scalable Software as a Service (SaaS) solutions tailored to your business needs, delivering flexible and efficient cloud-based applications that grow with you." },
        { number: "05.", title: "Project Management", description: "With my project management expertise, I ensure timely delivery of projects, effective resource allocation, and clear communication to drive successful outcomes for your initiatives." }
    ];

    return (
        <section className="w-full flex flex-col mt-20 px-4 lg:px-10 pt-10">
            <div className="px-4 lg:px-8 xl:px-10">
                {/* Header & More Button Row */}
                <div className="w-[170px] lg:w-[169px] items-center lg:items-start mb-10">
                    <SectionHeader title="My Services" />
                </div>
                {/* Services Grid */}
                <div className="w-full">
                    {services.map((service, index) => (
                        <div key={index} className="bg-background-secondary text-left p-6 rounded-3xl flex flex-col xl:flex-row items-start xl:items-center justify-between xl:justify-start navbox gap-6 xl:gap-80 2xl mb-6">
                            <h2 className="text-primary-light text-left font-inter font-semibold sm:font-normal text-[20px] sm:text-[24px] w-[300px] flex-shrink-0">
                                {service.number} {service.title}
                            </h2>
                            <p className="text-[14px] sm:text-[18px] flex-1">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}