"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

// Competitive Programming Icons
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

import { fadeIn, scaleIn, fadeInUp } from "@/utils/Animations";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">

          {/* Profile Image */}
          <motion.div
            className="flex justify-center items-center mb-4"
            initial="initial"
            animate="animate"
            variants={scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/gufran.jpg"
              alt="Profile"
              width={160}
              height={160}
              className="rounded-full mb-6 w-60 h-60 object-cover 
              ring-8 ring-primary/70 shadow-[0_0_25px_rgba(0,122,255,0.35)]
              hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

      <motion.div
  className="text-primary font-semibold text-lg mb-6 cursor-pointer"
  animate={{ opacity: [1, 0.3, 1], scale: [1, 1.05, 1] }}
  transition={{
    duration: 1.3,
    repeat: Infinity,
    repeatType: "loop",
  }}
>
  <Link href="/resume">📢 See my resume</Link>
</motion.div>


          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="text-primary"
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.8 }}
            >
              Gufran Khan
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            AI/ML Enthusiast | Backend Developer | Competitive Programmer
          </motion.p>

          {/* ⭐ Social + CP Icons in ONE LINE */}
          <motion.div
            className="flex justify-center space-x-6 mb-12 text-2xl"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
          >
            {/* Social Icons */}
            <IconLink href="https://github.com/iGufrankhan">
              <FaGithub />
            </IconLink>

            <IconLink href="https://www.linkedin.com/in/gufran-khan-1ba346292/">
              <FaLinkedin />
            </IconLink>

            <IconLink href="https://www.youtube.com/@i_am_BackTrack">
              <FaYoutube />
            </IconLink>

            {/* CP Icons */}
            <IconLink href="https://leetcode.com/u/I_am_BackTrack/">
              <SiLeetcode />
            </IconLink>

            <IconLink href="https://codeforces.com/profile/I_am_BackTrack">
              <SiCodeforces />
            </IconLink>

            <IconLink href="https://www.codechef.com/users/codewithgufran">
              <SiCodechef />
            </IconLink>

            <IconLink href="https://www.geeksforgeeks.org/profile/iambacktrack">
              <SiGeeksforgeeks />
            </IconLink>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <ButtonPrimary href="/projects">View Projects</ButtonPrimary>
            <ButtonSecondary href="/contact">Contact Me</ButtonSecondary>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ⭐ Reusable Button Components */
function ButtonPrimary({ children, href }: any) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function ButtonSecondary({ children, href }: any) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="inline-block w-full md:w-auto bg-gray-400/90 dark:bg-gray-700 text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors shadow-md"
      >
        {children}
      </Link>
    </motion.div>
  );
}

/* ⭐ Reusable Social Icon Component */
function IconLink({ children, href }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
}
