import React, { useState, useEffect } from "react";
import Polaroid1 from "../Images/polaroid1.jpg";
import Polaroid2 from "../Images/polaroid2.jpg";
import Polaroid3 from "../Images/polaroid3.jpg";
import Polaroid4 from "../Images/polaroid4.jpg";

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".project-card");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900"
    >
      <div
        className={`absolute  top-6 sm:top-10 md:top-18 left-1/2 transform -translate-x-1/2 flex gap-3 lg:hidden ${
          isHovering ? "photos-visible" : "photos-hidden"
        }`}
      >
        <div className="transform rotate-[-4deg] bg-black p-0.5 sm:p-1 shadow-md photo-item w-12 h-14 sm:w-16 sm:h-18 md:w-20 md:h-20">
          <img
            src={Polaroid1}
            alt="Polaroid 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="transform rotate-[2deg] bg-black p-0.5 sm:p-1 shadow-md photo-item w-12 h-14 sm:w-16 sm:h-18 md:w-20 md:h-20">
          <img
            src={Polaroid2}
            alt="Polaroid 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="transform rotate-[-2deg] bg-black p-0.5 sm:p-1 shadow-md photo-item w-12 h-14 sm:w-16 sm:h-18 md:w-20 md:h-20">
          <img
            src={Polaroid3}
            alt="Polaroid 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="transform rotate-[4deg] bg-black p-0.5 sm:p-1 shadow-md photo-item w-12 h-14 sm:w-16 sm:h-18 md:w-20 md:h-20">
          <img
            src={Polaroid4}
            alt="Polaroid 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="project-card flex flex-col items-center text-center z-10 px-4 font-mono">
        <div
          className="flex flex-col md:flex-row items-center gap-4 cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-purple-400 hover:text-purple-500 transition-colors">
            HELLO THERE!
          </h1>
        </div>
        <div
          className="flex flex-col md:flex-row items-center gap-4 cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h1 className="text-5xl md:text-5xl font-bold text-gray-200 hover:text-white transition-colors">
            I'M SAJID
          </h1>
        </div>

        <p className="max-w-2xl mx-auto mt-8 text-white lg:text-lg md:text-sm leading-relaxed hover:text-gray-300 transition-colors">
          I am a passionate learner who loves building projects that solve
          real-world problems and constantly exploring new technologies, always
          curious about what’s next!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 items-center">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 border border-purple-400 rounded-full text-white hover:bg-white hover:text-black transition-colors text-center"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3 border border-purple-400 rounded-full text-white hover:bg-white hover:text-black transition-colors text-center"
          >
            About Me
          </a>
        </div>

        <div className="mt-6">
          <a
            href="/Sajid-Noor-Portfolio/Sajid_Noor_Resume_2026.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-3 bg-purple-500 rounded-full text-white hover:bg-purple-600 hover:scale-105 transition-all font-medium shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
