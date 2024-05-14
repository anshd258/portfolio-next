"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
function HeroSection() {
    return (

        <section >
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-7 place-self-center mb-4 text-center sm:text-left">
                    <h1 className='text-white text-4xl mb-5  sm:text-6xl lg:text-8xl font-extrabold '>
                        <p>Hi, i am {""}</p>
                        <TypeAnimation
                            sequence={[

                                'Ansh',
                                1500,
                                'Full Stack Developer',
                                1500,
                                'Flutter Developer',
                                1500,
                                'Devops Engineer',
                                1500
                            ]}
                            wrapper="p"
                            speed={50}
                            className=' pb-6  bg-clip-text bg-gradient-to-r from-primary-900 to-secondary-300 text-transparent text-4xl sm:text-6xl lg:text-8xl font-extrabold'

                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-slate-400 text-base sm:text-lg  mb-6 lg:text-xl'>
                        Experienced Full Stack Developer blending front-end finesse with back-end brilliance. Seeking new challenges to innovate and excel.
                    </p>
                    <div className=''>
                        <button className='px-4 py-3 mr-5 w-full sm:w-fit rounded-full bg-gradient-to-r from-primary-900  to-secondary-300 text-white '>Hire me</button>
                        <button className='px-1 py-1 mt-4 w-full sm:w-fit rounded-full bg-gradient-to-r from-primary-900  to-secondary-300  '>
                            <span className='block rounded-full px-3 py-2 bg-black text-white '> Download CV</span>
                        </button>
                    </div>
                </div >
                <div className='col-span-5 mt-5  lg:mt-0 flex justify-center items-center  sm:place-content-center sm:justify-center'>
                    <div className='bg-gradient-to-r from-primary-950  to-secondary-400 w-[230px] h-[230px] rounded-full relative flex justify-center items-center'>
                        <Image src="/images/profile.jpg" alt="profile image" width={200} height={200} className='rounded-full ' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection