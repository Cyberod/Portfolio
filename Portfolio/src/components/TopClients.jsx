
import SectionHeader from "./SectionHeader";


export default function TopClients() {

  return (
    <section className="w-full flex flex-col items-center mt-20 px-4  lg:px-10 pt-10">
      {/* Header & More Button Row */}
      <div className="w-full flex flex-col items-center lg:items-start justify-between ">
        <SectionHeader title="Top Clients" />
    </div>
    <div>
        {/* Client Logos */}
        <div className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-10">
            <img src="/Mouau_logo.jpg" alt="Client 1" className="h-12 object-contain rounded-50%" />

        </div>
    </div>
    
    </section>
  );
}
