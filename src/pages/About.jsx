import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
        <>
        <section className='about'>
          <motion.h2
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: .3, duration: .5}}
          >About me</motion.h2>
        </section>
        </>
  )
}

export default About
