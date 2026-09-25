import { useState, useEffect, useCallback } from "react";
import SectionHeader from "./SectionHeader";
import testimonials from "../data/testimonials";

const total = testimonials.length;
// Clone first and last slides so we can loop without snapping back
const extended = [testimonials[total - 1], ...testimonials, testimonials[0]];

function Avatar({ name, photo }) {
    if (photo) {
        return (
            <img
                src={photo}
                alt={name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
        );
    }
    const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
    return (
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[14px] font-semibold">{initials}</span>
        </div>
    );
}

export default function Testimonials() {
    // Start at 1 — the first real slide (index 0 is the cloned last)
    const [current, setCurrent] = useState(1);
    const [animated, setAnimated] = useState(true);
    const [paused, setPaused] = useState(false);

    const next = useCallback(() => setCurrent((c) => c + 1), []);
    const prev = useCallback(() => setCurrent((c) => c - 1), []);

    // Autoplay — always moves forward
    useEffect(() => {
        if (paused) return;
        const id = setInterval(next, 5000);
        return () => clearInterval(id);
    }, [paused, next]);

    // After the CSS transition ends, silently jump to the real counterpart slide
    const handleTransitionEnd = () => {
        if (current === total + 1) {
            // We're on the cloned first — jump silently to real first (index 1)
            setAnimated(false);
            setCurrent(1);
        } else if (current === 0) {
            // We're on the cloned last — jump silently to real last (index `total`)
            setAnimated(false);
            setCurrent(total);
        }
    };

    // Re-enable the transition one paint after the silent positional jump
    useEffect(() => {
        if (!animated) {
            const raf = requestAnimationFrame(() =>
                requestAnimationFrame(() => setAnimated(true))
            );
            return () => cancelAnimationFrame(raf);
        }
    }, [animated]);

    // Map current track index back to a 0-based real index for the dots
    const activeIndex =
        current === 0 ? total - 1 :
        current === total + 1 ? 0 :
        current - 1;

    return (
        <section className="w-full flex flex-col mt-20 px-4 lg:px-10 pt-10">
            <div className="px-4 lg:px-8 xl:px-10">
                <div className="w-[200px] lg:w-[199px] mb-10">
                    <SectionHeader title="Testimonials" />
                </div>

                {/* Constrained width — quote text reads better at ~800px than full viewport */}
                <div
                    className="max-w-4xl mx-auto"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div className="overflow-hidden">
                        <div
                            className={animated ? "flex transition-transform duration-500 ease-in-out" : "flex"}
                            style={{ transform: `translateX(-${current * 100}%)` }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {extended.map((t, i) => (
                                <div key={i} className="min-w-full">
                                    <div className="bg-background-secondary rounded-3xl p-8 md:p-10 navbox">
                                        <p className="text-[56px] leading-none text-white opacity-20 font-serif select-none mb-4">
                                            "
                                        </p>
                                        <p className="text-primary-light text-[15px] sm:text-[18px] leading-relaxed">
                                            {t.quote}
                                        </p>
                                        <div className="mt-8 border-t border-white/10 pt-5 flex items-center gap-4">
                                            <Avatar name={t.name} photo={t.photo} />
                                            <div>
                                                <p className="text-primary-light font-semibold text-[15px]">
                                                    {t.name}
                                                </p>
                                                <p className="text-white/50 text-[13px] mt-0.5">
                                                    {t.role} · {t.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-6">
                        {/* Progress dots */}
                        <div className="flex gap-2 items-center">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i + 1)}
                                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                        i === activeIndex
                                            ? "w-6 bg-white"
                                            : "w-2 bg-white/30 hover:bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Arrow buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full bg-background-secondary navbox flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer text-lg"
                            >
                                ←
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full bg-background-secondary navbox flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer text-lg"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
