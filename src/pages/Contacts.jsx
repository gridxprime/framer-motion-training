import React from 'react'
import { motion } from 'framer-motion'

function Contacts() {
  return (
    <>
      <section className='contacts'>
      <motion.h2
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: .3, duration: .5}}
          >Contacts</motion.h2>
          <motion.div
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: .5, duration: .5}}

           className="contacts__contacts">
            <span>Kyrgyzstan, Bishkek</span>
            <span><a href="https://www.github.com/gridxprime">GitHub</a></span>
            <span><a href="mailto:till_morning_comes@mail.ru">E-Mail</a></span>
            <span><a href="https://www.t.me/till_morning_comes">Telegram</a></span>
          </motion.div>
      </section>
    </>
  )
}

export default Contacts
