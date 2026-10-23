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

        <div className="text-center">
          <p className="text-sm text-gray-400">
            © Sajid Noor . Last update on :{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
