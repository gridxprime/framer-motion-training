import React from 'react'
import { motion } from 'framer-motion'

function Links() {
  return (
    <>
    <section className='links'>
    <motion.h2
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: .3, duration: .5}}
          >Links</motion.h2>
          <motion.div
          
          initial={{y: -20, opacity: 0}}
          animate={{y: 20, opacity: 1}}
          transition={{delay: .5, duration: .5}}
          className="links__links">
            <a href="https://framer.com/motion">Framer Motion</a>
            <a href="https://react.dev">React</a>
            <a href="https://github.com">GitHub</a>
          </motion.div>
    </section>
    </>
  )
}

export default Links
