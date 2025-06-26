// Hero.tsx
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import ButtonCta from "../components/ButtonCta";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-16 text-white">
      {/* Foto */}
      <div className="flex flex-col items-center justify-center md:mr-12 mb-8 md:mb-0">
        <img
          src="/fotoperfil.png" // Cambia esto al path real de tu imagen
          alt="Yeiner Navarro"
          className="rounded-full w-80 h-80 object-cover shadow-lg mb-4 md:mb-0 transition-transform duration-300 hover:scale-105"
        />
        <h2 className="mt-4 text-lg font-medium">Web/Mobile Developer</h2>
        <div className="flex gap-4 mt-2 text-xl text-white/80">
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

      {/* Texto */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">! Hello, I´m </span>
          <span className="text-white">Yeiner Navarro!</span>
        </h1>
        <p className="text-lg font-thin text-gray-300 mb-6">
          Welcome to my web site, i´m focused on creating <br />
          <span className="text-yellow-400 font-semibold">
            modern websites and mobile applications
          </span>{" "}
          that help <br /> entrepreneurs and businesses scale their digital presence.
        </p>
        <ButtonCta
          text="🚀 Let's work together"
          isRoundedFull={true}
          className="hover:scale-110 shadow"
        />
      </div>
    </section>
  );
};

export default Hero;
