'use client'

import React from 'react'
import { FaCode, FaLaptopCode, FaDatabase, FaBrain, FaTools } from 'react-icons/fa'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        About Me
      </h1>

      {/* Bio */}
      <section className="mb-16">
        <p className="text-lg text-gray max-w-3xl mx-auto text-center leading-relaxed">
          I&apos;m <span className="text-primary font-semibold">Gufran Khan</span>, a 
          backend developer and AI/ML enthusiast passionate about building scalable web 
          applications, intelligent machine learning systems, and cloud-powered solutions. 
          I love working with Python, Machine Learning, NLP, Data Analysis, and modern backend 
          technologies to create impactful real-world applications.
        </p>
      </section>

      {/* =============================== */}
      {/* SKILLS SECTION WITH ICONS       */}
      {/* =============================== */}

      <section className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Frontend */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <ul className="text-gray space-y-2 text-center">
              <li>HTML / CSS / JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-3">Backend</h3>
            <ul className="text-gray space-y-2 text-center">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST API Development</li>
              <li>Authentication & JWT</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaDatabase className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-3">Databases</h3>
            <ul className="text-gray space-y-2 text-center">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
            </ul>
          </div>

          {/* Deep Learning */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaBrain className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-3">Deep Learning</h3>
            <ul className="text-gray space-y-2 text-center">
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>CNN</li>
              <li>RNN</li>
            </ul>
          </div>

          {/* Machine Learning */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaBrain className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-3">Machine Learning & Data Science</h3>
            <ul className="text-gray space-y-2 text-center">
              <li>Scikit-Learn</li>
              <li>Pandas / NumPy</li>
              <li>Matplotlib / Seaborn</li>
              <li>Data Cleaning & Model Evaluation</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaTools className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-3">Tools & Platforms</h3>
            <ul className="text-gray space-y-2 text-center">
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Jupyter Notebook</li>
            </ul>
          </div>

        </div>
      </section>

      {/* =============================== */}
      {/* EXPERIENCE SECTION              */}
      {/* =============================== */}

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Experience</h2>

        <div className="max-w-4xl mx-auto space-y-10">

          {/* AI & Cloud Internship */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <img 
                src="/projects/edunet.png"
                alt="Edunet Foundation"
                className="h-12 w-12 rounded-md object-contain"
              />

              <div>
                <h3 className="text-xl font-semibold">AI & Cloud</h3>
                <p className="text-primary">Edunet Foundation · Internship</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jul 2025 – Aug 2025 · 2 months · Remote
                </p>
              </div>
            </div>

            <p className="text-gray mt-4 leading-relaxed">
              Gained hands-on experience in AI, ML, Data Analytics, and Cloud Computing using IBM Cloud. 
              Worked on chatbot development, AutoAI experiments, Watson NLP tools and completed a 
              final project certified by IBM & AICTE.
            </p>

            <p className="font-semibold mt-4">
              Cloud Computing (IBM Cloud) & Chatbot Development
            </p>
          </div>

          {/* CDAC Internship */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <img 
                src="/projects/cdac.jpeg"
                alt="CDAC Noida"
                className="h-12 w-12 object-contain rounded-md"
              />

              <div>
                <h3 className="text-xl font-semibold">Machine Learning Intern</h3>
                <p className="text-primary">CDAC Noida · Internship</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jun 2025 – Jul 2025 · 2 months · Remote
                </p>
              </div>
            </div>

            <p className="text-gray mt-4 leading-relaxed">
              Built a CNN-based system to detect manipulated facial images using Python, 
              OpenCV, and TensorFlow. Worked on image forensics, media tampering detection, 
              and cybersecurity fundamentals.
            </p>
          </div>

        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Education</h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">B.Tech – Information Technology</h3>
            <p className="text-primary mb-2">Birsa Institute of Technology, Sindri</p>
            <p className="text-gray">
              CGPA: 8.9/10 — Coursework: DSA, OS, CN, DBMS, AI, ML, Image Processing.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
