"use client";
import React from "react";
import { blogs } from "@/contents/blogs";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="container py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Blogs
      </h2>

      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          className="relative bg-white dark:bg-dark/40 backdrop-blur-xl 
                     border border-white/10 rounded-xl shadow-lg overflow-hidden 
                     flex flex-col md:flex-row mb-10 transition-all duration-300"
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 35px rgba(0,0,0,0.25)",
            y: -5,
          }}
        >
          <div className="p-6 md:p-8">


            {/* TITLE */}
            <h2
              
              className="text-2xl font-semibold hover:text-primary transition-colors"
            >
              {blog.title}
            </h2>

            {/* EXCERPT */}
            <p className="text-gray-600 dark:text-gray-300 mt-3 mb-6 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* META INFO */}
            <div className="flex items-center justify-between mb-3 text-sm text-gray-500 dark:text-gray-400">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>

            {/* READ MORE */}
            <a
              href={blog.url}
              target="_blank"
              className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
            >
              Read More →
            </a>
          </div>

          {/* GRADIENT BORDER EFFECT */}
          <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent 
                          bg-gradient-to-br from-primary/20 to-transparent opacity-0 hover:opacity-20 transition-opacity">
          </div>

        </motion.div>
      ))}
    </div>
  );
}
