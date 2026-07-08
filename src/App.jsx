import { ToastProvider } from "./context/ToastContext";
import CustomCursor from "./components/CustomCursor";
import GlowLayer from "./components/GlowLayer";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechWall from "./components/TechWall";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <ToastProvider>
      <GlowLayer />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <TechWall />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ToastProvider>
  );
}
