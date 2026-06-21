import React, { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full bg-white/70 backdrop-blur-lg py-3 px-6 lg:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-gray-200 font-style">

      {/* Brand */}
      <a
        href="#about"
        className="text-lg font-bold text-black tracking-wide hover:text-blue-500 transition-colors"
      >
        
      </a>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-semibold uppercase tracking-widest text-gray-700 hover:text-blue-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop actions */}
      <div className="hidden lg:flex items-center gap-4">
        <a
          href="/Sajid-Noor-Portfolio/Sajid_Noor_Resume_2026.pdf"
          download
          className="text-sm font-semibold uppercase tracking-widest px-5 py-2 bg-blue-500 rounded-full text-black hover:bg-blue-600 transition-colors"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="text-sm font-semibold uppercase tracking-widest px-5 py-2 border border-gray-300 rounded-full text-gray-700 hover:border-blue-400 hover:text-blue-500 transition-colors"
        >
          Let's Connect
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-black focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[49px] right-0 h-screen w-60 bg-white z-50 border-l border-gray-200 shadow-md p-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Menu</p>
          <div className="flex flex-col space-y-5">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="menu-item text-sm font-semibold uppercase tracking-widest text-gray-700 hover:text-blue-500 transition-colors"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/Sajid-Noor-Portfolio/Sajid_Noor_Resume_2026.pdf"
              download
              onClick={closeMenu}
              className="menu-item mt-4 text-sm font-semibold uppercase tracking-widest px-4 py-2.5 bg-blue-500 text-white rounded text-center hover:bg-blue-600 transition-colors"
              style={{ animationDelay: `${navLinks.length * 0.07}s` }}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
