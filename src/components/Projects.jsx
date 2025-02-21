import React from "react";
import { BiLink } from "react-icons/bi";
import { projects } from "../data";

function Projects() {
  return (
    <div className="flex flex-col gap-y-4 w-full p-4 sm:p-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-xl" id="projects">

      <div className="text-2xl sm:text-3xl text-white font-semibold tracking-wide text-center mb-6">
        Projects
      </div>

      <div className="">
        <div className="flex flex-wrap gap-4 sm:gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="md:w-[calc(50%-12px)] w-full p-4 md:p-5 flex flex-col gap-y-3 shadow-lg rounded-xl bg-white/10 text-white transition-transform hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold cursor-pointer">
                  {project.name}
                </div>
                {project.isOnGithub && (
                  <a href={project.ghUrl} target="_blank" className="">
                    <BiLink className="text-xl leading-none" />
                  </a>
                )}
              </div>

              <div className="text-blue-600 flex flex-wrap gap-1 text-sm">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 px-2 py-0.5 rounded-md text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="overflow-hidden text-gray-200 text line-clamp-3">
                {project.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
