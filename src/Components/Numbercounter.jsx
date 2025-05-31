import React from 'react'
import CountUp from 'react-countup';

const Numbercounter = () => {
    return (
        <div className='bg-secondary py-11 text-white px-4  sm:px-32 sm:mt-24  '>
            <div className='grid grid-cols-2 gap-8 px-8 sm:grid-cols-4'>
                <div className='flex flex-col  justify-center text-center '>
                    <p className='text-3xl font-semibold' >
                        <CountUp  start={0} end={898} duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}

                        />
                    </p>
                    <p>expert Tutor</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <p className='text-3xl font-semibold'>
                        <CountUp
                        end={20000} duration={3}
                        separator=','
                        suffix='+'
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                         />

                    </p>
                    <p>Hours Content</p>
                </div>

                <div className='flex flex-col items-center justify-center text-center'>
                    <p className='text-3xl font-semibold'>
                    <CountUp end={298} duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}

                        />
                    </p>
                    <p>Subject and Courses</p>
                </div>
                <div className='flex flex-col item-center justify-center text-center'>
                    <p className='text-3xl font-semibold'>
                    <CountUp
                        end={72780} duration={3}
                        separator=','
                        suffix='+'
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                         />
                    </p>
                    <p>Active Student</p>
                </div>
            </div>


        </div>
    )
}

export default Numbercounter
