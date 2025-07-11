import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ButtonCta from "./ButtonCta";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Evita el scroll del body cuando el menú móvil está abierto
  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return next;
    });
  } 

  // Limpia el overflow si el componente se desmonta con el menú abierto
  // o si el usuario navega y el menú queda abierto
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header className="fixed w-full text-white py-6 px-6 z-50 bg-transparent backdrop-blur-md">
      <nav className="max-w-6xl font-medium text-[20px] mx-auto flex justify-center items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 justify-center items-center">
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-400 transition-colors"
            >
              Servicios
            </a>
          </li>
          <li>
            <ButtonCta
              text="Contacto"
              href="#contact"
              scroll={true}
              className="font-semibold hover:scale-110 shadow"
            />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer text-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-6 min-h-screen slide-down">
  <ul className="flex flex-col items-center py-4 space-y-6 text-3xl">
    <li>
      <a
        href="#projects"
        className="hover:text-blue-400 transition-colors"
        onClick={toggleMenu}
      >
        Proyectos
      </a>
    </li>
    <li>
      <a
        href="#experience"
        className="hover:text-blue-400 transition-colors"
        onClick={toggleMenu}
      >
        Experiencia
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="hover:text-blue-400 transition-colors"
        onClick={toggleMenu}
      >
        Servicios
      </a>
    </li>
    <li>
      <ButtonCta
        text="Contacto"
        href="#contact"
        scroll={true}
        className="font-semibold hover:scale-110 shadow"
      />
    </li>
  </ul>

  {/* Redes sociales debajo del menú */}
  <div className="flex space-x-6 mt-8 text-2xl">
    <a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-125 hover:text-blue-400 transition-transform duration-300"
    >
      <FaGithub />
    </a>
    <a
      href="https://linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-125 hover:text-blue-400  transition-transform duration-300"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-125 hover:text-blue-400  transition-transform duration-300"
    >
      <FaFacebook />
    </a>
    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-125 hover:text-blue-400  transition-transform duration-300"
    >
      <FaInstagram />
    </a>
  </div>
</div>

      )}
    </header>
  );
};

export default Header;
