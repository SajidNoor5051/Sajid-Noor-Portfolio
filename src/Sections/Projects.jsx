import React from "react";
import GradesInfoSystemImg from "../Images/Grades-info-system.jpg";
import CarParkingProject from "../Images/car-parking-project.jpg";
import BplFantasyLeague from "../Images/bpl-fantasy-league.jpg"
import Examcraft from "../Images/examcraft.jpg"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BUET Fantasy Premier League",
      description:
        "A fantasy sports website modeled after the Premier League FPL for BUET Premier League, allowing users to create teams, track scores, compete with others and view real-time leaderboards. Designed REST APIs for data synchronization and deployed on Vercel with optimized performance.",
      technologies: [
        "Next",
        "Node",
        "Supabase",
        "TailwindCSS",
        "Vercel",
      ],
      image: BplFantasyLeague,
      link: "https://bpl-fantasy-league.vercel.app/",
    },
    {
      id: 2,
      title: "ExamCraft – AI-driven Exam Preparation Platform",
      description:
        "Full-stack web platform leveraging GPT-powered models to deliver personalized quizzes with AI-based feedback. Features include secure authentication, an analytics dashboard, and adaptive question generation to enhance the learning experience.",
      technologies: [
        "Next",
        "TailwindCSS",
        "Nest",
        "PostGres",
        "AI API Integration",
      ],
      image: Examcraft,
      link: "https://www.youtube.com/watch?v=dvH_PPXtCH8",
    },
    {
      id: 3,
      title: "Grades Information System",
      description:
        "A Grades Information System for storing, updating, and viewing student records, grades, and course enrollments, with features for individual, level-wise, and course-wise results, as well as admin and advisor side management.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "EJS",
        "JavaScript",
        "Node",
        "Express",
      ],
      image: GradesInfoSystemImg,
      link: "https://github.com/SajidNoor5051/UnderGrad-Student-Management",
    },
    
    {
      id: 4,
      title: "Car Parking System",
      description:
        "A hardware project that uses Arduino,ATMega and RFID to manage car parking.",
      technologies: ["Arduino", "ATmega32", "RFID"],
      image: CarParkingProject,
      link: "https://github.com/SajidNoor5051/Car-Parking-Project",
    },{
      id: 5,
      title: "Movie Database",
      description:
        "A comprehensive JavaFX-based movie management system with client-server architecture that allows users to browse, search, add, and track movies with features including revenue analysis, production company information, and multi-criteria movie filtering.",
      technologies: ["Java", "JavaFX", "FXML", "Gradle", "Socket Programming"],
      image: null,
      link: "https://github.com/SajidNoor5051/Movie_database",
    },

    
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-16 relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl font-mono">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card overflow-hidden rounded-lg border border-gray-700 hover:border-purple-400 transition-colors bg-gray-800 bg-opacity-50`}
            >
              {/* Image Section */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-60"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-900 text-white text-sm px-3 py-1 rounded-md border border-white border-opacity-10"
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
                    className="inline-block py-2 text-white hover:text-purple-400 transition-colors font-medium"
                  >
                    View Project -&gt;
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
