import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='w-[90%] md:w-[70%] mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Contactez-nous</h2>
        <p className='text-gray-400 mb-10'>
          Vous avez une question, un partenariat ou une demande d&apos;information ? N&apos;hésitez pas à nous écrire.
        </p>

        {/* Coordonnées */}
        <div className='mb-12 space-y-2'>
          <p className='text-lg'>📞 <span className='font-semibold'>+225 07 77 39 22 38</span></p>
          <p className='text-lg'>📧 <span className='font-semibold'>contact@smartex-expertises.com</span></p>
        </div>

        {/* Bouton pour envoyer un mail */}
        <a
          href='mailto:contact@smartex-expertises.com'
          className='inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-200'
        >
          Envoyer un email
        </a>
      </div>
    </div>
  );
};

export default Contact;
