'use client'

import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const [showNav,setshowNav]= React.useState(false);
  const handleNavShow=()=>{
    setshowNav(true)
  }
  const handleNavHide=()=>{
    setshowNav(false)
  }


  return (
    <div>
      <Nav openNav={handleNavShow}/>
    
      <MobileNav showNav={showNav} closeNav={handleNavHide}/>
    </div>
  )
}

export default ResponsiveNav
