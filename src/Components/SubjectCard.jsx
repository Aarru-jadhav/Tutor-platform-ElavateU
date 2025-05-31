import React from 'react'
import { motion } from 'motion/react'
import { delay } from 'motion'
import { FaBook } from "react-icons/fa";
import { div } from 'motion/react-client';


const subject = [
    {
        id: 1,
        name: "Enginnering",
        icon: <FaBook />,
        bg: "#0063ff",
        delay: 0.5,
    },
    {
        id: 2,
        name: "English",
        icon: <FaBook />,
        bg: "#00c986",
        delay: 0.6,
    },
    {
        id: 3,
        name: "Programming",
        icon: <FaBook />,
        bg: "#922aee",
        delay: 0.7,
    },
    {
        id: 4,
        name: "Science",
        icon: <FaBook />,
        bg: "#ea7516",
        delay: 0.7,
    },
    {
        id: 5,
        name: "History",
        icon: <FaBook />,
        bg: "#075267",
        delay: 0.8,
    },
    {
        id: 6,
        name: "Psychlogy",
        icon: <FaBook />,
        bg: "#986d1c",
        delay: 0.8,
    },
    {
        id: 7,
        name: "Web design",
        icon: <FaBook />,
        bg: "#b93838",
        delay: 0.9,
    },
    {
        id: 8,
        name: "See all",
        icon: <FaBook />,
        bg: "#464646",
        delay: 0.9,
    },
]

const SubjectCard = () => {
    return (
        <div className='contsec px-8 '>
            <div className='py-14 md:py-24'>
                <div className='text-center max-w-[600px] mx-auto mb-4 p-6 space-y-6'>
                    <p className=' font-bold text-orange-600 uppercase'>Our tutor subjects</p>
                    <p className='font-bold text-3xl'>Find Online Tutor in Any Subject</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair '>
                    {subject.map((item) => {
                        return (
                            <motion.div
                            key={item.id}
                            initial={{opacity:0,x:-200}}
                            whileInView={{opacity:1, x:0}}
                            transition={{
                                type:"spring",
                                stiffness:100,
                                delay:item.delay,
                            }}
                             className=' border-2  border-gray-400 rounded-lg p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer '>
                                <div style={{color:item.bg,
                                    backgroundColor:item.bg+"20"}}
                                 className="icon  flex-col h-10 w-10 flex justify-center  items-center rounded-md ">{item.icon}</div>
                                <div className="name">{item.name}</div>
                            </motion.div>
                        )

                    })}
                </div>

            </div>

        </div>
    )
}

export default SubjectCard
