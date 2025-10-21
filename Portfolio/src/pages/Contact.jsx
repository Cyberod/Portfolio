import Cta from "../components/Cta";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";


export default function Contact() {
    return (
            <section className="relative max-w-full flex flex-col items-center justify-center text-primary-light ">
                <div className="px-4 lg:px-8 xl:px-10">
                    {/* Hero Section */}
                    <div className="relative flex flex-col items-center justify-center text-center mt-20">
                        <h1 className="text-[35px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[120px] font-bold font-inter">
                        CONTACT ME
                        </h1>
                        <p className="max-w-[464px] mt-6 text-[16px] md:text-[18px] font-inter leading-relaxed">
                            Reach out and let's collaborate on bringing your vision to life. 
                            I'm here to help you with your next project.
                        </p>
                    </div>


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

                    {/* Contact Section */}

                    <div className="w-full mt-20 px-4 lg:px-10 flex flex-col xl:flex-row xl:justify-between lg:items-start gap-6">
                        <div className="flex justify-center lg:justify-start w-full">
                        <SectionHeader title="Lets Collaborate" />
                        </div>

                        <form action="" className="w-full flex-col gap-6 font-inter">

                            {/* Name Field */}
                            <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="mb-2 text-sm md:text-base text-primary-light/80"
                            >
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-4xl bg-background-secondary  focus:outline-none"
                            />
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="mb-2 text-sm md:text-base text-primary-light/80"
                            >
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-4xl bg-background-secondary  focus:outline-none"
                            />
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col">
                            <label
                                htmlFor="message"
                                className="mb-2 text-sm md:text-base text-primary-light/80"
                            >
                                
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="6"
                                className="w-full px-4 py-3 rounded-4xl bg-background-secondary  focus:outline-none resize-none"
                            />
                            </div>

                            {/* Submit Button */}
                            <button
                            type="submit"
                            className="mt-4 w-full px-8 py-3 rounded-full bg-primary-light text-background-primary font-semibold hover:bg-primary-light/80 transition"
                            >
                            Send Message
                            </button>
                        </form>


                    </div>
        
                </div>

        
                <Cta />
                <Footer/>
              
            </section>
    );
}