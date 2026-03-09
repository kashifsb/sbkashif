import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, ExternalLink } from "lucide-react";
import { education } from "../data/content";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 sm:py-32 bg-surface/30">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">// education</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Academic background
          </h3>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="rounded-xl border border-slate-800/50 bg-slate-900/50 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg font-semibold">
                      {edu.institution}
                    </h4>
                    {edu.website && (
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-accent transition-colors"
                        aria-label="Institution website"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">
                    {edu.degree} — {edu.field}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <span className="text-xs font-mono text-slate-500">
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-700">|</span>
                    <span className="text-xs font-mono text-slate-500">
                      {edu.location}
                    </span>
                    <span className="text-xs text-slate-700">|</span>
                    <span className="text-xs font-mono text-slate-500">
                      GPA: {edu.grade}
                    </span>
                  </div>
                </div>
              </div>

              {edu.thesis && (
                <div className="mb-5 rounded-lg bg-slate-800/30 px-4 py-3">
                  <p className="text-xs font-mono text-slate-500 mb-1">
                    Thesis
                  </p>
                  <p className="text-sm text-slate-300">{edu.thesis}</p>
                </div>
              )}

              <ul className="space-y-2">
                {edu.highlights.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
