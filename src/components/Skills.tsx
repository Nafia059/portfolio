"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "Express", level: 72 },
      { name: "MongoDB", level: 68 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
  {
    title: "Tools & More",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 65 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass rounded-2xl p-6 glass-hover transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.15 + skillIdx * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
