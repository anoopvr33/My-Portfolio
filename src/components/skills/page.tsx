// components/SkillsSection.tsx

"use client";

import { SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

const skills = {
  languages: ["JavaScript", "TypeScript"],

  frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Framer Motion",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "REST API",
    "Mongoose",
    "JWT",
    "Socket.IO",
    "OAuth 2.0",
  ],

  database: ["MongoDB"],

  tools: ["Git", "GitHub", "Postman", "VS Code", "Figma"],

  deployment: ["AWS", "NGINX", "Vercel", "Hostinger", "Ubuntu", "PM2"],
};

const projects = [
  {
    title: "E-Commerce App",
    link: "https://github.com/yourusername/ecommerce-app",
  },
  {
    title: "Chat Application",
    link: "https://github.com/yourusername/chat-app",
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Manager API",
    link: "https://github.com/yourusername/task-manager-api",
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-slate-950 text-white py-20  px-3">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Skills & Technologies
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left Side - Text Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">Languages</h3>

              <p className="text-slate-300 leading-relaxed">
                {skills.languages.join(" • ")}
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">Frontend</h3>

              <p className="text-slate-300 leading-relaxed">
                {skills.frontend.join(" • ")}
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">Backend</h3>

              <p className="text-slate-300 leading-relaxed">
                {skills.backend.join(" • ")}
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">Database</h3>

              <p className="text-slate-300 leading-relaxed">
                {skills.database.join(" • ")}
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">
                Tools & Platforms
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {skills.tools.join(" • ")}
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-3">
                Deployment & DevOps
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {skills.deployment.join(" • ")}
              </p>
            </div>
          </div>

          {/* Right Side - Icons */}
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-40 h-40 flex flex-col items-center justify-center hover:border-cyan-400 transition">
                <SiReact className="text-6xl text-cyan-400" />
                <p className="mt-4 text-lg font-medium">React</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-40 h-40 flex flex-col items-center justify-center hover:border-cyan-400 transition">
                <SiNodedotjs className="text-6xl text-green-500" />
                <p className="mt-4 text-lg font-medium">Node.js</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-40 h-40 flex flex-col items-center justify-center hover:border-cyan-400 transition">
                <SiExpress className="text-6xl text-white" />
                <p className="mt-4 text-lg font-medium">Express</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-40 h-40 flex flex-col items-center justify-center hover:border-cyan-400 transition">
                <SiMongodb className="text-6xl text-green-400" />
                <p className="mt-4 text-lg font-medium">MongoDB</p>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Projects */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center">
            GitHub Projects
          </h3>

          <div className="flex flex-wrap justify-center gap-5">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                {project.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
