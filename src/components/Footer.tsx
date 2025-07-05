// src/components/Footer.tsx

import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-slate-200 text-center py-6 px-4">
      <hr className="border-t border-white/30 mb-4" />
      <p className="text-sm md:text-base font-light">
        © 2025 Yéiner Jesús Navarro Moreno. Todos los derechos reservados.
      </p>
      <div className="flex justify-center gap-6 mt-4 text-2xl">
        <a
          href="yeinermoreno2005@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
          aria-label="Correo electrónico"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/573218080177?text=%C2%A1Hola!%20Te%20contacto%20desde%20tu%20portafolio.%20%C2%BFPodemos%20hablar%20sobre%20un%20posible%20proyecto%20juntos%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
