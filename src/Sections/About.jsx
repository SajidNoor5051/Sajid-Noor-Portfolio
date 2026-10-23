import React, { useEffect } from "react";
import ProfileImage from "../Images/profile.jpg";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".project-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = {
    "C/C++":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    NestJS:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    "Tailwind CSS":
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    PyTorch:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    TensorFlow:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  };

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-portfolio-background"
    >
      <div className="project-card container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl font-style">

        {/* ── Header: Photo + Name + Contact ── */}
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-14">
          <div className="flex-shrink-0">
            <img
              src={ProfileImage}
              alt="Sajid Noor"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border border-gray-200 shadow-sm"
            />
          </div>
          <div className="flex-1 text-center sm:text-left pt-1">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-1">
              Sajid Mostafiz Noor
            </h1>
            <p className="text-gray-700 text-sm md:text-base">
              BSc. Graduate · Computer Science &amp; Engineering · BUET
            </p>
            <div className="mt-4 w-12 h-0.5 bg-blue-400 mx-auto sm:mx-0" />

            <div className="mt-4 flex justify-center sm:justify-start">
              <a
                href="mailto:sajidmostafiznoor@gmail.com"
                className="flex items-center gap-3 group"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg border-gray-300 bg-gray-100 text-black flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-left">
                  <span className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
                    Email
                  </span>
                  <span className="block text-xs text-gray-700 group-hover:text-blue-500 transition-colors">
                    sajidmostafiznoor@gmail.com
                  </span>
                </span>
              </a>
            </div>

            <div className="flex flex-nowrap justify-center sm:justify-start items-center gap-x-3 sm:gap-x-5 mt-3 text-[11px] sm:text-xs text-gray-600 overflow-x-auto">
              <a
                href="https://www.linkedin.com/in/sajid-mostafiz-noor-1485b4319/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 whitespace-nowrap hover:text-blue-500 transition-colors group"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-400 flex-shrink-0 group-hover:border-blue-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </span>
                LinkedIn
              </a>

              <a
                href="https://github.com/SajidNoor5051"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 whitespace-nowrap hover:text-blue-500 transition-colors group"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-400 flex-shrink-0 group-hover:border-blue-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                GitHub
              </a>

              <a
                href="https://scholar.google.com/citations?user=HPOB0LwAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 whitespace-nowrap hover:text-blue-500 transition-colors group"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-400 flex-shrink-0 group-hover:border-blue-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.73A7.961 7.961 0 0 1 12 9a7.961 7.961 0 0 1 7.162 4.23L24 9.5 12 0z" />
                  </svg>
                </span>
                Google Scholar
              </a>

              <a
                href="/Sajid-Noor-Portfolio/Sajid_Noor_Resume_2026.pdf"
                download
                className="flex items-center gap-1.5 whitespace-nowrap hover:text-blue-500 transition-colors group"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-400 text-[9px] font-bold flex-shrink-0 group-hover:border-blue-400">
                  CV
                </span>
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* ── About Me ── */}
        <div className="mb-10">
          <SectionHeading>About Me</SectionHeading>
          <p className="text-base text-gray-800 leading-relaxed mb-3">
            Hello, I'm Sajid Mostafiz Noor. I completed my Bachelor of Science (BSc.) 
            in the Department of Computer Science and Engineering at Bangladesh University of
            Engineering and Technology (BUET). 
            My research interests lie in the areas of Human-Computer Interaction, Mobile and Wearable Computing, and applied Machine Learning.
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            Outside academics, I enjoy exploring new places, playing
            football, and occasionally covering songs on guitar.
          </p>
        </div>

        {/* ── Education ── */}
        <div className="mb-10">
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-5">
            <EducationItem
              institution="Bangladesh University of Engineering and Technology (BUET)"
              degree="BSc. in Computer Science and Engineering"
              period="2022 – 2026"
            />
            <EducationItem
              institution="Notre Dame College, Dhaka, Bangladesh"
              degree="Higher Secondary Certificate (HSC)"
              period="2018 – 2020"
            />
          </div>
        </div>

        


        


        {/* ── Research Interests ── */}
        {/* <div className="mb-10">
          <SectionHeading>Research Interests</SectionHeading>
          <p className="text-base text-gray-800 leading-relaxed">
            My research interests include artificial intelligence, machine
            learning, and intelligent systems design. I am particularly
            interested in AI/ML-driven automation, natural language processing,
            and the integration of machine learning models into real-world
            software applications.
          </p>
        </div> */}

        {/* ── Technical Skills ── */}
        <div className="mb-4">
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {Object.entries(skills).map(([skill, logo]) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded text-sm text-gray-800 hover:border-blue-300 hover:text-black transition-colors cursor-default"
              >
                <img src={logo} alt={skill} className="w-4 h-4" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const SectionHeading = ({ children }) => (
  <h2 className="flex items-center gap-3 text-sm font-bold text-gray-800 uppercase tracking-widest mb-5">
    <span className="w-5 h-0.5 bg-blue-400 inline-block flex-shrink-0" />
    {children}
    <span className="flex-1 h-px bg-gray-200 inline-block" />
  </h2>
);

const EducationItem = ({ institution, degree, period }) => (
  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 pl-4 border-l-2 border-gray-200">
    <div>
      <p className="font-semibold text-black text-sm md:text-base">{institution}</p>
      <p className="text-gray-600 text-sm">{degree}</p>
    </div>
    <span className="text-gray-600 text-sm whitespace-nowrap sm:text-right">{period}</span>
  </div>
);

export default About;
