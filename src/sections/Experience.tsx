import ExperienceItem from "../components/ExperienceItem";
import { experienceData } from "../data/experienceData";

const Experience = () => {
  return (
    <section id="experience" className="py-6 px-4  text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">
        Mi experiencia 
      </h2>
      <div className="relative border-l-2 border-white/30 max-w-3xl mx-auto">
        {experienceData.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;