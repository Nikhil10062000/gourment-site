import React from 'react'

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Header = () => {
  return (
    <div className='bg-red-600 flex flex-row h-10 items-center text-slate-50 md:h-22 sm :40'>
     
      <p className='pl-6 pt-2.5'><BsFillTelephoneFill size="1.2rem "/></p>
        <h5 className='pl-6'>0427 293 265</h5>
        <p className='pl-12 pt-2.5'><AiOutlineMail size="1.2rem "/></p>
        <h5 className='pl-10'>info@gourmetliving.com.au</h5>
        <h5 className='pl-44'>SUPPORTING LOCAL AUSTRALIAN PRODUCERS</h5>
    
    
    
    </div>
  )
}

export default Header
