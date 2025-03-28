import { React, useState } from "react";
import Navbar from "./Components/navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contacts";
import Footer from "./Sections/Footer";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="min-h-screen bg-black text-white">
      {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}

      <div className={loading ? "hidden" : ""}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
