import { FaPaintBrush, FaSearch, FaTools } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

export const services: Service[] = [
  {
    title: "Diseño Web",
    description: "Diseño moderno, responsivo y personalizado para tu negocio.",
    icon: FaPaintBrush,
  },
  {
    title: "Despliegue y Optimización SEO",
    description: "Publica tu sitio en línea con dominio propio y optimizado para motores de búsqueda.",
    icon: FaSearch,
  },
  {
    title: "Mantenimiento Web",
    description: "Soluciona problemas o errores en tu sitio web con garantía de resolución en 20 días.",
    icon: FaTools,
  },
];