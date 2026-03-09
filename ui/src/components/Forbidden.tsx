import { motion } from "framer-motion";
import { ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router";

export default function Forbidden() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-grid px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-800/50 bg-surface/50">
            <Lock size={28} className="text-accent" />
          </div>
        </div>

        <h1 className="text-7xl sm:text-8xl font-bold text-gradient mb-4">
          403
        </h1>
        <p className="font-mono text-slate-400 mb-2">
          $ access {window.location.pathname}
        </p>
        <p className="font-mono text-sm text-slate-600 mb-8">
          Forbidden — you don't have permission to access this resource.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-medium text-slate-950 hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
