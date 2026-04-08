import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import Below_Hero from "./components/Below_Hero";
import Hero from"./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects2 from "./components/Projects2";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Profile from "./components/Profile";

function App() {
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-up, .fade-left");

  if (elements.length === 0) return; // safety

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.5}
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Project />
    <Projects2 />
    <Profile />
    <Below_Hero />
    <About />
    <h1 className="text-black">Hello People</h1>
      
    </>
  )
}

export default App
