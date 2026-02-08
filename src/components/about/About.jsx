import React from 'react'
import about from '../../assets/blog.jpg'

const About = () => {
  return (
    <section className='bg-[#1a1a1a]'>
        <div className='container mx-auto px-4 py-10'>
            <div className='text-white   '>
                <h2 className='text-5xl text-center font-bold pb-20 '>About <span className='text-purple-500'>Me</span></h2>
                
            </div>
            <div className='grid grid-cols-2 '>
              <div className='pb-20'>
                <img className='w-full' src={about} alt="" />
              </div>
              <div></div>
            </div>
        </div>
    </section>
  )
}

export default About