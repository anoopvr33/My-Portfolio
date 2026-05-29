// components/ProjectsSection.tsx

"use client";

import Image from "next/image";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with Real-Time order (Socket.IO), authentication,deliveryboy track, cart management, payment integration, and admin dashboard.",
    image: "/shop.jpeg",
    github: "https://github.com/yourusername/ecommerce-app",
    techStack: ["React.js", "JavaScript", "Redux", "CSS", "Node.js", "MongoDB"],
  },

  {
    title: "Netflix Clone App",
    description: "Movie Suggestions, Google Auth, JWT authentication,",
    image: "/netclone.jpeg",
    github: "https://github.com/yourusername/chat-app",
    techStack: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
  },

  {
    title: "Houseboat services website",
    description:
      "Modern responsive portfolio website with smooth animations and reusable UI components.",
    image: "/tolake.jpeg",
    github: "https://github.com/yourusername/portfolio",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },

  {
    title: "Hotel ERP System",
    description:
      "REST API , CRUD operations, and role-based access.Redux , pagination for efficient data handling, and  error handling for user experience.Debouce for optimized search and API optimization.",
    image: "/ERP-new.jpeg",
    github: "https://github.com/yourusername/task-manager-api",
    techStack: ["React.js", "Django", "MySql"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="project" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            The projects I’ve built using modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  sizes="100vw"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-3">
                <h2 className=" font-bold mb-4">{project.title}</h2>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-7">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 rounded-full bg-slate-800 text-sm border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
                >
                  <SiGithub className="text-xl" />
                  View Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
