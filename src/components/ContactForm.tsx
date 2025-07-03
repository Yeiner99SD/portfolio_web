import { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    //integrar EmailJs
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          className="flex-1 p-3 rounded-md bg-[#0b0147] text-white placeholder-slate-300 outline-none"
          required
        />
        <input
          type="text"
          name="telefono"
          placeholder="Telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="flex-1 p-3 rounded-md bg-[#0b0147] text-white placeholder-slate-300 outline-none"
        />
      </div>

      <input
        type="email"
        name="correo"
        placeholder="Correo"
        value={formData.correo}
        onChange={handleChange}
        className="w-full p-3 rounded-md bg-[#0b0147] text-white placeholder-slate-300 outline-none"
        required
      />

      <textarea
        name="mensaje"
        placeholder="Deja tu mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        className="w-full p-3 rounded-md h-32 resize-none bg-[#0b0147] text-white placeholder-slate-300 outline-none"
        required
      />

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 transition-all text-black font-semibold py-2 px-4 rounded-md"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;