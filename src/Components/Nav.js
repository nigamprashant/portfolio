import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
  return (
    <>
    <nav className='navbar'>
        <Link className='navitem' to='/project'>Projects</Link>
        <Link className='navitem' to='/skills'>Skills</Link>
        <Link className='navitem' to='/'>Home</Link>
        <Link className='navitem' to='/about'>About</Link>
        <Link className='navitem' to='/contact'>Contact</Link>
    </nav>
    <Outlet/>
    </>
  )
}
