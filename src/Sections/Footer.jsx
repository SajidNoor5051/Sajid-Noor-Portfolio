import React from "react";
import ProfileImage from "../Images/profile.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-800 py-8 font-mono">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
              <img
                src={ProfileImage}
                alt="Sajid Noor"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-white text-xl font-bold">Sajid Noor</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              CONTACT
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="mailto:your.email@gmail.com"
              className="flex items-center justify-center h-10 w-10 bg-gray-800 rounded-full border border-gray-700 hover:border-purple-400 transition-colors"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sajid-mostafiz-noor-1485b4319/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 bg-gray-800 rounded-full border border-gray-700 hover:border-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>

            <a
              href="https://github.com/SajidNoor5051"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 bg-gray-800 rounded-full border border-gray-700 hover:border-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
