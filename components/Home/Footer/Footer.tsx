import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-white py-10'>
      <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>

          {/* Bloc logo + description */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Smartex Logo"
                width={120}
                height={50}
                className="object-contain"
              />
            </Link>

            <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
              Solution développée par <Link href="https://smartex-expertises.com/acceuil" target="_blank" className="text-blue-600 hover:underline">Smartex Expertises</Link>, spécialisée en ingénierie logicielle, digitalisation et systèmes d'information.
            </p>
          </div>

          {/* Informations générales */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Nos informations</h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
              <li>Centre d’assistance</li>
              <li>Support client</li>
              <li>À propos</li>
              <li>Droits d’auteur</li>
              <li>Campagnes populaires</li>
            </ul>
          </div>

          {/* Services proposés */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Nos services</h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
              <li>Développement web</li>
              <li>Applications mobiles</li>
              <li>ERP & CRM</li>
              <li>Maintenance et support</li>
              <li>Formation et accompagnement</li>
            </ul>
          </div>

          {/* Coordonnées de contact */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Infos de contact</h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
              <li className='flex items-center'>
                <FaMapMarkedAlt className='mr-2' />
                Abidjan, Côte d'Ivoire
              </li>
              <li className='flex items-center'>
                <FaPhoneAlt className='mr-2' />
                +225 07 77 39 22 38
              </li>
              <li className='flex items-center'>
                <FaEnvelope className='mr-2' />
                contact@smartex-expertises.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bande inférieure */}
        <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
          <p className='text-center md:text-left'>
            &copy; 2025 <Link href="https://smartex-expertises.com/acceuil" target="_blank" className="text-blue-700 hover:underline font-semibold">Smartex Expertises</Link>. Tous droits réservés.
          </p>
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>Suivez-nous :</span>
            <Link href="https://www.linkedin.com/company/smartex-expertises/posts/?feedView=all" className='text-gray-500 hover:text-gray-800'><FaLinkedin /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
