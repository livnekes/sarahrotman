import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import OSA from "./components/OSA";
import OSAChildren from "./components/OSAChildren";
import DISE from "./components/DISE";
import Italy from "./components/Italy";
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
