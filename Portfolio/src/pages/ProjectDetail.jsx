import { useParams } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import ArrowLink from "../components/ArrowLink";
import ProjectCta from "../components/ProjectCta";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    name: "Cinemania",
    image: "/Cinemania.jpg",
    images: ["/Cinemania1.jpg", "/Cinemania2.jpg", "/Cinemania3.jpg", "/Cinemania4.jpg"],
    description: "A movie app using TMDB API.",
    role: ["Software Engineer", "Project Manager"],
    service: ["Web Development"],
    industry: ["Entertainment"],
    stack: ["Django", "React", "TMDB API"],
    date: "Dec. 2023 - March 2024",
    overview: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",
    keyFeatures: [
      "Browse trending and top-rated movies",
      "Detailed movie pages with cast and crew",
      "User authentication and personalized watchlists",
      "Responsive and minimalist UI"
    ],
    mission: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",
    impact: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",

  },

  {
    id: 2,
    name: "Taskify",
    image: "/Cinemania.jpg",
    images: ["/Cinemania1.jpg", "/Cinemania2.jpg", "/Cinemania3.jpg", "/Cinemania4.jpg"],
    description: "A movie app using TMDB API.",
    role: ["Software Engineer", "Project Manager"],
    service: ["Web Development"],
    industry: ["Entertainment"],
    stack: ["Django", "React", "TMDB API"],
    date: "Dec. 2023 - March 2024",
    overview: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",
    keyFeatures: [
      "Browse trending and top-rated movies",
      "Detailed movie pages with cast and crew",
      "User authentication and personalized watchlists",
      "Responsive and minimalist UI"
    ],
    mission: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",
    impact: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",

  },

    {
    id: 3,
    name: "Budget Automation",
    image: "/ExpenseWise.jpg",
    images: ["/Cinemania1.jpg", "/Cinemania2.jpg", "/Cinemania3.jpg", "/Cinemania4.jpg"],
    description: "A movie app using TMDB API.",
    role: ["Software Engineer", "Project Manager"],
    service: ["Web Development"],
    industry: ["Entertainment"],
    stack: ["Django", "React", "TMDB API"],
    date: "Dec. 2023 - March 2024",
    overview: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",
    keyFeatures: [
      "Browse trending and top-rated movies",
      "Detailed movie pages with cast and crew",
      "User authentication and personalized watchlists",
      "Responsive and minimalist UI"
    ],
    mission: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",
    impact: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",

  },
  // ...other projects
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <div className="text-center mt-20 text-2xl">Project not found.</div>;

  return (
    <section className="w-full flex flex-col items-center ">
        <div className="px-4 lg:px-8 xl:px-10 py-10">
            {/* Project Name */}
            <h1 className="text-[35px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[120px] font-bold font-inter text-center mb-6">
                {project.name}
            </h1>
            {/* Project Description */}
            <p className="max-w-[464px] text-center text-primary-light text-[16px] md:text-[18px] mb-8">
                {project.description}
            </p>
            {/* Project Image */}
            <img
                src={project.image}
                alt={project.name}
                className="w-full rounded-4xl mb-12 shadow-lg"
            />

            {/* Details and Overview Section */}
            <div className="w-full flex flex-col xl:flex-row gap-12 xl:gap-24 justify-center">
                {/* Left: Details */}
                <div className="xl:w-1/3 flex flex-col items-center xl:items-start">
                    <div className="mb-6 ">
                        <SectionHeader title="Details" className="text-center md:text-left" />
                    </div>
                
                <div className="w-full flex flex-col gap-4">

                    <div className="flex flex-row gap-4">
                    <div className="text-[16px]  mt-2">Role:</div>
                    <div className="flex flex-wrap xl:flex-shrink-0">
                        {project.role.map((role, idx) => (
                        <span key={idx} className="border border-white rounded-full px-4 py-2 text-white text-[16px]">
                            {role}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="flex flex-row gap-4">
                    <div className="text-[16px] mt-2">Service:</div>
                    <div className="flex flex-shrink-0">
                        {project.service.map((service, idx) => (
                        <span key={idx} className="border border-white rounded-full px-4 py-2 text-white text-[16px]">
                            {service}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="flex flex-row gap-4">
                    <div className="text-[16px] mt-2">Industry:</div>
                    <div className="flex flex-shrink-0">
                        {project.industry.map((industry, idx) => (
                        <span key={idx} className="border border-white rounded-full px-4 py-2 text-white text-[16px]">
                            {industry}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="flex flex-row gap-4">
                    <div className="text-[16px]  mt-2">Stack:</div>
                    <div className="flex flex-shrink-0">
                        {project.stack.map((stack, idx) => (
                        <span key={idx} className="border border-white rounded-full px-4 py-2 text-white text-[16px]">
                            {stack}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="flex flex-row gap-4">
                    <div className="text-[16px] mt-2">Date:</div>
                        <div className="flex flex-shrink-0">
                            <span className="border border-white rounded-full px-4 py-2 text-white text-[16px]">
                                {project.date}
                            </span>
                        </div>
                    </div>
                </div>
                </div>


                {/* Right: Overview and Key Features */}
                <div className="xl:w-2/3 flex flex-col">
                <div className=" mb-6  max-w-[140px] items-center xl:items-start"><SectionHeader title="Overview" /></div>
                <p className="mb-10 text-primary-light text-[16px] md:text-[18px]">{project.overview}</p>

                <div className=" mb-6  max-w-[180px]"><SectionHeader title="Key Features"   /></div>
                <ul className="mb-10 list-disc pl-6 space-y-2 text-primary-light text-[16px] md:text-[18px]">
                    {project.keyFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                    ))}
                </ul>

                <div className=" mb-6  max-w-[140px]"><SectionHeader title="Mission" /></div>
                <p className="mb-10 text-primary-light text-[16px] md:text-[18px]">{project.mission}</p>

                <div className=" mb-6  max-w-[140px]"><SectionHeader title="Impact" /></div>
                <p className="mb-10 text-primary-light text-[16px] md:text-[18px]">{project.impact}</p>
                </div>
            </div>

                <div className="w-full grid grid-cols-1 xl:grid-cols-2  gap-4 mt-10">
                    {project.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${project.name} screenshot ${idx + 1}`}
                            className="w-full rounded-4xl shadow-lg navbox"
                        />
                    ))}
                </div>
                {/* Similar Projects Section */}
                <div className="px-4 lg:px-8 xl:px-10 mt-20 py-10  lg:mt-30 lg:py-10">
                <div className="w-full flex flex-col items-center justify-between lg:flex-row">
                    <SectionHeader title="Similar Projects" className="text-center md:text-left" />
                    {/* More Projects Link */}
                    <ArrowLink href="/projects" text="More Projects" className="hidden lg:flex text-[18px] mt-6 xl:mt-0" />
                </div>

                {/* Project Grid */}
                <div className="w-full grid grid-cols-1 gap-10 mt-10">
                    {projects
                    .filter(p => p.id !== project.id) // Exclude current project
                    .slice(0, 2) // Show only two
                    .map(similar => (
                        <div
                        key={similar.id}
                        className="bg-background-secondary rounded-2xl navbox overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                        >
                        {/* Project Image */}
                        <div className="overflow-hidden">
                            <img
                            src={similar.image}
                            alt={similar.name}
                            className="w-full h-auto transform transition-transform duration-400 ease-in-out hover:scale-102"
                            />
                        </div>
                        {/* Project Info */}
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-3">
                            <h3 className="text-primary-light text-lg font-medium">
                                {similar.name}
                            </h3>
                            <div className="lg:flex justify-between gap-3">
                                <ProjectCta href={`/project/${similar.id}`} text="" className="" />
                            </div>
                            </div>
                            {/* Tech Stack */}
                            <div className="flex flex-row gap-0">
                            {(similar.stacks || similar.stack || []).map((stack, index) => (
                                <span
                                key={index}
                                className="text-sm text-primary-light/80 py-1 px-2 sm:py-2 sm:px-4 border border-primary-light rounded-full font-semibold font-inter"
                                >
                                {stack}
                                </span>
                            ))}
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                <a
                    href="/projects"
                    className="group items-center gap-2 text-primary-light flex lg:hidden text-[15px] mt-6 xl:mt-0 transition-all underline underline-offset-5 duration-300"
                >
                    More Projects
                    <img src="/arrow.svg" alt="" className="w-6 h-6 arrow-tilt group-hover:rotate-[30deg]" />
                </a>
                </div>
        </div>

        <Cta />
        <Footer/>


    </section>
  );
}