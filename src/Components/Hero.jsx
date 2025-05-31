import React from 'react'
import { FaPlay } from "react-icons/fa";
import { motion } from 'motion/react';
import { slideright } from './Animation';

const Hero = () => {
    return (
        <div className=' w-[100vw] min-h[100vh]  relative sm:flex '>
            <div className="left flex-1 flex flex-col items-center pt-16 px-4  ">
                <motion.p
                    variants={slideright(0.4)}
                    initial="hidden"
                    animate="visible"
                    className='font-semibold text-center text-orange-600 text-xl  '>100% SATISFACTION GUARANTEE</motion.p>
                <motion.h1
                    variants={slideright(1)}
                    initial="hidden"
                    animate="visible"
                    className='text-5xl sm:text-6xl text-center text-textDark font-bold pt-4'>Find Your <br /> perfect <span className='text-secondary'>Tutor</span></motion.h1>
                <motion.p
                    variants={slideright(1.2)}
                    initial="hidden"
                    animate="visible"
                    className='text-center pt-10 px-2 text-xl text-gray-700 '>We help You find perfect tutor for 1-on-1 lessons. it is <br /> completely free  and Private</motion.p>
                < motion.div
                    variants={slideright(1.5)}
                    initial="hidden"
                    animate="visible"
                    className='pt-10 flex gap-6 justify-center'>
                    <button className='bg-secondary text-white  items-center px-10 py-3 rounded-full  font-bold'>Get Started</button>
                    <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300">
                        <FaPlay className=" text-blue-600" />

                    </button>
                    <p className='font-bold item-center pt-2  '>See how it work</p>

                </ motion.div>
            </div>
            < div className="right flex-1 flex justify-center items-center ">
                < motion.img
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    src="https://img.freepik.com/premium-photo/group-looking-into-laptop-smiling_13339-163376.jpg?ga=GA1.1.705335640.1743957470&semt=ais_hybrid&w=740"
                    alt="Hero image"
                    className="w-full max-w-[680px]"
                />
            </ div>
        </div>
    )
}

export default Hero
