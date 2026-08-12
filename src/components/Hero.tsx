"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const roles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Creative Coder",
];

function TypingEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="font-mono text-accent">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle"
      />
    </span>
  );
}

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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* Raw grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[15%] w-px h-full bg-white/[0.04]" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-white/[0.04]" />
        <div className="absolute top-0 left-[85%] w-px h-full bg-white/[0.04]" />
        <div className="absolute top-[33%] left-0 w-full h-px bg-white/[0.04]" />
        <div className="absolute top-[66%] left-0 w-full h-px bg-white/[0.04]" />
      </div>

      {/* Accent block - raw shape */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="absolute top-[18%] right-0 w-[40%] h-16 bg-accent origin-right hidden lg:block"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1600px] mx-auto w-full"
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            Portfolio / 2024
          </span>
        </motion.div>

        {/* Main name - massive brutalist type */}
        <div className="relative mb-6 md:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-[clamp(3.5rem,12vw,11rem)] font-black leading-[0.85] tracking-tighter text-white uppercase"
          >
            Nafia
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-[clamp(3.5rem,12vw,11rem)] font-black leading-[0.85] tracking-tighter text-transparent uppercase [-webkit-text-stroke:2px_rgba(255,255,255,0.2)]"
          >
            Aziz
          </motion.h1>

          {/* Overlapping accent tag */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-2 md:bottom-4 right-4 md:right-12 lg:right-20"
          >
            <div className="bg-accent text-white font-mono text-xs md:text-sm px-4 py-2 uppercase tracking-widest">
              Available for work
            </div>
          </motion.div>
        </div>

        {/* Role typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8 md:mb-10"
        >
          <div className="text-lg sm:text-xl md:text-2xl font-mono h-8">
            <span className="text-zinc-500 mr-2">&gt;</span>
            <TypingEffect />
          </div>
        </motion.div>

        {/* Content grid - asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-14">
          {/* Profile image - left, raw square crop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-3"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 border-2 border-white/10 overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Nafia Aziz"
                width={256}
                height={256}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              {/* Corner marks */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-5 flex flex-col justify-center"
          >
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-md">
              Passionate developer who loves turning ideas into reality through code.
              With a keen eye for design and a focus on clean, maintainable solutions,
              I create digital experiences that make a difference.
            </p>
          </motion.div>

          {/* Stats - right aligned */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="md:col-span-4 flex md:flex-col md:justify-center gap-6 md:gap-4"
          >
            <div className="flex-1 md:border-l-2 md:border-accent md:pl-4">
              <div className="text-3xl md:text-4xl font-black text-white">5+</div>
              <div className="font-mono text-[0.65rem] uppercase tracking-widest text-zinc-600 mt-1">
                Projects Shipped
              </div>
            </div>
            <div className="flex-1 md:border-l-2 md:border-white/10 md:pl-4">
              <div className="text-3xl md:text-4xl font-black text-white">3+</div>
              <div className="font-mono text-[0.65rem] uppercase tracking-widest text-zinc-600 mt-1">
                Tech Stack
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 bg-accent text-white font-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-accent/80 transition-colors"
          >
            View Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 border border-white/10 text-zinc-400 font-mono text-sm uppercase tracking-widest px-8 py-4 hover:border-accent hover:text-white transition-colors"
          >
            Contact
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - raw */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-6 sm:left-10 md:left-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2"
        >
          <div className="w-px h-8 bg-white/20" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-zinc-600 -rotate-90 origin-left translate-y-6">
            Scroll
          </span>
        </motion.div>
      </motion.div>

      {/* Year watermark */}
      <div className="absolute bottom-8 right-6 sm:right-10 md:right-16 font-mono text-[0.6rem] uppercase tracking-widest text-zinc-700">
        &copy; 2024
      </div>
    </section>
  );
}
