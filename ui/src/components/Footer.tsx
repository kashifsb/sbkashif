import { personalInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-600 font-mono">
          {new Date().getFullYear()} {personalInfo.shortName}
        </p>
        <p className="text-xs text-slate-700 font-mono">
          Built with Go + React + TypeScript
        </p>
      </div>
    </footer>
  );
}
