import React from 'react'
import Container from '../commoncomponent/Container'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
      <motion.div
       initial={{opacity:0,y:50}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:1, ease:'easeOut'}}
       viewport={{once:false, amount:0.2}}
       id='contact'
       className='py-20 bg-[#2b2b2b]'>

       
   </motion.div>
  )
}

export default Contact
