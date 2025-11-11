import SectionHeader from "./SectionHeader";

export default function TopClients() {
  const logos = [
    { src: "/Mouau_logo.jpg", alt: "Client 1" },
    { src: "/munaa.png", alt: "Client 2" },
    { src: "/SupraMontem.png", alt: "Client 3" },
    { src: "/NSP.png", alt: "Client 4" },
    { src: "/concpt.png", alt: "Client 3" }

  ];

  

  return (
    <section className="w-full flex flex-col items-center mt-20 px-4 lg:px-8 xl:px-10 pt-10">
      {/* Header & More Button Row */}
      <div className="w-full flex flex-col items-center lg:items-start justify-between">
        <SectionHeader title="Top Clients" />
      </div>
      
      {/* Client Logos Container */}
      <div className="relative w-full mt-10">
        {/* The actual scrolling container with overflow hidden */}
        <div className="w-full overflow-hidden container">
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-background-primary to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-background-primary to-transparent pointer-events-none z-10" />

 
          <div className="flex gap-8 md:gap-16 lg:gap-20 animate-slide">
            {[...logos, ...logos].map((logo, index) => (
              <img 
                key={index} 
                src={logo.src} 
                alt={logo.alt} 
                // Ensure images don't stretch and are styled correctly
                className="h-12 lg:h-14 object-contain flex-shrink-0" 
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 
          Keyframe explanation:
          To loop seamlessly, the total width of the *first set* of logos needs to be 
          exactly the amount translated (translateX(-100%)). 
          The JSX renders two sets of logos side-by-side. When the first set leaves the view,
          the second set takes its place, and the animation resets instantly.
        */
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-slide {
          animation: slide 15s linear infinite; /* Increased duration for smoother slide */
          /* Ensure the combined width is enough to hold both sets of logos without wrapping */
          display: flex; 
          width: fit-content; 
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
