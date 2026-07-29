"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    description:
      "Building end-to-end web applications using React, Next.js, Node.js, and modern databases. Focusing on clean architecture and user experience.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    period: "2022 - 2023",
    description:
      "Developed responsive and interactive web interfaces for various clients. Implemented modern UI/UX patterns and optimized performance.",
    technologies: ["HTML/CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    title: "Learning & Growth",
    company: "Self-taught",
    period: "2021 - 2022",
    description:
      "Started the coding journey through online courses and projects. Built a strong foundation in programming fundamentals and web technologies.",
    technologies: ["Python", "JavaScript", "Git", "Linux"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent tracking-widest uppercase mb-3">
            Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent-secondary/50 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative mb-12 ${
                i % 2 === 0
                  ? "md:pr-[calc(50%+2rem)]"
                  : "md:pl-[calc(50%+2rem)]"
              } pl-12 md:pl-0`}
            >
              <div
                className={`absolute left-2 md:left-1/2 top-6 w-4 h-4 rounded-full border-2 border-accent bg-background transform md:-translate-x-1/2 -translate-x-1/2`}
              />

              <div className="glass rounded-2xl p-6 glass-hover transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-zinc-500">{exp.period}</span>
                </div>
                <p className="text-accent text-sm mb-3">{exp.company}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
