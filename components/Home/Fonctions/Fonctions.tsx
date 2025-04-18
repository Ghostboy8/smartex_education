import React from 'react'
import FonctionCard from './FonctionCard'

const fonctionsData = [
  {
    plan: 'Gestion des formations',
    features: [
      'Publication des programmes de formation en ligne',
      'Inscriptions aux formations',
      'Gestion des sessions de formation et des horaires',
    ],
  },
  {
    plan: 'Gestion des absences et de l\'assiduité',
    features: [
      'Saisie des appels et suivi des absences des étudiants',
      'Suivi de l\'assiduité des étudiants',
      'Gestion des justificatifs d\'absence',
    ],
  },
  {
    plan: 'Planning interactif',
    features: [
      'Planification des cours et des événements',
      'Gestion des salles avec réservation',
      'Affichage des plannings pour les enseignants et les étudiants',
    ],
  },
  {
    plan: 'Notes et moyennes des étudiants',
    features: [
      'Saisie des notes et moyennes',
      'Édition de relevés de notes',
    ],
  },
  {
    plan: 'Gestion des stages et des entreprises',
    features: [
      'Suivi des stages des étudiants',
      'Gestion des conventions de stage',
      'Base de données des entreprises partenaires',
    ],
  },
  {
    plan: 'Envoi de Messages SMS Groupés',
    features: [
      'Envoi automatisé de messages SMS pour les rappels, les notifications et les annonces importantes',
      'Envoi des SMS groupés',
    ],
  },
  {
    plan: 'Suivi de Mémoires',
    features: [
      'Suivi de l\'avancement des mémoires et des projets de fin d\'études',
      'Stockage et partage des documents liés aux mémoires',
    ],
  },
]

const Fonctions = () => {
  return (
    <div className='pt-16 pb-16 bg-[#edfbff]' id='feature'>
      <h2 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Fonctionnalités en Détail</h2>
      <div className='w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {fonctionsData.map((fonction, index) => (
          <div key={index} data-aos='flip-up' data-aos-anchor-placement='top-bottom' data-aos-delay={`${index * 100}`}>
            <FonctionCard plan={fonction.plan} features={fonction.features} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fonctions
