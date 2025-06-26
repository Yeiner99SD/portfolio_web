import { FaBriefcase } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";

interface ExperienceItemProps {
  date: string;
  type: string;
  title: string;
  description: string;
}

const ExperienceItem = ({ date, type, title, description }: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 sm:pl-10 mb-12">
         {/* PUNTO EN LA LÍNEA */}
      <span className="absolute -left-[7px] top-1 w-3 h-3 bg-white rounded-full border-2 border-[#B89F5C]" />
      {/* Icono línea */}
      <div className="absolute left-0 top-1 pl-1.5 text-[#B89F5C]">
        <FaBriefcase size={18} />
      </div>

      {/* Fecha y modalidad */}
      <p className="text-sm text-gray-400 flex flex-wrap items-center gap-2">
        {date}
        <span className="flex items-center gap-1">
          <FaMapPin className="text-red-500" />
          {type}
        </span>
      </p>

      {/* Título */}
      <h3 className="font-bold text-lg sm:text-xl text-white mt-1">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-sm sm:text-base text-gray-300 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ExperienceItem;