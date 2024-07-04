import React from 'react'
import { useState } from 'react'
import { Outlet, NavLink  } from 'react-router-dom'


function Layout() {

const [openNav, setOpenNav] = useState(false)

const toggleNav = () => {
  setOpenNav(!openNav)
}

  return (
    <>
    <div className="container">
    <header>
        <ul>
          <li>
        <NavLink style={{display: 'flex', justifyContent: 'center'}} to='/'><span>Home</span></NavLink></li>

       <li> <NavLink style={{display: 'flex', justifyContent: 'center'}} to='/links'><span>Links</span></NavLink></li>
       <li> <NavLink style={{display: 'flex', justifyContent: 'center'}} to='/contacts'><span>Contacts</span></NavLink></li>
       <li> <NavLink style={{display: 'flex', justifyContent: 'center'}} to='/about'><span>About</span></NavLink></li>
        </ul>
        <button onClick={toggleNav} className='burger__menu-btn'>Open Menu</button>
    </header>
    <div className="container">
        <Outlet>


        </Outlet>
    </div>
    <footer>
    Aibek
    </footer>
    </div>
    </>
  )
}

export default Layout
