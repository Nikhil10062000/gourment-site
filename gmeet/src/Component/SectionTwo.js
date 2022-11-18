import React from 'react'
import {FaTruckMoving , FaAward} from 'react-icons/fa';
import { AiFillLock } from "react-icons/ai";

const SectionTwo = () => {
  return (
    <div className='flex flex-row space-x-1'>
      <div className='cards pt-8'>
        <FaTruckMoving className='mx-auto' size="3rem" color="white"/>
        <div className='flex flex-col justify-center"'>
           <p className='mx-auto' >FREE DELIVERY</p>
        <p className='mx-auto'>ON / ABOVE $100</p> 
        </div>
      </div>


      <div className='cards pt-8'>
        <FaAward className='mx-auto' size="3rem" color="white"/>
        <div className='flex flex-col justify-center"'>
           <p className='mx-auto' >BEST SELLING</p>
        <p className='mx-auto'>HAMPERS</p> 
        </div>
      </div>


      <div className='cards pt-8 '>
        <AiFillLock className='mx-auto' size="3rem" color="white"/>
        <div className='flex flex-col justify-center"'>
           <p className='mx-auto' >SECURED</p>
        <p className='mx-auto'>SHOPPING SITE</p> 
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
