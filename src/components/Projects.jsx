import { BiLink } from "react-icons/bi";
import { projects } from "../data";

function Projects() {
  return (
    <section className="w-full flex flex-col items-center my-1" id="projects">
      <div className="w-full bg-[#181e2a] rounded-2xl shadow-2xl p-8 md:p-12">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">Projects</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-12px)] p-5 flex flex-col gap-3 bg-white/5 border-l-4 border-blue-600 rounded-xl shadow-lg hover:shadow-2xl transition duration-200 hover:scale-[1.02] group"
            >
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-white">{project.name}</div>
                {project.isOnGithub && (
                  <a
                    href={project.ghUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-80 group-hover:opacity-100"
                  >
                    <BiLink className="text-2xl text-blue-300 hover:text-blue-500 transition" />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600/80 text-white px-2 py-0.5 rounded font-semibold tracking-wide shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-gray-200 mt-1 line-clamp-3 text-base">
                {project.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
