import { FaGithub, FaGlobe, FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import type { Project } from "../data/projects";
import type { JSX } from "react";

interface Props {
  project: Project;
}

// mapa de tecnologías a íconos
const techIcons: Record<Project["stack"][number], JSX.Element> = {
  react: <FaReact className="text-cyan-400 text-lg" />,
  node: <FaNodeJs className="text-green-500 text-lg" />,
  vue: <FaVuejs className="text-green-400 text-lg" />,
  tailwind: <SiTailwindcss className="text-sky-400 text-lg" />,
  firebase: <SiFirebase className="text-yellow-400 text-lg" />,
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-xl overflow-hidden shadow-md">
      {/* Imagen + Hover */}
      <div className="relative group">
        {/* Imagen */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:opacity-0 transition duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 p-4 flex flex-col justify-center text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm mt-2">{project.description}</p>
          <div className="flex gap-3 mt-3">
            {project.stack.map((tech) => (
              <span key={tech} title={tech}>
                {techIcons[tech]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Botones */}
      <div className="flex justify-around bg-indigo-950 text-white py-2">
        {project.visit && (
          <a
            href={project.visit}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-yellow-400"
          >
            Ir <FaGlobe />
          </a>
        )}
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-yellow-400"
        >
          Código <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
