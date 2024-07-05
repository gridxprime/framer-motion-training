import React from 'react'
import zombie from '../assets/img/zombie.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <>
      <section className='hero'>
        <div className="left">
        <motion.div
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y:  0, opacity: 1}}
          transition={{ delay: .2, duration: 0.5, ease: 'easeOut' }}
       
      >
          <h2><b>Welcome Back!</b></h2>
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y:  0, opacity: 1}}
          transition={{ delay: .4, duration: 0.5, ease: 'easeOut' }}
        >
          <span>Animations are not merely
             about movement and changing form. 
             They embody the mystery of time, a
              perpetual dance of change. Each motion, 
              each frame transition, is a fleeting moment 
              that emerges and disappears, leaving its mark 
              in memory.

</span>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y:  0, opacity: 1}}
          transition={{ delay: .6, duration: 0.5, ease: 'easeOut' }}
        >
          <span>Through animations, we see not only physical 
            motion but also the inner soul of objects and 
            characters. Each frame contains a moment of wisdom
             and understanding of what lies beyond our eyes.
              Animations allow us to see the unseen at first 
            glance and to feel what lies beyond words.

</span>
        </motion.div>
        </div>
        <div className="right">

    

        

        <motion.div
        
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1}}

        className="hero__cube-show">
        <motion.span
        
        initial={{ opacity: 1, }}
        animate={{opacity: .2}}
        transition={{ type: 'spring',delay: 2, ease: 'easeOut', repeat: Infinity, repeatDelay: 5, repeatType: 'reverse'}}
        className='right__title'>Elevator is broken</motion.span>
          <motion.div className='hero__cube' 
          
          initial={{delay: 2}}
          animate={{rotate: 30}}
          transition={{type: 'spring',delay: 2, ease: 'easeOut', repeat: Infinity, repeatDelay: 5, repeatType: 'reverse'}}
          >
  
                 <img src={zombie} alt="" />
            <motion.div 
             initial={{ delay: 2}}
             animate={{ rotate: 30}}
             transition={{ type: 'spring',delay: 2, ease: 'easeOut', repeat: Infinity, repeatDelay: 5, repeatType: 'reverse'}}
            
            className="hero__cube-door">
            
            </motion.div>
            <motion.div className="hero__cube-door" 
             initial={{x: 0, delay: 2}}
             animate={{x: '50%'}}
             transition={{ type: 'spring',delay: 2, ease: 'easeOut', repeat: Infinity, repeatDelay: 5, repeatType: 'reverse'}}>

            </motion.div >

          </motion.div>
          </motion.div>
        </div>
      </section>
      <section className='start'>
        <h2>Drag & Move</h2>
        <div className="start__blocks">
          <motion.div drag 
          dragConstraints={{                    
            top: -150,
            right: 150,
            bottom: 150,
            left: -150,}}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}

          whileTap={{background: '#5f5f5f' , borderRadius: '10px', outline:'3px solid orange'}}
          className="start__block1">

          </motion.div>
          <motion.div drag 
          dragConstraints={{                    
            top: -150,
            right: 150,
            bottom: 150,
            left: -150,}}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}

          whileTap={{background: '#5f5f5f', borderRadius: '10px', outline:'3px solid orange'}}
          className="start__block1">

          </motion.div>
          <motion.div drag 
          dragConstraints={{
          top: -150,
            right: 150,
            bottom: 150,
            left: -150,}}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}

          whileTap={{background: '#5f5f5f' , borderRadius: '10px', outline:'3px solid orange'}}
          className="start__block1">

          </motion.div>
          <motion.div drag 
          dragConstraints={{                    
            top: -150,
            right: 150,
            bottom: 150,
            left: -150,}}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}

          whileTap={{background: '#5f5f5f' , borderRadius: '10px', outline:'3px solid orange'}}
          className="start__block1">

          </motion.div>
          <motion.div drag 
          dragConstraints={{                    
            top: -150,
            right: 150,
            bottom: 150,
            left: -150,}}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}

          whileTap={{background: '#5f5f5f', borderRadius: '10px', outline:'3px solid orange'}}
          className="start__block1">

          </motion.div>
          <motion.div drag 
          dragConstraints={{                    
            top: -150,
            right: 150,
            bottom: 150,
            left: -150}}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}

          whileTap={{background: '#5f5f5f' , borderRadius: '10px', outline:'3px solid orange'}}
          className="start__block1">

          </motion.div>
        </div>
      </section>
      
    </>
  )
}

export default Homepage
