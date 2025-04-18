'use client'

import { navLinks } from '@/constant/Constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Image from 'next/image'

type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      else setNavbg(false);
    }

    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    }
  }, []);

  return (
    <div className={`fixed ${navBg ? 'bg-white  shadow-md' : 'fixed bg-white  shadow-md'} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

        {/* Logo réduit avec espacement supérieur */}
        <Link href='/' className='flex items-center mt-2'> {/* 👈 marge haute ajoutée ici */}
          <Image
            src='/images/logo.png'
            alt='Smartex Logo'
            width={100}  // 👈 taille réduite
            height={40}
            className='object-contain cursor-pointer'
            priority
          />
        </Link>

        {/* Liens de navigation */}
        <div className='hidden lg:flex items-center space-x-10'>
  {navLinks.map((link) => {
    return (
      <Link href={link.url} key={link.id}>
        <p className='nav_link font-semibold transition-colors duration-300'>
          {link.label}
        </p>
      </Link>
    );
  })}
</div>


        {/* Bouton d'action et menu mobile */}
        <div className='flex items-center space-x-4'>
        <a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700
             hover:bg-blue-900 transition-all duration-200 rounded-full inline-block"
>
  SMARTEX EDUCATION 
</a>


          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden' />
        </div>

      </div>
    </div>
  );
}

export default Nav;
