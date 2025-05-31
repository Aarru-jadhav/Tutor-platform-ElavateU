import React from 'react'
import { motion } from 'motion/react'
import { slideup } from './Animation'

const Banner = () => {
    return (
        <div className='bg-white '>
            <div className="  overflow-hidden">
                <div className=" grid grid-cols-1 py-16 space-y-6 md:grid-cols-2 md:space-y-0 ">
                    <div className="left flex justify-start items-center text-center px-10  ">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                             
                                delay: 0.5,
                            }}


                            src="https://e-tutor-tcj.netlify.app/assets/banner1-ChWN6Q7z.png"
                            className=' w-[400px] h-full object-cover'
                            alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 lg:max-w-[500px]"    >
                        <motion.p
                            variants={slideup(0.6)}
                            initial="hidden"
                            whileInView={"visible"}

                            className='text-orange-600 font-semibold'>
                            CUSTOMIZE WITH YOUR SCHEDULE</motion.p>
                        <motion.p
                            variants={slideup(0.8)}
                            initial="hidden"
                            whileInView={"visible"}
                            className='text-2xl font-bold '>Personalized Professional Online  <br />Tutor on Your Schedule

                        </motion.p>
                        <motion.p
                            variants={slideup(0.9)}
                            initial="hidden"
                            whileInView={"visible"}
                            className='text-[14px] text-slate-500'>
                            Our scheduling system allows you to select based on your free time.  Lorem ipsum demo text for template. Keep track of your students class  and tutoring schedules, and never miss your lectures. The best online  class  scheduling system with easy accessibility.Lorem ipsum is a  placeholder text commonly used to demonstrate the visual form</motion.p>
                        <motion.button
                            variants={slideup(0.9)}
                            initial="hidden"
                            whileInView={"visible"}
                            className='w-44 h-11 bg-yellow-400 text-black font-bold rounded-3xl mt-10  '>Get Started</motion.button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
