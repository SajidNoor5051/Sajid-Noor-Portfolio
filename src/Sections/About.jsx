import React from "react";
import ProfileImage from "../Images/profile.jpg";

const About = () => {
  const skillLogos = {
    "C/C++":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    NestJS:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",

    Tailwind:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",

    AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",

    Jenkins:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",

    PyTorch:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    
    TensorFlow:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900"
    >
      <div className="project-card container mx-auto px-4 md:px-8 lg:px-16 max-w-5xl font-mono">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center mb-12">
          <div className="w-full md:w-1/4 lg:w-1/5">
            <div className="relative max-w-xs mx-auto">
              <div className="relative rounded-full overflow-hidden">
                <img
                  src={ProfileImage}
                  alt="Sajid Noor"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 lg:w-4/5 text-gray-200">
            <p className="lg:text-lg md:text-sm mb-4 leading-relaxed">
              I am a final-year undergraduate student in <b>Computer Science and Engineering </b>
              at Bangladesh University of Engineering and Technology (BUET), 
              with strong interests in <b>software development, web application development,
              and artificial intelligence</b>. I enjoy building scalable, user-focused solutions
              using modern technologies and clean engineering practices.
            </p>
            <p className="lg:text-lg md:text-sm mb-4 leading-relaxed">
              My experience includes working with modern web frameworks, <b>full-stack tools</b>, 
              and AI-powered APIs to create responsive, efficient, and maintainable applications.
              I am particularly interested in <b>AI/ML-driven systems, intelligent automation,</b> 
              and <b>integrating machine learning models</b> into real-world software products.
              
            </p>
            <p className="lg:text-lg md:text-sm leading-relaxed">
              Outside academics, I believe in keeping things balanced. You’ll usually find me 
              traveling around Bangladesh, playing football, or relaxing with music—especially 
              guitar and other instruments. These interests help me stay creative,
              curious, and occasionally sane while debugging!
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-2xl font-bold mb-6 text-purple-400">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 bg-opacity-50 p-5 rounded-lg border border-gray-700 hover:border-purple-400 transition-colors">
              <div className="flex flex-col mb-2">
                <h4 className="text-lg font-bold text-white">
                  BSc. : Department of Computer Science & Technology , Bangladesh
                  University of Engineering & Technology
                </h4>
                <span className="text-gray-400">2021 - Present</span>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-5 rounded-lg border border-gray-700 hover:border-purple-400 transition-colors">
              <div className="flex flex-col mb-2">
                <h4 className="text-lg font-bold text-white">
                  HSC: Notre Dame College
                </h4>
                <span className="text-gray-400">2018 - 2020</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-purple-400 text-center">
            Frameworks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(skillLogos).map(([skill, logo], index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-gray-800 py-2 px-4 w-auto rounded-full text-center text-white border border-gray-700 hover:border-purple-400 transition-colors text-sm truncate"
              >
                <img src={logo} alt={skill} className="w-6 h-6" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
