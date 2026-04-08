
import { useState } from "react";

function Project()
{
    const [activeIndex, setActiveIndex] = useState(0);
    const projects = [

        {
            title:"Portfolio Website",
            desc:"I have design a Fully Functioning and Responsive Website that describe my work and my commitment towards Tech Field.",
            image:"/portfolio_abhijeet.png",
            tech: ["React","Tailwind" ,"Html"],
        },
        {
            title:"Tic-Tac-Toe Game",
            desc:"Tic-Tac-Toe is an addictive game. ",
            image:"/Tic_Tac_Toe.png",
            tech: ["JavaScript","Css" ,"Html"],
        },
        {
            title:"Weather App",
            desc:"A Plateform that give you info about the Current weather of the city across the World.",
            image:"/Rock_Paper_Sessior.png",
            tech: ["Python","Pytrxx"],
        },
        {
            title:"Rock Paper Sessior",
            desc:"Rock Paper Sessior is an addictive game that you can play against the Computer . ",
            image:"/Rock_Paper_Sessior.png",
            tech: ["JavaScript","Tailwind" ,"Html"],
        },
        {
            title:"Guess The Number ",
            desc:"Guess The Number is an addictive game that you can play against the Computer . ",
            image:"/Rock_Paper_Sessior.png",
            tech: ["JavaScript","Tailwind" ,"Html"],
        },


    ];
 return (
    <>
    <section id="projects" className="bg-[var(--bg)] relative  px-4 sm:px-6 md:px-12 lg:px-20 py-20 overflow-hidden mt-10 ">
        <div className="Headint_tag text-2xl font-extrabold p-4  rounded-lg text-center mb-10 md:mb-12 text-[var(--primary-color)]">
            <p className="underline">My Work</p>
        </div>
        <div className="Main_Head text-4xl text-center  font-[var(--Josefin-font)]">
            <h2>Projects That Reflect My Skills</h2>
        </div>
        <div className="des text-center">
            <p>Here are some  of the Projects  I've build to solve real world problems </p>
            <p>and sharpen my development skills.</p>
        </div>




          {/* Adding Half Circle  */}
          <div className="halfcircle absolute  hidden md:block  -left-10 top-72 animate-[float-leftright_1.5s_ease-in-out_infinite]">
                  <img src="public\half_circle.png" alt="Half circle" />
          </div>

          {/* Adding Smaller Circle  */}

          <div className="smaller_circle absolute hidden md:block right-10  animate-[float-leftright_1.5s_ease-in-out_infinite]">
            <img src="public\download.png" alt="Small Circle" />
          </div>

        {/* LAYOUT THAT SHOWS MY PROJECTS IN TABULAR FORMAT */}
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div className="flex flex-col relative">

          

          {projects.map((project, index) => (
            <div key={index} className="border-b">

              {/* CLICKABLE ROW */}
              <div
                onClick={() => setActiveIndex(index)}
                className={`flex items-center justify-between p-4 md:p-5 cursor-pointer transition ${
                  activeIndex === index
                    ? "bg-purple-100"
                    : "bg-transparent"
                }`}
              >
                
                <div className="flex gap-4 items-center">

                  <span className="text-lg font-semibold text-gray-400">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-purple-500 transition-transform ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                >
                  →
                </span>
              </div>

              {/* MOBILE EXPAND (accordion) */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-[500px] p-4"
                    : "max-h-0"
                }`}
              >
                <img
                  src={project.image}
                  className="rounded-xl mb-3 w-full"
                />

                <div className="flex gap-2 mb-3 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-col gap-2">
                  <button className="bg-purple-600 text-white py-2 rounded-md">
                    Live Demo
                  </button>
                  <button className="border py-2 rounded-md">
                    GitHub
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE (Desktop Only) */}
        <div className="hidden md:block bg-white p-6 rounded-2xl shadow-lg">

          <img
            src={projects[activeIndex].image}
            className="rounded-xl mb-4 w-full"
          />

          <h3 className="text-xl font-bold mb-2">
            {projects[activeIndex].title}
          </h3>

          <div className="flex gap-2 mb-4 flex-wrap">
            {projects[activeIndex].tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-gray-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mb-6">
            {projects[activeIndex].desc}
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full">
              Live Demo
            </button>
            <button className="border px-5 py-2 rounded-full">
              GitHub
            </button>
          </div>

        </div>

      </div>
    </section>
    
    </>
 );
}
export default Project