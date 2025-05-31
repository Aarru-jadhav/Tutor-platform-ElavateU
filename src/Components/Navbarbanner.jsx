import React from 'react'
import { motion } from 'motion/react'
import { useState } from 'react';

const Navbarbanner = () => {
    const [isopen, setopen] = useState(true);
  return (
    isopen && (
    < motion.div className=' banner h-16  w-full text-center bg-secondary text-white font-bold pt-2  relative sm:h-10 '>
      Are you a university or school student for an online tutoring partnership?
      <a href="#" className='text-textDark'>Talk to us</a>
      <div className='absolute top-1/2 right-8  -translate-y-1/2 pt-6 pl-16 cursor-pointer  focus:outline-none focus:ring-0 sm:pt-2    '
      onClick={()=>setopen(!isopen)}
      >
X
      </div>
    </ motion.div>
  ))
}

export default Navbarbanner
