import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import Below_Hero from "./components/Below_Hero";
import Hero from"./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
      useEffect(() => {
          AOS.init({
          duration: 1000, // animation speed
          once: true,     // animate only once
          });
  
        }, []);

  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Below_Hero />
    <h1 className="text-black">Hello People</h1>
      
    </>
  )
}

export default App
