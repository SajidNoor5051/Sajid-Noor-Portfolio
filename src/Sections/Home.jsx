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
        className={`absolute top-18 left-1/2 transform -translate-x-1/2 flex gap-3 lg:hidden ${
          isHovering ? "photos-visible" : "photos-hidden"
        }`}
      >
        <div className="transform rotate-[-4deg] bg-black p-1 shadow-md photo-item">
          <img
            src={Polaroid1}
            alt="Polaroid 1"
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="transform rotate-[2deg] bg-black p-1 shadow-md photo-item">
          <img
            src={Polaroid2}
            alt="Polaroid 2"
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="transform rotate-[-2deg] bg-black p-1 shadow-md photo-item">
          <img
            src={Polaroid3}
            alt="Polaroid 3"
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="transform rotate-[4deg] bg-black p-1 shadow-md photo-item">
          <img
            src={Polaroid4}
            alt="Polaroid 4"
            className="w-20 h-20 object-cover"
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

        <p className="max-w-2xl mx-auto mt-8 text-white text-lg leading-relaxed hover:text-gray-300 transition-colors">
          I am a passionate learner who loves building projects that solve
          real-world problems and constantly exploring new technologies, always
          curious about what’s next!
        </p>

        <div className="flex gap-6 mt-12">
          <a
            href="#projects"
            className="px-8 py-3 border border-purple-400 rounded-full text-white hover:bg-white hover:text-black transition-colors"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-purple-400 rounded-full text-white hover:bg-white hover:text-black transition-colors"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
