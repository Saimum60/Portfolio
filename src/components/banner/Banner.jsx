import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Pro from '../../../src/assets/ss1.png'

const Banner = () => {
  return (
    <section>
      <div className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
      >
        <div className='container mx-auto px-6 grid grid-cols-2  items-center justify-between'>
          {/* left side */}
          <div className='text-white'>
            <h1 className='text-5xl font-bold mb-4'>
              Hi, I'm <span className='text-purple-500'>Abu Sayed Saimum</span>
            </h1>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Front End Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Back End Developer',
        1000,
        ' Full Stack Developer',
        1000,
       
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '2.5rem', display: 'inline-block' }}
      repeat={Infinity}
      
    />
            <p className='pt-5 pb-20 w-150'>I am a passionate Full Stack Developer with hands-on experience in building complete web applications from front-end to back-end. I specialize in creating responsive and user-friendly interfaces using React.js, and developing secure, scalable server-side applications using Node.js and Express.js. </p>
            <div className='' >
              <button className='text-2xl px-13 py-3 rounded-full  bg-black text-white flex items-center hover:text-purple-500 ' >CV download</button>
            </div>
          </div>
        {/* right side */}

        <div>
          <div className='pl-50'>
            <img className='rounded-full w-100 h-100' src={Pro} alt="" />
          </div>
        </div>
        </div>


      </div>

    </section>
  )
}

export default Banner