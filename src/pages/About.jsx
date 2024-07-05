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

          <motion.span             initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: .5, duration: .5}}>
          With over four years of experience in web development specializing in React, I 
          possess deep knowledge and skills in creating modern, interactive, and high-performance 
          user interfaces. My experience spans across projects of varying complexity, from small 
          startups to large-scale corporate applications.

          </motion.span>
          <motion.h2
          
          initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: .7, duration: .5}}
          >Skills</motion.h2>
          <motion.ul initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 1, duration: .5}} className='skills__list'>
            <li>Core Technologies: React, JavaScript (ES6+), HTML5, CSS3</li>
            <li>Development Tools: Webpack, Babel, ESLint, Prettier</li>
            <li>Version Control: Git, GitHub/GitLab/Bitbucket
            </li>
          </motion.ul>
        </section>
        </>
  )
}

export default About
