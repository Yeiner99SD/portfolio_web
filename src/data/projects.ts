export type Technology =
  | "react"
  | "node"
  | "vue"
  | "tailwind"
  | "firebase";

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
    title: "Cryptos",
    description: "Login de criptomonedas",
    stack: ["react", "tailwind", "node"],
    image: "/cryptos.png",
    visit: "https://mi-proyecto.com",
    code: "https://github.com/usuario/cryptos",
  },
  {
    id: 2,
    title: "Dashboard",
    description: "Panel administrativo",
    stack: ["vue", "firebase"],
    image: "/dashboard.png",
    code: "https://github.com/usuario/dashboard",
  },
];
