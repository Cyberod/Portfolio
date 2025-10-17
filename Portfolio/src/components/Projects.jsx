
import SectionHeader from "./SectionHeader";
import ArrowLink from "./ArrowLink";
import ProjectCta from "./ProjectCta";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Cinemania",
      image: "/Cinemania.jpg",
      stacks: ["Django", "React", "TMDB API"],
      link: "",
    },
    {
      id: 2,
      name: "Taskify",
      image: "",
      stacks: ["FastAPI", "React", "PostgreSQL"],
      link: "",
    },
    {
      id: 3,
      name: "Budget Automation",
      image: "ExpenseWise.jpg",
      stacks: ["Django", "GraphQL", "JWT"],
      link: "",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center mt-20 px-4 md:px-20 lg:px-6 pt-10">
      {/* Header & More Button Row */}
      <div className="w-full flex flex-col items-center justify-between lg:flex-row">
        <SectionHeader title="Selected Projects" />

        {/* More Projects Link */}
        <ArrowLink href="/projects" text="More Projects" className="hidden lg:flex text-[18px] mt-6 xl:mt-0" />
      </div>

      {/* Project Grid */}
      <div className="w-full grid grid-cols-1  gap-10 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" bg-background-secondary rounded-2xl navbox overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto transform transition-transform duration-400 ease-in-out hover:scale-102"
            />
            </div>

            {/* Project Info */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-primary-light text-lg font-medium">
                  {project.name}
                </h3>
                <div className="lg:flex hidden justify-between gap-3 ">

                <ProjectCta href="#" text="Source Code" className="" />

                <ProjectCta href="#" text="Live Demo" className="" />
                
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-row gap-0 ">
                {project.stacks.map((stack, index) => (
                  <span
                    key={index}
                    className="text-sm text-primary-light/80 py-1 px-2 sm:py-2 sm:px-4 border border-primary-light rounded-full font-semibold font-inter"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              {/* Mobile CTA Buttons */}
                <div className="flex lg:hidden justify-between gap-2 mt-4 ">

                <ProjectCta href="#" text="Source Code" className="" />

                <ProjectCta href="#" text="Live Demo" className="" />
                
                </div>
            </div>
          </div>
        ))}
      </div>
        <a
          href="/projects"
          className="group  items-center gap-2 text-primary-light flex lg:hidden text-[15px] mt-6 xl:mt-0 transition-all underline underline-offset-5  duration-300"
        >
          More Projects
        <img src="/arrow.svg" alt="" />

        </a>
    </section>
  );
}
