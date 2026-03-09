import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "../data/content";
import {
  Code2,
  Server,
  GitBranch,
  Database,
  Cloud,
  Wrench,
  Monitor,
} from "lucide-react";

const categoryIcons: Record<string, typeof Code2> = {
  "Languages & Frameworks": Code2,
  "Infrastructure & DevOps": Server,
  "Cloud & Containers": Cloud,
  Databases: Database,
  "Tools & Platforms": Wrench,
  "Operating Systems": Monitor,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 bg-surface/30">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">// skills</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Tech stack</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = categoryIcons[cat.category] || GitBranch;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold">{cat.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-md bg-slate-800/80 px-2.5 py-1.5 text-xs font-mono text-slate-400"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
