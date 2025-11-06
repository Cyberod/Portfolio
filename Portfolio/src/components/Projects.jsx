
import SectionHeader from "./SectionHeader";
import ArrowLink from "./ArrowLink";
import ProjectCta from "./ProjectCta";
import { Link } from "react-router-dom";


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
      image: "Taskify/taskify2.png",
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
    <section className="w-full flex flex-col items-center mt-20 px-4 lg:px-8 xl:px-10 pt-10">
      {/* Header & More Button Row */}
      <div className="px-4 lg:px-8 xl:px-10">
        <div className="w-full flex flex-col items-center justify-between lg:flex-row">
          <SectionHeader title="Selected Projects" />

          {/* More Projects Link */}
          <ArrowLink href="/portfolio" text="More Projects" className="hidden lg:flex text-[18px] mt-6 xl:mt-0" />
        </div>

        {/* Project Grid */}
        <div className="w-full grid grid-cols-1  gap-10 mt-10">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className=" bg-background-secondary rounded-2xl navbox overflow-hidden shadow-md hover:shadow-lg  transform transition-transform duration-400 ease-in-out hover:scale-102"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto "
              />
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-primary-light text-lg font-medium">
                    {project.name}
                  </h3>
                  <div className="lg:flex  justify-between gap-3 ">

                  <Link to={`/project/${project.id}`}>
                    <ProjectCta  text="" className="" />
                  </Link>                  
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

              </div>
            </Link>
          ))}
        </div>
          <a
            href="/portfolio"
            className="group  items-center gap-2 text-primary-light flex lg:hidden text-[15px] mt-6 xl:mt-0 transition-all underline underline-offset-5  duration-300"
          >
            More Projects
          <img src="/arrow.svg" alt="" className="w-6 h-6 arrow-tilt group-hover:rotate-[30deg] " />

          </a>
      </div>

    </section>
  );
}
