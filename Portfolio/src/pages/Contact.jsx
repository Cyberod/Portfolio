import { useState, useRef } from 'react';
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";


export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error on change
        if (errors[name]) setErrors({ ...errors, [name]: '' });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        else if (/\d/.test(formData.name)) newErrors.name = 'Name cannot contain numbers';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setLoading(true);
            try {
                const response = await fetch('https://submit-form.com/xkg0g63jY', {
                    method: 'POST',
                    body: new FormData(formRef.current),
                });
                if (response.ok) {
                    setSuccess(true);
                    setFormData({ name: '', email: '', message: '' });
                    setTimeout(() => setSuccess(false), 5000);
                } else {
                    alert('Failed to send message. Please try again.');
                }
            } catch (error) {
                alert('Error sending message. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };
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

                    {/* Contact Form Section */}

                    <div className="w-full mt-20 px-4 lg:px-10 flex flex-col xl:flex-row xl:justify-between lg:items-start gap-6">
                        <div className="flex justify-center lg:justify-start w-full">
                        <SectionHeader title="Lets Collaborate" />
                        </div>

                        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-6 font-inter">

                            {/* Success Notification */}
                            {success && (
                                <div className="w-full px-4 py-3 rounded-4xl bg-green-500 text-white text-center font-semibold">
                                    Email sent successfully! We'll get back to you soon.
                                </div>
                            )}

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
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-4xl bg-background-secondary focus:outline-none ${errors.name ? 'border border-white' : ''}`}
                            />
                            {errors.name && <p className="mt-1 text-white text-sm">{errors.name}</p>}
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
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-4xl bg-background-secondary focus:outline-none ${errors.email ? 'border border-white' : ''}`}
                            />
                            {errors.email && <p className="mt-1 text-white text-sm">{errors.email}</p>}
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
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-4xl bg-background-secondary focus:outline-none resize-none ${errors.message ? 'border border-white' : ''}`}
                            />
                            {errors.message && <p className="mt-1 text-white text-sm">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 w-full px-8 py-3 rounded-full bg-primary-light text-background-primary font-semibold hover:bg-primary-light/80 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                            {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>


                    </div>
        
                </div>

        
                <Cta />
                <Footer/>
              
            </section>
    );
}