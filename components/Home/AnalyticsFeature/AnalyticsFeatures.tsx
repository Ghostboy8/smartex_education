import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const AnalyticsFeatures = () => {
  return (
    <div className='pt-24 pb-16 bg-white' id='about'>
      <div className='w-[95%] sm:w-[80%] mx-auto'>
        <div className='p-6'>

          {/* En-tête de section */}
          <h1 className='text-base font-semibold text-red-700 uppercase tracking-wider'>
            Gestion digitalisée et moderne des établissements de formation.
          </h1>

          <h2 className='mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>
            SMARTEX Education : La solution numérique complète pour écoles et universités
          </h2>

          {/* Paragraphe d’introduction */}
          <p className='mt-6 text-gray-700 text-base leading-7'>
            SMARTEX Education est une plateforme de gestion tout-en-un conçue pour les établissements scolaires
            et universitaires. Elle permet une administration efficace des formations, des absences, des plannings,
            des évaluations, des stages, des mémoires et bien plus encore. Son objectif est de faciliter le travail
            des enseignants, d&apos;informer les parents, d&apos;impliquer les entreprises partenaires et d&apos;améliorer
            l&apos;expérience des élèves et étudiants.
          </p>

          {/* Liste des avantages fonctionnels */}
          <div className='mt-8'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              Fonctionnalités principales :
            </h3>
            <ul className='space-y-3 text-gray-800'>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3' />
                <span><strong>Gestion des formations :</strong> publication des programmes, inscriptions, sessions, horaires.</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3' />
                <span><strong>Suivi des absences et assiduité :</strong> appels, justificatifs, rapports de présence.</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3' />
                <span><strong>Planning interactif :</strong> gestion des cours, événements, et salles avec affichage dynamique.</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3' />
                <span><strong>Gestion des notes :</strong> saisie des évaluations, calculs de moyennes, édition des relevés.</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3' />
                <span><strong>Messagerie intégrée :</strong> envois groupés de SMS pour rappels, notifications, annonces.</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3' />
                <span><strong>Suivi des stages et mémoires :</strong> conventions, entreprises partenaires, dépôt de fichiers.</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3' />
                <span><strong>Multi-profils utilisateurs :</strong> accès différenciés pour élèves, enseignants, parents, administrateurs et entreprises.</span>
              </li>
            </ul>
          </div>

          {/* Bouton d’action */}
          <a
            href="#feature"
            className="mt-10 inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-900 transition-all duration-200"
          >
            Explorer toutes les fonctionnalités →
          </a>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsFeatures
