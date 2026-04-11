import { motion, useScroll, useSpring } from "framer-motion";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[1200] h-1 origin-left bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600"
        style={{ scaleX }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="mesh-grid absolute inset-0 opacity-60" />
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-sky-400/20 blur-3xl md:h-96 md:w-96" />
        <div className="absolute right-[-10rem] top-[18%] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl md:h-[28rem] md:w-[28rem]" />
        <div className="absolute bottom-[-10rem] left-[20%] h-72 w-72 rounded-full bg-blue-500/15 blur-3xl md:h-[26rem] md:w-[26rem]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
