import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-gray-900 py-4 px-6  lg:px-12 flex justify-between items-center sticky top-0 z-50 border-b border-gray-800">
      <div className="flex items-center font-semibold font-mono">
        <span className="ml-3 text-white text-3xl font-bold">Sajid Noor</span>
      </div>

      <div className="hidden lg:flex items-center space-x-12 font-semibold font-mono">
        <a
          href="#home"
          className="text-gray-300 hover:text-white transition-colors"
        >
          HOME
        </a>
        <a
          href="#about"
          className="text-gray-300 hover:text-white transition-colors"
        >
          ABOUT
        </a>
        <a
          href="#projects"
          className="text-gray-300 hover:text-white transition-colors"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="text-gray-300 hover:text-white transition-colors"
        >
          CONTACT
        </a>

        <a
          href="/Sajid-Noor-Portfolio/Sajid_Noor_Resume_2026.pdf"
          download
          className="px-6 py-2 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition-colors"
        >
          Download CV
        </a>

        <a
          href="#contact"
          className="px-6 py-2 border border-purple-400 rounded-full  text-white hover:bg-white hover:text-black transition-colors"
        >
          Let's Work Together!
        </a>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed top-16 right-0 h-screen w-64 bg-gray-900 z-50 border-r border-gray-800 font-semibold font-mono p-6">
          <div className="text-gray-500 mb-6 text-sm tracking-wider">MENU</div>
          <div className="flex flex-col space-y-6">
            <a
              href="#home"
              className="menu-item flex items-center text-white hover:text-gray-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                />
              </svg>
              HOME
            </a>

            <a
              href="#about"
              className="menu-item flex items-center text-white hover:text-gray-300 transition-colors"
              style={{ animationDelay: "0.1s" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
              ABOUT
            </a>

            <a
              href="#projects"
              className="menu-item flex items-center text-white hover:text-gray-300 transition-colors"
              style={{ animationDelay: "0.2s" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              PROJECTS
            </a>

            <a
              href="#contact"
              className="menu-item flex items-center text-white hover:text-gray-300 transition-colors"
              style={{ animationDelay: "0.3s" }}
            >
              <svg
                className="w-6 h-6 mr-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              CONTACT
            </a>

            <a
              href="/Sajid-Noor-Portfolio/Sajid_Noor_CV.pdf"
              download
              className="menu-item flex items-center bg-purple-500 text-white hover:bg-purple-600 transition-colors px-4 py-3 rounded-lg mt-4"
              style={{ animationDelay: "0.4s" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-4"
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
              DOWNLOAD CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
