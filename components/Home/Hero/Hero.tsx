import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='w-full pt-[6vh] md:pt-[10vh] min-h-[100svh] hero-bg relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-0'></div>

      <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto z-10 relative'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>

          {/* Texte principal */}
          <div>
            <h1
              data-aos="fade-up"
              className='text-white text-3xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]'
            >
              Révolutionnez la gestion de votre établissement avec <span className='text-red-500'>SMARTEX Education</span>
            </h1>

            <p className='text-white text-sm md:text-base mb-6' data-aos="fade-up" data-aos-delay="100">
              Une plateforme intelligente, intuitive et sécurisée pour la transformation digitale de votre école ou université.
            </p>

            <div
              className='w-fit py-2 px-4 rounded-full shadow-lg flex items-center space-x-3 bg-white'
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className='px-4 py-1 rounded-full bg-blue-700 text-xs sm:text-sm text-white font-bold'>
                SMART
              </div>
              <p className='text-xs sm:text-sm text-gray-700 font-medium'>
                Une solution complète pour une gestion académique moderne
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div data-aos="fade-up" data-aos-delay="300" className='hidden lg:block'>
            <Image
              src='/images/hero-smart.png'
              alt='hero'
              width={700}
              height={700}
              className='animate-float'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
