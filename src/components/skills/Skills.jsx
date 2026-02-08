import React from 'react'
import Marquee from 'react-fast-marquee'
import s1 from '../../assets/html.png'
import s2 from '../../assets/css.png'
import s3 from '../../assets/boot.png'
import s4 from '../../assets/react.png'
import s5 from '../../assets/tail.png'

const Skills = () => {
  return (
    <section className=''>
        <div className='container mx-auto px-4 py-20'>
            <h1 className='text-6xl text-center font-bold pb-20'>Skills</h1>

            <Marquee className=''>
                <div className='px-15'>
                    <img className='w-30 h-30 ' src={s1} alt="" />
                </div>
                <div className='px-15'>
                    <img className='w-30 h-30' src={s2} alt="" />
                </div>
                <div className='px-15'>
                    <img className='w-30 h-30' src={s3} alt="" />
                </div>
                <div className='px-15'>
                    <img className='w-70 h-30' src={s4} alt="" />
                </div>
                <div className='px-15'>
                    <img className='' src={s5} alt="" />
                </div>

            </Marquee>
        </div>
    </section>
  )
}

export default Skills