// Hero.tsx

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ButtonCta from "../components/ButtonCta";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:px-32 xl:grid-cols-2 h-screen pt-14">
      <div className="flex justify-center items-center lg:h-[85vh] px-5 pt-7">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
            Hola, soy <span className="text-blue-500">Yeiner Navarro</span>
          </h1>
          <h2 className="my-5 font-light leading-6 md:leading-8 text-[1.2em] md:text-[1.5em]">
            !Bienvenido a mi sitio web !
            <br />
            Soy desarrollador web full stack, especializado en crear
            experiencias digitales únicas. Tanto como para empresas u
            emprendedores. Habla conmigo y has crecer tu negocio.
          </h2>
          <ButtonCta
            text="🚀 Trabajemos juntos! "
            isRoundedFull={true}
            className="hover:scale-110 shadow"
          />
        </div>
      </div>

      <div className="hidden lg:block xl:block">
        <div className="flex flex-col justify-center items-center text-center lg:h-[85vh] relative">
          {/* Fondo estrellado */}
          <div className="absolute inset-0">
            {/* Estrellas generadas */}
            <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full opacity-80"></div>
            <div className="absolute top-32 right-16 w-1 h-1 bg-white rounded-full opacity-60"></div>
            <div className="absolute top-20 right-32 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-40 left-16 w-1 h-1 bg-white rounded-full opacity-90"></div>
            <div className="absolute bottom-60 right-20 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
            <div className="absolute top-40 left-1/3 w-1 h-1 bg-white rounded-full opacity-75"></div>
            <div className="absolute bottom-32 right-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-65"></div>
            <div className="absolute top-60 right-1/4 w-1 h-1 bg-white rounded-full opacity-80"></div>
          </div>

          {/* Contenido del perfil */}
          <div className="relative z-10 flex flex-col items-center space-y-6">
            {/* Foto de perfil con borde circular */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-800 p-1">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R1lfelta:"
                  className="w-full h-full rounded-full overflow-hidden bg-gray-200"
                >
                  <img
                    src="/fotoperfil.webp"
                    alt="Foto de Yeiner Navarro"
                    loading="lazy"
                    width="320"
                    height="320"
                    className="w-full h-full object-cover rounded-full"
                  />
                </button>
              </div>
            </div>

            {/* Información del perfil */}
            <div className="text-center text-white space-y-2">
              <h2 className="text-2xl font-semibold">
                By <span className="font-bold">Yeiner Navarro</span>
              </h2>
              <p className="text-lg text-gray-300">Desarrollador Web/Móvil</p>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-6 text-2xl">
              <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
          >
            <FaInstagram />
          </a>

            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="relative  py-4 px-6">
          {/* Estrellas para mobile */}
          <div className="absolute top-2 right-8 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-6 right-16 w-1 h-1 bg-white rounded-full opacity-60"></div>
          <div className="absolute bottom-3 left-12 w-0.5 h-0.5 bg-white rounded-full opacity-80"></div>
          <div className="absolute bottom-2 right-6 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
          <div className="absolute top-3 left-8 w-1 h-1 bg-white rounded-full opacity-75"></div>

          {/* Contenido horizontal */}
          <div className="flex items-center justify-center space-x-4 relative z-10">
            {/* Foto pequeña */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-0.5">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R1lfelta:"
                  className="w-full h-full rounded-full overflow-hidden bg-gray-200"
                >
                  <img
                    src="/fotoperfil.webp"
                    alt="Foto de Yeiner Navarro"
                    loading="lazy"
                    width="64"
                    height="64"
                    className="w-full h-full object-cover rounded-full"
                  />
                </button>
              </div>
            </div>

            {/* Información del perfil */}
            <div className="text-left text-white">
              <h2 className="text-lg font-semibold">
                By <span className="font-bold">Yeiner Navarro</span>
              </h2>
              <p className="text-sm text-gray-300">Desarrollador Web/Móvil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
