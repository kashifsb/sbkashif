import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, FileText } from "lucide-react";
import { personalInfo } from "../data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-blue/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Terminal-style tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/50 px-4 py-1.5 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-400">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          {personalInfo.name.split(" ").map((word, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 ? (
                <span className="text-gradient">{word}</span>
              ) : (
                word
              )}{" "}
            </span>
          ))}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl font-mono text-slate-400 mb-6"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-medium text-slate-950 hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800/50 hover:text-slate-50 transition-all"
          >
            <FileText size={16} />
            Resume
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-slate-400 hover:text-slate-50 hover:bg-slate-800/50 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-slate-400 hover:text-slate-50 hover:bg-slate-800/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-slate-400 hover:text-slate-50 hover:bg-slate-800/50 transition-all"
            aria-label="X / Twitter"
          >
            <Twitter size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
