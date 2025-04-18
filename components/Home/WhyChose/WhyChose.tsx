import React from 'react';
import WhyChoseCard from './WhyChoseCard';
import { MdDashboard, MdNotificationsActive } from 'react-icons/md';
import { FaUsersCog, FaCode } from 'react-icons/fa';

const WhyChose = () => {
  return (
    <div 
      className='pt-16 pb-16 bg-gradient-to-r from-blue-50 via-white to-green-50' 
      id='why'
    >
      <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center text-gray-800'>
        Pourquoi choisir SMARTEX Education
      </h1>

      <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
        
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <WhyChoseCard 
            icon={<MdDashboard />}
            title='Gestion Centralisée'
            des='Un seul outil pour gérer les cours, notes, absences, stages, mémoires, etc.'
          />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <WhyChoseCard 
            icon={<FaUsersCog />}
            title='Multi-utilisateurs & Sécurité'
            des='Des accès adaptés pour les enseignants, élèves, parents, administrateurs et entreprises.'
          />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <WhyChoseCard 
            icon={<MdNotificationsActive />}
            title='Communication Efficace'
            des='Envoi automatique de SMS, notifications et interactions en temps réel.'
          />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <WhyChoseCard 
            icon={<FaCode />}
            title='Flexibilité & Évolutivité'
            des='Développée avec ReactJS et Laravel pour une plateforme rapide, moderne et adaptable.'
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
