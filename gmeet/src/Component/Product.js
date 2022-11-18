import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
const Product = ({state}) => {
  return (
    <div className='flex flex-row justify-center text-lg font-semibold '>
        
      <h5 className='pl-16 hover:text-red-600 '>
        HOME
      </h5>
      <h5 className='pl-16 hover:text-red-600'>
        BEST SELLER
      </h5>
      <h5 className='pl-16 hover:text-red-600'>
        HAMERS
      </h5>
      <h5 className='pl-16 hover:text-red-600'>
        PRODUCTS
      </h5>
      <h5 className='pl-16 hover:text-red-600'>
        CONTACTS
      </h5>
      <h5 className='pl-16 relative'>
     <BsFillCartFill/>
     <button  className='absolute text-sm bottom-3 right-3 text-red-600'>{state}</button>
      </h5>
    </div>
  )
}

export default Product
