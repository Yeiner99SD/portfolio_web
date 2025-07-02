import { FaPaintBrush, FaSearch, FaTools } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

export const services: Service[] = [
  {
    title: "Design Web",
    description: "Modern, responsive, and tailored design for your business.",
    icon: FaPaintBrush,
  },
  {
    title: "Deployment and SEO Optimization",
    description: "Deploy your site online with a custom domain and optimized for search engines.",
    icon: FaSearch,
  },
  {
    title: "Web maintenance",
    description: "Address issues or bugs on your website with a 20-day resolution guarantee.",
    icon: FaTools,
  },
];