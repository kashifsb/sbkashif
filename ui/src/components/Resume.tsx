import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router";

const CV_PATH = "/cv/baleeghuddin_europass_cv.pdf";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Top bar */}
      <div className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-50 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <a
            href="/cv/baleeghuddin_europass_cv.pdf"
            download="Shaik_Baleeghuddin_Kashif_CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-blue px-5 py-2.5 text-sm font-medium text-slate-950 hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>

      {/* PDF viewer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 flex flex-col items-center px-4 py-6 sm:px-6 sm:py-8"
      >
        <div className="w-full max-w-4xl flex-1 rounded-xl border border-slate-800/50 overflow-hidden bg-slate-900/30">
          <object
            data={CV_PATH}
            type="application/pdf"
            className="w-full h-[calc(100vh-10rem)]"
          >
            {/* Fallback for browsers that can't render PDF inline */}
            <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] gap-6 p-8 text-center">
              <p className="text-slate-400">
                Unable to display PDF in this browser.
              </p>
              <a
                href="/cv/baleeghuddin_europass_cv.pdf"
            download="Shaik_Baleeghuddin_Kashif_CV.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-blue px-6 py-3 text-sm font-medium text-slate-950 hover:opacity-90 transition-opacity"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </object>
        </div>
      </motion.div>
    </div>
  );
}
