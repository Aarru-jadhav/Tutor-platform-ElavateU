import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { motion } from 'motion/react';
import { slideleft } from './Animation';


const Card = [
    {
        id: 1,
        title: "One-on-one Teaching",
        decs: "All of our special education experts have a degree in special education.",
        link: "",
        icon: <GrYoga />,
        bg: "blue",
        delay: 0.5,

    },
    {
        id: 2,
        title: "24/7 Tutor Availability",


        decs: "Our tutors are always available to respond as quick as possible for you",
        link: "",
        icon: <FaDumbbell />,
        bg: "green",
        delay: 0.6,

    },
    {
        id: 3,
        title: "Interactive Whiteboard",
        decs: "Our digital whiteboard equipped with audio and video chat fetures.",
        link: "",
        icon: <GiGymBag />,
        bg: "orange",
        delay: 0.9,

    },
    {
        id: 4,
        title: "Affordable Prices",


        decs: "Choose an expert tutor based on your budget and per hour.",
        link: "",
        icon: <GiGymBag />,
        bg: " pink",
        delay: 0.9,

    },

]




const ChoseUs = () => {
    return (
        <div className='bg-white'>
            <div className="cont py-24 px-10  ">
                <div className=' space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5'>
                    <h1 className='font-bold   text-orange-600'>WHY CHOOSE US</h1>
                    <p className='font-bold text-3xl   '>Benefits of online tutoring  services with us</p>
                </div>
                <div className='cardsection  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center font-playfair '>
                    {Card.map((item) => {
                        return (
                            <motion.div 
                            key={item.id}
                            variants={slideleft(item.delay)}
                            initial="hidden"
                            whileInView={"visible"}
                            className=" space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] ">
                                <div style={{ backgroundColor: item.bg }}
                                    className="icon w-10 h-10 rounded-lg flex justify-center items-center text-white  ">
                                    <div className='text-2xl'>{item.icon}</div>
                                </div>
                                <div className=' font-bold text-[18px]'>{item.title}</div>
                                <div className='text-[16px]  text-gray-500'>{item.decs}</div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChoseUs
