// Hero.tsx
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6  text-white">
      {/* Foto */}
      <div className="flex flex-col items-center justify-center md:mr-12 mb-8 md:mb-0">
        <img
          src="/fotoperfil.png" // Cambia esto al path real de tu imagen
          alt="Yeiner Navarro"
          className="rounded-full w-96 h-96 object-cover shadow-lg mb-4 md:mb-0 transition-transform duration-300 hover:scale-105"
        />
        <h2 className="mt-4 text-lg font-medium">Web/Mobile Developer</h2>
        <div className="flex gap-4 mt-2 text-xl text-white/80">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      {/* Texto */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">! Hello, I´m </span>
          <span className="text-white">Yeiner Navarro!</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to my web site, i´m focused on creating <br />
          <span className="text-yellow-400 font-semibold">
            modern websites and mobile applications
          </span>{' '}
          that help entrepreneurs and businesses scale their digital presence.
        </p>
        <button className="bg-[#B89F5C] hover:bg-[#d5c5a7] cursor-pointer text-black font-medium py-2 px-6 rounded-full hover:scale-110 transition-all duration-200">
          🚀 Let´s work together
        </button>
      </div>
    </section>
  );
};

export default Hero;