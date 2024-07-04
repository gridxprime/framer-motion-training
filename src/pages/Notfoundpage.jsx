import React from 'react'
import { Link } from 'react-router-dom'
function Notfoundpage() {
  return (
    <>
    <section className='not__found'>
      There's no such link, please go <Link to='/'>Home</Link>
    </section>
    </>
  )
}

export default Notfoundpage
