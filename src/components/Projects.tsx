"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Paint Services",
    description: "A service booking platform for paint services with a clean UI, theme support, and responsive design for seamless user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/Paint%20Services.png",
    github: "https://github.com/Nafia059/paint-services",
    live: "https://www.royalpainterdubai.com/",
  },
  {
    title: "ISP Management",
    description: "Full-stack ISP management system with API server, user management, and service tracking. Built with TypeScript and deployed on Vercel.",
    tags: ["TypeScript", "Node.js", "Vercel"],
    image: "/images/isp%20network.png",
    github: "https://github.com/Nafia059/isp-management",
    live: "https://isp-management-isp-portal.vercel.app/",
  },
  {
    title: "Catalogue",
    description: "Product catalogue application with API backend, server-side rendering, and modern deployment pipeline.",
    tags: ["TypeScript", "Node.js", "Vercel"],
    image: "/images/catalogue.png",
    github: "https://github.com/Nafia059/catalogue",
    live: "https://catalogue-nine-brown.vercel.app/",
  },
  {
    title: "Institution Management",
    description: "Django-based school management system with role-based dashboards for admins, teachers, students, and parents. Features secure login and academic records.",
    tags: ["Python", "Django", "SQLite"],
    image: "/images/instituition.png",
    github: "https://github.com/Nafia059/tech",
    live: "https://tech-tawny-six.vercel.app",
  },
  {
    title: "Landing Page",
    description: "Modern responsive landing page built with clean HTML and CSS. Focused on layout, typography, and visual hierarchy.",
    tags: ["HTML", "CSS"],
    image: "/images/Landing%20page.png",
    github: "https://github.com/Nafia059/landing-page",
    live: "https://landing-page-liart-six-25.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description: "Weather dashboard application built with Django. Displays weather data with dynamic templates and a clean interface.",
    tags: ["Python", "Django", "HTML"],
    image: "/images/weatherdashboard.png",
    github: "https://github.com/Nafia059/weather_dashboard",
    live: "https://weather-dashboard-plum-xi.vercel.app",
  },
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: 0, y: 0 });
        }}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg) translateZ(20px)`
            : "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)",
          transition: "transform 0.15s ease-out",
        }}
        className="glass rounded-2xl overflow-hidden h-full flex flex-col relative group"
      >
        {/* Glow border on hover */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(14,165,233,0.3), rgba(6,182,212,0.3), rgba(14,165,233,0.3))",
            filter: "blur(8px)",
          }}
        />

        <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent-secondary/10 overflow-hidden rounded-t-2xl">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
              <div className="text-4xl font-bold gradient-text opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
            </div>
          )}

          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Hover action links */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg glass text-xs text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-accent text-xs text-white font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              Live
            </a>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1 relative">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 group-hover:border-accent/40 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
