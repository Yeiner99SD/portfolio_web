import { useState } from "react";
import emailjs from '@emailjs/browser';



interface EmailForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const useEmailJS = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (formData: EmailForm) => {
    setLoading(true);
    setError(null);

    try {
      const result = await emailjs.send(
        'service_vscfm2u',
        'template_41mvq3g',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          message: formData.message,
        },
        'fmg9-ZyhjZMEHssLU'
      );

      setLoading(false);
      return result;
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      setLoading(false);
      throw err;
    }
  };

  return {
    sendEmail,
    loading,
    error,
  };
};
