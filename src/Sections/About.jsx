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
              BSc. Student · Computer Science &amp; Engineering · BUET
            </p>
            <div className="mt-4 w-12 h-0.5 bg-blue-400 mx-auto sm:mx-0" />
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-1 mt-4 text-sm text-gray-500">
              <a
                href="mailto:sajidmostafiznoor@gmail.com"
                className="hover:text-blue-500 transition-colors"
              >
                sajidmostafiznoor@gmail.com
              </a>
              <a
                href="https://github.com/SajidNoor5051"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sajid-mostafiz-noor-1485b4319/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="/Sajid-Noor-Portfolio/Sajid_Noor_Resume_2026.pdf"
                download
                className="hover:text-blue-500 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* ── About Me ── */}
        <div className="mb-10">
          <SectionHeading>About Me</SectionHeading>
          <p className="text-base text-gray-800 leading-relaxed mb-3">
            Hello, I am Sajid Noor, a final-year undergraduate student in
            Computer Science and Engineering at Bangladesh University of
            Engineering and Technology (BUET). I have strong interests in
            software development, full-stack web application development, and
            artificial intelligence. I enjoy building scalable, user-focused
            solutions using modern technologies and clean engineering practices.
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            Outside academics, I enjoy traveling around Bangladesh, playing
            football, and music — particularly guitar. These pursuits help me
            stay balanced, creative, and occasionally sane while debugging.
          </p>
        </div>

        {/* ── Education ── */}
        <div className="mb-10">
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-5">
            <EducationItem
              institution="Bangladesh University of Engineering and Technology (BUET)"
              degree="BSc. in Computer Science and Engineering"
              period="2021 – Present"
            />
            <EducationItem
              institution="Notre Dame College, Dhaka, Bangladesh"
              degree="Higher Secondary Certificate (HSC)"
              period="2018 – 2020"
            />
          </div>
        </div>

        {/* ── Research Interests ── */}
        <div className="mb-10">
          <SectionHeading>Research Interests</SectionHeading>
          <p className="text-base text-gray-800 leading-relaxed">
            My research interests include artificial intelligence, machine
            learning, and intelligent systems design. I am particularly
            interested in AI/ML-driven automation, natural language processing,
            and the integration of machine learning models into real-world
            software applications.
          </p>
        </div>

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
