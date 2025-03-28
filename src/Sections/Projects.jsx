import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
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
      link: "https://github.com/SajidNoor5051/UnderGrad-Student-Management",
    },
    {
      id: 2,
      title: "Movie Database",
      description:
        "A comprehensive JavaFX-based movie management system with client-server architecture that allows users to browse, search, add, and track movies with features including revenue analysis, production company information, and multi-criteria movie filtering.",
      technologies: ["Java", "JavaFX", "FXML", "Gradle", "Socket Programming"],
      link: "https://github.com/SajidNoor5051/Movie_database",
    },
    {
      id: 3,
      title: "Car Parking System",
      description:
        "A hardware project that uses Arduino,ATMega and RFID to manage car parking.",
      technologies: ["Arduino", "ATmega32", "RFID"],
      link: "https://github.com/SajidNoor5051/Car-Parking-Project",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "You can take a look at this portfolio website as an example project.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/SajidNoor5051/Portfolio-Website",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-16 relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl font-mono">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-purple-400 transition-colors`}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

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
                  className="inline-block py-2 text-white hover:text-purple-400 transition-colors"
                >
                  View Project -&gt;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
