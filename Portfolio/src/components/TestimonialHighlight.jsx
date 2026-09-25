import SectionHeader from "./SectionHeader";
import testimonials from "../data/testimonials";

const featured = testimonials.filter((t) => t.featured);

function Avatar({ name, photo }) {
    if (photo) {
        return (
            <img
                src={photo}
                alt={name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
        );
    }
    const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
    return (
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[13px] font-semibold">{initials}</span>
        </div>
    );
}

export default function TestimonialHighlight() {
    return (
        <div className="w-full mt-20 px-4 lg:px-10">
            <div className="flex justify-center lg:justify-start mb-10">
                <SectionHeader title="What People Say" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {featured.map((t) => (
                    <div key={t.id} className="bg-background-secondary rounded-3xl p-8 navbox flex flex-col justify-between">
                        <p className="text-[48px] leading-none text-white opacity-20 font-serif select-none mb-4">"</p>
                        <p className="text-primary-light text-[15px] sm:text-[16px] leading-relaxed flex-1">
                            {t.quote}
                        </p>
                        <div className="mt-6 border-t border-white/10 pt-5 flex items-center gap-3">
                            <Avatar name={t.name} photo={t.photo} />
                            <div>
                                <p className="text-primary-light font-semibold text-[14px]">{t.name}</p>
                                <p className="text-white/50 text-[12px] mt-0.5">{t.role} · {t.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
