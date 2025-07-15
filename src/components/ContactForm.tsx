import { useState } from "react";
import { useEmailJS } from "../hooks/useEmailJS";

const ContactForm = () => {
  const { sendEmail, loading, error } = useEmailJS();
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmail({
        name: formData.nombre,
        email: formData.correo,
        phone: formData.telefono,
        message: formData.mensaje,
      });

      setSuccessMessage("¡Mensaje enviado con éxito!");
      setFormData({
        nombre: "",
        telefono: "",
        correo: "",
        mensaje: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (err) {
      console.error("Error al enviar el email:", err);
    }
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
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          className="flex-1 p-3 rounded-md bg-[#0b0147] text-white placeholder-slate-300 outline-none"
          required
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
        disabled={loading}
        className={`w-full bg-yellow-400 hover:bg-yellow-500 transition-all text-black font-semibold py-2 px-4 rounded-md ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {error && (
        <div className="mt-4 text-red-500 text-center">{error}</div>
      )}

      {successMessage && (
        <div className="mt-4 text-green-500 text-center">
          {successMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
