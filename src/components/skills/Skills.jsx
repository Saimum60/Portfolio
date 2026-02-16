import React from 'react'
import Container from '../commoncomponent/Container'
import { FaBootstrap, FaFigma, FaHtml5, FaReact } from 'react-icons/fa'
import { SiCss3, SiNextdotjs } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io'
import { div, span } from 'framer-motion/client'

const Skills = () => {

    const skills =[
        {id:1,
         name:'HTML',
         icon:<FaHtml5 />,
          color: "text-orange-500",
        
        },
        {
           id:2,
         name:'Css3',
         icon:<SiCss3 />, 
         color: "text-blue-500",
        },
        {id:3,
         name:'React',
         icon:<FaReact />,
         color: "text-cyan-400",
        
        },
        {
           id:4,
         name:'Bootstrap',
         icon:<FaBootstrap />, 
          color: "text-purple-500"
        },
        {id:5,
         name:'Tailwind',
         icon:<RiTailwindCssFill />,
         color: "text-teal-400",
        
        },
        {
           id:6,
         name:'Next Js',
         icon:<SiNextdotjs />, 
          color: "text-white",
        },
        {id:7,
         name:'Figma',
         icon:<FaFigma />,
         color: "text-purple-400" ,
        
        },
        {
           id:8,
         name:'Java Script',
         icon:<IoLogoJavascript />, 
          color: "text-yellow-400",
        },
    ]
  return (
    <section className='px-5 py-10 bg-[#2b2b2b]'>
        <Container>

            <div>
                <h3 className='text-white text-4xl font-bold text-center'>Skills</h3>
                <div></div>

            </div>
            <div className='flex justify-center pt-5 pb-20'>
                <p className='text-white w-120 text-lg text-center'>I have strong skills in front-end and full-stack web development, including HTML, CSS, JavaScript, and React.js.</p>
            </div>

           <div className="grid md:grid-cols-4 gap-6">
  {skills.map((item) => (
    <div
      key={item.id}
      className="group relative bg-[#1e293b]/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl text-center hover:border-[#0ea5e9]/50 hover:bg-[#1e293b]/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0ea5e9]/0 to-[#0ea5e9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className= {`${item.color} mb-6 inline-block relative z-10 text-5xl md:text-6xl`}>
        {item.icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors relative z-10">
        {item.name}
      </h3>
    </div>
  ))}
</div>
            
           
        </Container>
        
    </section>
  )
}

export default Skills