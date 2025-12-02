"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="py-16 container mx-auto max-w-4xl px-4">

      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Resume
      </motion.h1>

      {/* Resume PDF Viewer */}
      <motion.embed
        src="/resume.pdf"
        type="application/pdf"
        className="w-full h-[700px] border-2 border-gray-300 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        
        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
        >
          Download Resume
        </a>

        {/* Open in New Tab */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition"
        >
          Open PDF
        </a>

        {/* Back Button */}
        <Link
          href="/"
          className="bg-gray-300 px-6 py-3 rounded-lg shadow hover:bg-gray-400 transition"
        >
          Back to Home
        </Link>
      </div>

    </section>
  );
}
