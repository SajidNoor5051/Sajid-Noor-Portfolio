import React from "react";
import Navbar from "./Components/navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contacts from "./Sections/Contacts";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Home />

      <About />
      <Projects />
      <Contacts />
      <Footer />
      {/* Hero Section */}
    </div>
  );
}

export default App;
