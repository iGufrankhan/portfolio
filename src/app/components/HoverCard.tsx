"use client";

import { ReactNode, MouseEventHandler } from "react";
import { motion } from "framer-motion";

interface HoverCardProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function HoverCard({ children, onClick }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative cursor-pointer p-6 rounded-xl shadow-md 
                 bg-white dark:bg-gray-800 transition-all"
    >
      {/* ⭐ Blue Hover Gradient Overlay */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none 
                   bg-gradient-to-br from-blue-500/20 to-transparent 
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300"
      />

      {/* ⭐ Actual Card Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
