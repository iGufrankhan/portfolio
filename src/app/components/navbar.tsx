"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Load Theme
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/achievements", label: "Achievements" },
    { href: "/contact", label: "Contact Me" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 dark:bg-gray-950/40 backdrop-blur-2xl 
      border-b border-white/20 dark:border-gray-800/30 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
      
            <Link href="/" className="text-xl font-bold text-primary">
              Gufranfolio.&trade;
            </Link>
           
      

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition group 
                ${active ? "text-blue-600 dark:text-cyan-400" : "text-gray-700 dark:text-gray-300"}`}
              >
                {item.label}
                {/* Underline Animation */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 
                    transition-all rounded-full 
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md 
            transition-all"
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-600" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-7 w-7 text-gray-700 dark:text-gray-200" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-gray-700 dark:text-gray-200" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl 
            border-t border-gray-300/20 dark:border-gray-700/20 shadow-lg"
          >
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg text-gray-700 dark:text-gray-300 font-semibold 
                    hover:text-blue-600 dark:hover:text-cyan-400 transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Theme Switch for Mobile */}
              <div className="border-t border-gray-300 dark:border-gray-700 pt-3">
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-lg
                  hover:text-blue-600 dark:hover:text-cyan-400 transition"
                >
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="h-6 w-6 text-yellow-400" /> Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-6 w-6 text-blue-600" /> Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
