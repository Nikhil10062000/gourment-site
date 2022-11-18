import React from 'react'
import { BsFillTelephoneFill , BsFacebook} from "react-icons/bs";
import { AiOutlineMail , AiOutlineInstagram} from "react-icons/ai";

const SideR = () => {
  return (
    <div className='pt-12 pl-44'>
      <h4  >GET IN TOUCH</h4>
      

      <table >
        <tr >
          <th className='pl-4 pt-2 ' ><BsFillTelephoneFill size="1.5rem"/></th>
          <th className='pl-8 pt-2'>0427 293 265</th>
          
        </tr>
        <tr>
          <th className='pl-4 pt-2'><AiOutlineMail size="1.5rem"/></th>
          <th className='pl-8 pt-2'>info@gourmetliving.com.au</th>
          
        </tr>
        <tr>
          <th className='pl-4 pt-2'><BsFacebook size="1.5rem"/></th>
          <th className='pl-8 pt-2'><AiOutlineInstagram size="1.5rem"/></th>
         
        </tr>
        
      </table>
    </div>
  )
}

export default SideR
