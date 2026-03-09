import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { publications } from "../data/content";

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">
            // publications
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Academic work
          </h3>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group rounded-xl border border-slate-800/50 bg-slate-900/30 p-6 hover:border-slate-700/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <BookOpen size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold mb-1 leading-snug">
                    {pub.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs sm:text-sm font-mono text-slate-500">
                      {pub.venue}
                    </span>
                    {pub.year && (
                      <>
                        <span className="text-slate-700">|</span>
                        <span className="text-xs sm:text-sm font-mono text-slate-500">
                          {pub.year}
                        </span>
                      </>
                    )}
                  </div>
                  {pub.doi && (
                    <p className="text-xs font-mono text-slate-600 mb-3">
                      DOI: {pub.doi}
                    </p>
                  )}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-slate-500 hover:text-accent transition-colors"
                    aria-label="View publication"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
