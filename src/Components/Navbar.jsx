import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    
       <nav className='navbar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/login'>Login</NavLink>
       </nav>

    </>
  )
}

export default Navbar