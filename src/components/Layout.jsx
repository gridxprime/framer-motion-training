import React from 'react'
import { useState } from 'react'
import { Outlet, NavLink  } from 'react-router-dom'
import framerIcon from '../../public/framer-motion.svg'

function Layout() {

const [openNav, setOpenNav] = useState(false)

const toggleNav = () => {
  setOpenNav(!openNav)
}

  return (
    <>
    <div className="container">
    <header>
      <nav>
      
        <ul style={{left: openNav ? '0' : ''}}>
          <li>
        <NavLink onClick={toggleNav} style={{display: 'flex', justifyContent: 'center'}} to='/'><span>Home</span></NavLink></li>

       <li> <NavLink onClick={toggleNav} style={{display: 'flex', justifyContent: 'center'}} to='/links'><span>Links</span></NavLink></li>
       <li> <NavLink onClick={toggleNav} style={{display: 'flex', justifyContent: 'center'}} to='/contacts'><span>Contacts</span></NavLink></li>
       <li> <NavLink onClick={toggleNav} style={{display: 'flex', justifyContent: 'center'}} to='/about'><span>About</span></NavLink></li>
       <button className='burger__menu-close' onClick={toggleNav}>X</button>
        </ul>
        </nav>
        <button onClick={toggleNav} className='burger__menu-btn'>
          <span></span>
          <span></span>
          <span></span>
        </button>
    </header>

        <Outlet>


        </Outlet>

    <footer>
    Aibek
    </footer>
    </div>
    </>
  )
}

export default Layout
