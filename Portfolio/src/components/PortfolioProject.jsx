
import SectionHeader from "./SectionHeader";
import ProjectCta from "./ProjectCta";
import { Link } from "react-router-dom";

export default function PortfolioProjects() {
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
      image: "/Taskify/taskify2.png",
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
    <section className="w-full flex flex-col items-center px-4 lg:px-8 xl:px-10">
      {/* Header & More Button Row */}
      <div className="">

        <div className="flex justify-center lg:justify-start w-full mb-10">
            <SectionHeader title="My Projects" />
        </div>

        {/* Project Grid */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-2  gap-10 mt-10">
          
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className=" bg-background-secondary rounded-2xl navbox overflow-hidden shadow-md hover:shadow-lg transform transition-transform duration-400 ease-in-out hover:scale-102"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto"
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

              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}
