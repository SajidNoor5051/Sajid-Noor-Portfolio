import React from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-portfolio-background border-t border-gray-100 py-8 font-style">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">

        <div className="flex flex-col items-center text-center gap-4">

          {/* Brand */}
          <div>
            <p className="text-sm font-bold text-black">Sajid Mostafiz Noor</p>
            {/* <p className="text-xs text-gray-400 mt-0.5">
              Full-Stack Developer &amp; Researcher
            </p> */}
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-blue-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:sajidmostafiznoor@gmail.com"
            className="text-xs text-gray-500 hover:text-blue-500 transition-colors"
          >
            sajidmostafiznoor@gmail.com
          </a>

        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Sajid Noor. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
