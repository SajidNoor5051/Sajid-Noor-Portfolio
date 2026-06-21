import React from "react";
import GradesInfoSystemImg from "../Images/Grades-info-system.jpg";
import CarParkingProject from "../Images/car-parking-project.jpg";
import BplFantasyLeague from "../Images/bpl-fantasy-league.jpg";
import Examcraft from "../Images/examcraft.jpg";

const projects = [
  {
    id: 1,
    title: "BUET Fantasy Premier League",
    description:
      "A fantasy sports web platform modeled after the Premier League FPL, built for the BUET Premier League. Users can create teams, track scores, compete on real-time leaderboards, and manage squads. Designed REST APIs for data synchronization and deployed on Vercel.",
    technologies: ["Next.js", "Node.js", "Supabase", "Tailwind CSS", "Vercel"],
    image: BplFantasyLeague,
    link: "https://bpl-fantasy-league.vercel.app/",
  },
  {
    id: 2,
    title: "ExamCraft — AI-Driven Exam Preparation Platform",
    description:
      "A full-stack web platform leveraging GPT-powered models to deliver personalized quizzes with AI-based feedback. Features include secure authentication, an analytics dashboard, and adaptive question generation to enhance the learning experience.",
    technologies: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "AI API Integration"],
    image: Examcraft,
    link: "https://www.youtube.com/watch?v=dvH_PPXtCH8",
  },
  {
    id: 3,
    title: "C++ Compiler",
   // period: "January 2024 – March 2024",
    description:
      "Built a compiler from scratch in C++ using Flex for lexical analysis and Bison for parsing. Designed grammar rules, symbol table management, and semantic analysis with error detection and reporting. Generated intermediate three-address code as a machine-independent representation for execution and optimization.",
    technologies: ["C++", "Flex", "Bison"],
    image: null,
    link: "https://github.com/SajidNoor5051/Compiler-design",
  },
  {
    id: 4,
    title: "Grades Information System",
    description:
      "A web-based academic records management system for storing, updating, and viewing student grades and course enrollments. Supports individual, level-wise, and course-wise result views with separate interfaces for admins and academic advisors.",
    technologies: ["HTML", "CSS", "Bootstrap", "EJS", "JavaScript", "Node.js", "Express"],
    image: GradesInfoSystemImg,
    link: "https://github.com/SajidNoor5051/UnderGrad-Student-Management",
  },
  {
    id: 5,
    title: "Car Parking System",
    description:
      "An embedded hardware project implementing an automated car parking management system using RFID-based access control, microcontroller logic, and real-time slot monitoring.",
    technologies: ["Arduino", "ATmega32", "RFID"],
    image: CarParkingProject,
    link: "https://github.com/SajidNoor5051/Car-Parking-Project",
  },
  {
    id: 6,
    title: "Movie Database",
    description:
      "A JavaFX-based movie management application with a client-server architecture. Supports browsing, searching, adding, and tracking movies with features including revenue analysis, production company information, and multi-criteria filtering.",
    technologies: ["Java", "JavaFX", "FXML", "Gradle", "Socket Programming"],
    image: null,
    link: "https://github.com/SajidNoor5051/Movie_database",
  },
];

const SectionHeading = ({ children }) => (
  <h2 className="flex items-center gap-3 text-sm font-bold text-gray-800 uppercase tracking-widest mb-8">
    <span className="w-5 h-0.5 bg-blue-400 inline-block flex-shrink-0" />
    {children}
    <span className="flex-1 h-px bg-gray-200 inline-block" />
  </h2>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-portfolio-background"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl font-style">

        <SectionHeading>Projects</SectionHeading>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card flex flex-col sm:flex-row overflow-hidden border border-gray-100 rounded-sm"
            >
              {/* Image */}
              {project.image ? (
                <div className="sm:w-64 md:w-78 flex-shrink-0 h-40 sm:h-auto overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="sm:w-64 md:w-78 flex-shrink-0 h-40 sm:h-auto bg-gray-50 flex items-center justify-center border-r border-gray-100">
                  <span className="text-gray-300 text-xs tracking-wide uppercase">No image</span>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 p-5 border-l-2 border-gray-200 bg-gray-50">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-black text-base leading-snug">
                    {project.title}
                  </h3>
                  <span className="text-gray-400 text-xs font-mono flex-shrink-0 pt-0.5">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {project.period && (
                  <p className="text-xs text-gray-400 mb-2">{project.period}</p>
                )}

                <p className="text-base text-gray-800 leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 border border-gray-200 rounded text-xs text-gray-600 bg-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
