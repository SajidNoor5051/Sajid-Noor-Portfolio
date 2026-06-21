import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Sections/About";
import Research from "./Sections/Research";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contacts";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div>
        <Navbar />
        <About />
        <Research />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
