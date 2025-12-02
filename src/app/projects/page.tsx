"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="container max-w-7xl mx-auto py-16 px-4">

      {/* Heading */}
      <div className="text-4xl font-bold mb-4 text-center">
        My Projects
      </div>

      {/* Subtitle */}
      <div className="text-lg text-gray mb-16 text-center max-w-2xl mx-auto">
        Here are some of my recent projects. Click to explore the source code or try the live demo.
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >

           {/* Project Image */}
<div className="aspect-video w-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
  <Image
    src={project.image}
    alt={project.title}
    width={600}
    height={300}
    className="object-contain w-full h-full p-2"
  />
</div>


            {/* Content */}
            <div className="p-6">

              {/* Title */}
              <div className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {project.title}
              </div>

              {/* Description */}
              <div className="text-gray text-sm mb-4">
                {project.description}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>Live Demo</span>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
