import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="text-white px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl text-center text-yellow-400 mb-8">
        Proyectos destacados
      </h2>
      <div className=" grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
