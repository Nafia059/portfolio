"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
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
    <span className="gradient-text font-medium">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle"
      />
    </span>
  );
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1,
      })),
    []
  );

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
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
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh background */}
      <div className="hero-mesh" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Floating orbs */}
      <motion.div
        className="floating-orb w-[500px] h-[500px] bg-accent/15 -top-40 -left-40"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-orb w-[400px] h-[400px] bg-accent-secondary/10 bottom-20 -right-32"
        animate={{
          scale: [1, 0.8, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-orb w-[300px] h-[300px] bg-sky-400/10 top-1/3 right-1/4"
        animate={{
          scale: [0.8, 1.2, 0.8],
          x: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Particles */}
      <Particles />

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 px-4 sm:px-6 max-w-6xl mx-auto w-full py-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bento-grid"
        >
          {/* Main Profile Card - Large */}
          <motion.div
            variants={cardVariants}
            className="bento-card glass p-6 sm:p-8 flex flex-col items-center justify-center text-center row-span-2 min-h-[320px] sm:min-h-[420px]"
          >
            {/* Animated rotating ring around profile */}
            <div className="relative mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-accent/15 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-7 rounded-full border border-accent-secondary/8"
              />

              <div className="profile-ring w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full">
                <div className="relative w-full h-full rounded-full overflow-hidden glass p-[3px] glow-strong">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/30 to-accent-secondary/30 overflow-hidden">
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
              </div>

              {/* Ambient glow blobs */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/15 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-accent-secondary/15 rounded-full blur-2xl"
              />
            </div>

            {/* Name with glitch effect */}
            <div className="glitch-wrapper mb-2">
              <h1
                className="glitch text-3xl sm:text-4xl md:text-5xl font-bold gradient-text"
                data-text="Nafia Aziz"
              >
                Nafia Aziz
              </h1>
            </div>

            <div className="text-base sm:text-lg md:text-xl h-7 sm:h-8">
              <TypingEffect />
            </div>
          </motion.div>

          {/* Role & Bio Card */}
          <motion.div
            variants={cardVariants}
            className="bento-card glass p-5 sm:p-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-zinc-500">
                About Me
              </span>
            </div>
            <p className="text-sm sm:text-[0.9rem] text-zinc-400 leading-relaxed">
              Passionate developer who loves turning ideas into reality through code.
              With a keen eye for design and a focus on clean, maintainable solutions,
              I create digital experiences that make a difference.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={cardVariants}
            className="bento-card glass p-4 sm:p-5 flex items-center gap-4"
          >
            <div className="stat-card flex-1 text-center p-3 rounded-xl bg-white/[0.02]">
              <div className="text-xl sm:text-2xl font-bold gradient-text">5+</div>
              <div className="text-[0.65rem] sm:text-xs text-zinc-500 mt-1">Projects</div>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <div className="stat-card flex-1 text-center p-3 rounded-xl bg-white/[0.02]">
              <div className="text-xl sm:text-2xl font-bold gradient-text">3+</div>
              <div className="text-[0.65rem] sm:text-xs text-zinc-500 mt-1">Tech Stack</div>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <div className="stat-card flex-1 text-center p-3 rounded-xl bg-white/[0.02]">
              <div className="text-xl sm:text-2xl font-bold gradient-text">100%</div>
              <div className="text-[0.65rem] sm:text-xs text-zinc-500 mt-1">Dedication</div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 sm:mt-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(14,165,233,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-all duration-300 glow-strong text-center"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-xl glass glass-hover text-white font-medium text-sm text-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-2"
          >
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-600">
              Scroll
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
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
