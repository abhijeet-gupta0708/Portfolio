function Projects2() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "A fully responsive online store with cart and payment integration.",
      tech: ["React", "Tailwind", "Node.js"],
      live: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React and Tailwind CSS.",
      tech: ["React", "Tailwind"],
      live: "#",
      github: "#"
    },
    {
      title: "DSA Visualizer",
      desc: "Visual tool to understand sorting and searching algorithms.",
      tech: ["JavaScript", "CSS"],
      live: "#",
      github: "#"
    },
    {
      title: "Chat Application",
      desc: "Real-time chat app with rooms and user authentication.",
      tech: ["React", "Firebase"],
      live: "#",
      github: "#"
    }
  ]

  return (
    <div className="px-20 py-16" style={{backgroundColor: 'var(--bg)'}}>
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <p className="text-lg font-semibold" style={{color: 'var(--primary-color)'}}>My Work</p>
        <h2 className="text-4xl font-bold mt-2" style={{color: 'var(--forth-color)'}}>Projects I've Built</h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            
            {/* TITLE */}
            <h3 className="text-xl font-bold" style={{color: 'var(--forth-color)'}}>{project.title}</h3>
            
            {/* DESCRIPTION */}
            <p className="text-sm" style={{color: 'var(--muted)'}}>{project.desc}</p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full" 
                  style={{backgroundColor: 'var(--bg)', color: 'var(--secondary-color)', border: '1px solid var(--secondary-color)'}}>
                  {t}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-6 mt-2">
              <a href={project.live} className="text-sm font-semibold" style={{color: 'var(--primary-color)'}}>Live Demo</a>
              <a href={project.github} className="text-sm font-semibold" style={{color: 'var(--secondary-color)'}}>GitHub</a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects2