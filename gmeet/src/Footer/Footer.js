import React from 'react'
import Sectiont from "./Sidet"
import SectionO from "./SideO"
import SectionR from "./SideR"
import Sectionf from "./Sidef"
const Footer = () => {
  return (
    <><div className='flex  flex-row flex-wrap  h-96 bg-red-700 text-stone-50'>
      
        <SectionO/>
        <Sectiont/>
        <SectionR/>
        <Sectionf/>
      
    </div>
    <div className='mx-auto text-white  bg-black flex flex-row justify-evenly'>
      <h6>
      © 2022 by Gourmet Living. All rights reserved.
      </h6>
      </div></>
    

  )
}

export default Footer
