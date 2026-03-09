import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "../data/content";
import { Terminal, Server, Cog, Shield } from "lucide-react";

const icons = [Terminal, Server, Cog, Shield];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">// about</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Building reliable systems
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Photo + highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Photo */}
            <div className="border-gradient rounded-2xl overflow-hidden w-full max-w-[280px] mx-auto lg:mx-0">
              <img
                src="/images/kashif.webp"
                alt="Shaik Baleeghuddin Kashif"
                className="w-full aspect-square object-cover object-top rounded-2xl"
                loading="lazy"
              />
            </div>

          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 lg:pt-1"
          >
            {about.summary.map((paragraph, i) => (
              <p key={i} className="text-slate-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Highlight cards - single row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
        >
          {about.highlights.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-slate-800/50 bg-surface/50 px-4 py-3.5 hover:border-slate-700/50 transition-colors"
              >
                <Icon size={18} className="text-accent shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-slate-500 leading-tight">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-slate-200 leading-tight">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
