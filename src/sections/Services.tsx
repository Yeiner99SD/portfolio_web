// src/sections/Services.tsx
import ButtonCta from "../components/ButtonCta";
import Card from "../components/Card";
import { services } from "../data/servicesData";

const Services = () => {
  return (
    <section id="services" className=" py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-yellow-500 text-4xl font-bold mb-12">Mis servicios</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-6">
          <p className="text-white text-lg font-light">
            ¿Tienes ya idea de como quieres tu pagina web?
          </p>
          <ButtonCta
            text="Cuentame tu idea !"
            isRoundedFull={true}
            className="hover:scale-110 shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;