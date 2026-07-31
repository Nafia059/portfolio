"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="floating-orb w-72 h-72 bg-accent/20 top-20 -left-20 animate-float" />
      <div className="floating-orb w-96 h-96 bg-accent-secondary/15 bottom-20 -right-32 animate-float-delayed" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-6 max-w-6xl mx-auto w-full"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative shrink-0"
          >
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden glass p-1 glow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/30 to-accent-secondary/30 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Nafia Aziz"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-accent/15 rounded-full blur-xl" />
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-accent-secondary/15 rounded-full blur-xl" />
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-zinc-500 tracking-widest uppercase mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Nafia Aziz</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-zinc-400 mb-4 max-w-xl leading-relaxed"
            >
              Developer & Creative crafting beautiful digital experiences
              with clean code and thoughtful design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm text-zinc-500 mb-8 max-w-xl leading-relaxed"
            >
              I&apos;m a passionate developer who loves turning ideas into reality through code.
              With a keen eye for design and a focus on clean, maintainable solutions,
              I create digital experiences that make a difference. Always learning, always building.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors glow"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl glass glass-hover text-white font-medium text-sm"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-600"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
