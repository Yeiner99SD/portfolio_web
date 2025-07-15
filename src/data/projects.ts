export type Technology =
  | "react"
  | "angular"
  | "astro"
  | "tailwind"
  | "springboot"
  | "firebase"
  | "sql";

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: Technology[];
  image: string;
  visit?: string; // opcional
  code: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Web de Calusajo",
    description: "Pagina web para sitio de eventos y decoraciones",
    stack: ["astro", "tailwind", ],
    image: "/21shots_so.webp",
    visit: "https://calusajoeventosydecoraciones.com",
    code: "https://github.com/Yeiner99SD/Calusajo-web-oficial",
  },
  {
    id: 2,
    title: "Web del Rancho Mariana ",
    description: "Pagina de practica para un criadero de caballos",
    stack: ["angular", "tailwind"],
    image: "/606shots_so.webp",
    visit: "https://criadero-rancho-mariana-web.vercel.app/home",
    code: "https://github.com/Yeiner99SD/criadero-rancho-mariana-web",
  },
  {
    id: 3,
    title: "SIGESME - agendandor de citas",  
    description: "Proyecto de gestion de citas para centros de salud",
    stack: ["angular",  "tailwind", "springboot", "sql"],
    image: "/725shots_so.webp",
    code: "https://github.com/Drivas04/INNOVALIFERepository/tree/master",
  }
];
