import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { experiences } from "../data/content";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32 bg-surface/30">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">// experience</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Where I work
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-slate-800 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex shrink-0 items-start pt-1">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900">
                    <Briefcase size={16} className="text-accent" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-xl border border-slate-800/50 bg-slate-900/50 p-6 hover:border-slate-700/50 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-lg font-semibold">{exp.company}</h4>
                    {exp.via && (
                      <span className="text-xs font-mono text-slate-500">
                        via {exp.via}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm text-accent font-medium">
                      {exp.role}
                    </span>
                    <span className="text-xs text-slate-700">|</span>
                    <span className="text-xs font-mono text-slate-500">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-700">|</span>
                    <span className="text-xs font-mono text-slate-500">
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-mono text-slate-400"
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
      </div>
    </section>
  );
}
