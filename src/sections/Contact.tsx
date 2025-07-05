import ContactForm from "../components/ContactForm";




const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-transparent border border-white/10 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-2">
          Contáctame :)
        </h2>
        <p className="text-center text-white font-semibold text-lg">
          ¿Tienes dudas o quieres trabajar conmigo?
        </p>
        <p className="text-center text-slate-300 mt-2">
          Deja tus datos, tu mensaje y te contactaré lo más rápido posible.
        </p>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
