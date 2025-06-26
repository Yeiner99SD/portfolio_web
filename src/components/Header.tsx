import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ButtonCta from "./ButtonCta";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full text-white py-4 px-6 z-50 bg-transparent backdrop-blur-md">
      <nav className="max-w-6xl font-medium text-[20px] mx-auto flex justify-center items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 justify-center items-center">
          <li>
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors "
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
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Proyectos
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
        <div className="md:hidden flex items-center justify-center  min-h-screen slide-down">
          <ul className="flex flex-col justify-center items-center py-4 space-y-4">
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
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors"
                onClick={toggleMenu}
              >
                Proyectos
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
        </div>
      )}
    </header>
  );
};

export default Header;
