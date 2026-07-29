"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            A little bit about <span className="gradient-text">myself</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 glow">
              <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center overflow-hidden">
                <div className="text-6xl md:text-8xl opacity-30 gradient-text font-bold">
                  NA
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-zinc-400 leading-relaxed">
              I&apos;m a passionate developer who loves turning ideas into reality through code.
              With a keen eye for design and a focus on clean, maintainable solutions,
              I create digital experiences that make a difference.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or learning something new.
              I believe in continuous growth and pushing the boundaries of what&apos;s possible.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Years of Learning", value: "3+" },
                { label: "Projects Built", value: "10+" },
                { label: "Technologies", value: "15+" },
                { label: "Cups of Coffee", value: "∞" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 text-center glass-hover transition-all duration-300"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
