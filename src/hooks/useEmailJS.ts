import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailForm {
  name: string;
  email: string;
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
        'service_vscfm2u', // Replace with your EmailJS service ID
        'template_41mvq3g', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'fmg9-ZyhjZMEHssLU' // Replace with your EmailJS public key
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
