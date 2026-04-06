import { Palette, Code, Brain, Server } from "lucide-react";

function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "Building responsive and interactive user interfaces using React and Tailwind CSS.",
      icon: <Palette size={28} />,
    },
    {
      title: "Python & AI Development",
      desc: "Building intelligent solutions using Python and exploring machine learning and AI concepts.",
      icon: <Brain size={28} />,
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Practicing DSA to strengthen problem-solving skills and writing optimized code.",
      icon: <Code size={28} />,
    },
    {
      title: "Java & Backend Development",
      desc: "Developing backend applications and APIs using Java and Spring Boot.",
      icon: <Server size={28} />,
    },
  ];

  return (
    <section className="bg-[var(--bg)] px-4 sm:px-6 md:px-12 lg:px-20 py-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-[var(--primary-color)] font-semibold">
          My Expertise
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)] mt-2">
          Skills I’m Building & Improving
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, index) => (
          
          //  OUTER DIV → AOS animation
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            
            {/* INNER DIV → hover + tilt */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left shadow-md transition duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1">
              
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gray-100 text-[var(--secondary-color)] hover:translate-y-2 hover:scale-105">
                {service.icon}
              </div>

              {/* Content */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[var(--text)]">
                  {service.title}
                </h2>
                <p className="text-[var(--muted)] mt-2 text-sm sm:text-base">
                  {service.desc}
                </p>

                <a
                  href="#"
                  className="text-[var(--primary-color)] font-semibold mt-3 inline-block"
                >
                  Read More
                </a>
              </div>

            </div>
          </div>

        ))}
      </div>
    </section>
  );
}

export default Services;