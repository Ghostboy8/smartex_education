'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import WhyChose from './WhyChose/WhyChose'
import AnalyticsFeatures from './AnalyticsFeature/AnalyticsFeatures'
import Feature from './Feature/Feature'
import Review from './Review/Review'
import Fonctions from './Fonctions/Fonctions'
import Offer from './Offer/Offer'
import Contact from './Contact/Contact';

const Home = () => {

  useEffect(()=>{
    const initAOS= async ()=>{
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        anchorPlacement: 'top-bottom',

      });
    };
    initAOS()
  },[])


  return (
    <div className='overflow-hidden ' id='home'>
      <Hero/>
      <WhyChose/>
      <AnalyticsFeatures/>
      <Feature/>
      <Fonctions/>
      <Contact/>
    </div>
  )
}

export default Home
