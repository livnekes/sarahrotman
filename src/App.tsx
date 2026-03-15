import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Services from "./components/Services";
import OSA from "./components/OSA";
import OSAChildren from "./components/OSAChildren";
import DISE from "./components/DISE";
import Italy from "./components/Italy";
import Awards from "./components/Awards";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <OSA />
      <OSAChildren />
      <DISE />
      <Italy />
      <Education />
      <Awards />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
