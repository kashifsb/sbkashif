import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/content";

const links = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    value: personalInfo.email,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
    value: "github.com/kashifsb",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
    value: "linkedin.com/in/baleegh-ud-din",
  },
  {
    label: "X / Twitter",
    href: personalInfo.twitter,
    icon: Twitter,
    value: "x.com/baleeghuddin",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32 bg-surface/30">
      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">// contact</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's connect
          </h3>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto">
            Interested in working together or have a question? Feel free to
            reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-3 rounded-xl border border-slate-800/50 bg-slate-900/30 p-6 hover:border-slate-700/50 hover:bg-slate-900/60 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <span className="text-sm font-medium">{link.label}</span>
                <span className="flex items-center gap-1 text-xs text-slate-500 group-hover:text-slate-400 transition-colors break-all text-center">
                  {link.value}
                  <ArrowUpRight
                    size={12}
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
