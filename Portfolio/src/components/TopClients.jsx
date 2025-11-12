import SectionHeader from "./SectionHeader";

export default function TopClients() {
  const logos = [
    { src: "/Mouau_logo.jpg", alt: "Client 1" },
    { src: "/munaa.png", alt: "Client 2" },
    { src: "/SupraMontem.png", alt: "Client 3" },
    { src: "/NSP.png", alt: "Client 4" },
    { src: "/concpt.png", alt: "Client 5" }

  ];

  

  return (
    <section className="w-full flex flex-col items-center mt-20 px-4 lg:px-8 xl:px-10 pt-10">
      {/* Header & More Button Row */}
      <div className="w-full flex flex-col items-center lg:items-start justify-between">
        <SectionHeader title="Top Clients" />
      </div>
      
      {/* Client Logos Container */}
      <div className="wrapper">
        {Array.from({ length: 8 }, (_, i) => (
          <img
            key={i}
            src={logos[i % logos.length].src}
            alt={logos[i % logos.length].alt}
            className={`item item${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
