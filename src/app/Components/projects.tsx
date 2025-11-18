import React from "react";
import { projects } from "@/contents/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              
            <div className="w-full h-56 overflow-hidden rounded-lg">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
  />
</div>


              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>

              {/* Description */}
              <p className="mt-2 text-white-200">{project.description}</p>

              {/* Technologies */}
              <h4 className="mt-4 font-medium">Technologies:</h4>
              <div className="flex flex-wrap gap-2 mb-2 mt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="py-1 px-3 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links (simple div, motion removed) */}
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Code</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
