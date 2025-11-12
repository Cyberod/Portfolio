import { useParams, Link } from "react-router-dom";
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
    description: "Cinemania is a modern movie discovery platform leveraging the TMDB API to provide users with up-to-date movie information, reviews, and recommendations.",
    role: ["Fullstack Engineer", "Project Manager"],
    service: ["Web Development", "Project Management", "Software Engineering" ],
    industry: ["Entertainment", "Media"],
    stack: ["Django", "JavaScript", "TMDB API", "SQlite", "CSS"],
    date: "Dec. 2023 - March 2024",
    overview: "Cinemania is a dynamic web application built as a movie discovery platform, leveraging The Movie Database (TMDB) API to provide users with comprehensive access to film information. The app serves as an entertainment hub where users can explore, search, and learn about movies, with a special emphasis on Nigerian-language content (Igbo, Yoruba, Hausa) to promote local cinema.",
    keyFeatures: [
      "Movie Discovery Dashboard: Displays curated lists including popular, now-playing, upcoming, and top-rated movies with interactive sliders and banners.",
      "Detailed Movie Pages: In-depth views for each film, featuring plot summaries, cast/crew details, trailers, and personalized recommendations.",
      "Advanced Search: Full-text search functionality with pagination and AJAX-powered results for seamless browsing.",
      "Genre-Based Filtering: Browse movies by specific genres (e.g., Action, Comedy) with dynamic loading.",
      "Language-Specific Exploration: Dedicated sections for movies in Nigerian languages, fostering cultural representation and discovery.",
      "Responsive Design: Mobile-friendly interface with custom sliders, lazy-loaded images, and intuitive navigation.",
      "Pagination & AJAX Loading: Efficient handling of large datasets with infinite scroll-like behavior for better user experience."
    ],
    mission: "To democratize movie discovery by creating an accessible, user-friendly platform that connects global audiences with diverse film content, while championing Nigerian cinema and enabling users to explore films they might otherwise miss.",
    impact: [
        "User Engagement: Facilitates informed entertainment choices, potentially increasing movie viewership and cultural awareness.",
        "Cultural Promotion: Highlights Nigerian-language films, supporting local filmmakers and preserving cultural narrative in an increasingly globalized media landscape.",
        "Technical Demonstration: Showcases API integration, responsive web development, and scalable web architecture, serving as a foundation for similar entertainment-focused applications.",
    ]
  },

  {
    id: 2,
    name: "Taskify",
    image: "/Taskify/taskify2.png",
    images: ["/Taskify/taskify2.png", "/Taskify/taskify3.png", "/Taskify/taskify4.png", "/Taskify/taskify5.png"],
    description: "Taskify is a collaborative Project/Task management platform.",
    role: ["Backend Engineer", "Project Manager"],
    service: ["Web Development", "Software Engineering" , "SaaS", "Project Management"],
    industry: ["Technology", "Enterprise Solutions"],
    stack: ["Fastapi", "React", "Docker","PostgreSQL", "Swager UI" ],
    date: "March. 2025 - June 2025",
    overview: "Taskify is a collaborative Project management platform. It provides comprehensive services for user management, project collaboration, task tracking, file handling, and analytics.",
    keyFeatures: [
      "Authentication System: JWT-based authentication with user registration, email verification, OTP, password reset, and secure login/logout",
      "User Management: Onboarding flows, profile management, and user analytics with activity tracking",
      "Project Management: Create and manage projects with member invitation systems, role-based permissions, and collaborative workspaces.",
      "Task Management: Full CRUD operations for tasks with assignment, status tracking, prioritization, and deadline management.",
      "File Handling: Secure file upload and storage capabilities for project attachments and user documents.",
      "Analytics Dashboard: User and project performance metrics, activity logs, and productivity insights.",
      "Email Integration: Automated notifications for verification, invites, and system alerts.",
      "Health Monitoring: Built-in health checks and error handling for production reliability.",
    ],
    mission: "To develop a scalable, secure, and User-friendly web Application that streamlines team collaboration and task management. The project demonstrates expertise in building modern web apps that can handle real-world productivity challenges while maintaining clean UI, architecture and security best practices.",
    impact: [
        "The platform has been successfully deployed and integrated with a frontend application, demonstrating real-world scalability and the ability to handle user authentication, project collaboration, and data persistence at scale.",
    ]
  },

    {
    id: 3,
    name: "ExpenseWise",
    image: "/ExpenseWise.jpg",
    images: ["/expense1.jpg", "/expense2.jpg", "/expense3.jpg", "/expense4.jpg"],
    description: "ExpenseWise is a comprehensive web application designed for personal finance management.",
    role: ["Fullstack Engineer", "Project Manager"],
    service: ["Web Development", "Software Engineering" , "SaaS", "Project Management"],
    industry: ["Fin-Tech"],
    stack: ["Django", "JavaScript", "TMDB API", "SQLite"],
    date: "Jan. 2025 - March 2025",
    overview: "ExpenseWise is a comprehensive web application designed for personal finance management, enabling users to track, categorize, and analyze their expenses and income. Built with Django, it offers an intuitive interface for managing financial records, generating visualizations, and exporting data in multiple formats, all while ensuring data privacy and security.",
    keyFeatures: [
      "Expense and Income Management: Add, edit, delete, and categorize financial records with pagination and search functionality.",
      "Data Visualization: Interactive pie and bar charts for expense/income distribution and summaries over the past six months.",
      "Export Capabilities: Download data in CSV, Excel, or PDF formats for offline analysis or sharing.",
      "User Authentication: Secure login system with role-based access, ensuring each user manages only their own data.",
      "Customization: Support for user preferences like currency selection.",
    ],
    mission: "To empower individuals to achieve financial control and literacy by providing accessible, user-friendly tools for tracking spending and income, facilitating better budgeting and decision-making.",
    impact: [
        "ExpenseWise promotes financial discipline by offering actionable insights through data visualizations, helping users identify spending patterns and optimize budgets. It enhances privacy with secure authentication and supports scalability for personal and potentially small business use, contributing to improved financial outcomes and reduced financial stress.",
    ]
  },
  // ...other projects
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <div className="text-center mt-30 text-2xl">Project not found.</div>;

  return (
    <section className="w-full flex flex-col items-center ">
        <div className="px-4 lg:px-8 xl:px-10 py-10">
            {/* Project Name */}
            <h1 className="text-[35px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[120px] font-bold font-inter text-center mb-6">
                {project.name}
            </h1>
            {/* Project Description */}
            <p className="max-w-[464px] text-center  text-primary-light text-[16px] md:text-[18px] mb-8 mx-auto">
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
                    <div className="flex flex-shrink-0  w-[200px] sm:w-[400px] flex-wrap">
                        {project.service.map((service, idx) => (
                        <span key={idx} className="border border-white rounded-full px-4 py-2 text-white text-[16px]">
                            {service}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="flex flex-row gap-4">
                    <div className="text-[16px] mt-2">Industry:</div>
                    <div className="flex flex-shrink-0 w-[200px] sm:w-[400px] flex-wrap">
                        {project.industry.map((industry, idx) => (
                        <span key={idx} className="border border-white rounded-full px-4 py-2 text-white text-[16px]">
                            {industry}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="flex flex-row gap-4">
                        <div className="text-[16px]  mt-2">Stack:</div>
                                <div className="flex flex-shrink-0 w-[200px] sm:w-[400px] flex-wrap">
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
                    <ul className="mb-10 list-disc pl-6 space-y-2 text-primary-light text-[16px] md:text-[18px]">
                        {project.impact.map((impacts, idx) => (
                        <li key={idx}>{impacts}</li>
                        ))}  
                    </ul>             
                </div>
            </div>

                <div className="w-full grid grid-cols-1 xl:grid-cols-2  gap-4 mt-10">
                    {project.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${project.name} screenshot ${idx + 1}`}
                            className="w-full rounded-2xl shadow-lg navbox"
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
                        <Link
                        key={similar.id}
                        to={`/project/${similar.id}`}
                        className="bg-background-secondary rounded-2xl navbox overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 block"
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
                            <ProjectCta text="" className="" />
                            </div>
                            </div>
                            {/* Tech Stack */}
                            <div className="flex flex-row gap-0">
                            {(similar.stacks || similar.stack || []).slice(0, 3).map((stack, index) => (
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