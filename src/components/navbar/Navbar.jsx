import React from 'react'
import './navbar.css'
import { useState } from 'react'
import logo from '../../assets/logo.svg'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
const Navbar = () => {
  const [toggle,setToggel] = useState(false)

  const Menu = () => 
   ( <>
      <p><a href="#home">Home</a></p>
      <p><a href="#what">What is GPT3</a></p>
      <p><a href="#possibily">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )

  return (
    <div className="gpt3__navbar">

      <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar-links_logo'>
            <img src={logo} alt="" />
          </div>

          <div className="gpt3__navbar-links_container">
            <Menu />
          </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      
    
     <div className="gpt3__navbar-menu">
       
        {toggle ? <RiCloseLine  color="#fff" size={27} onClick={() => setToggel(!toggle)}/> : <RiMenu3Line color="#fff" onClick={() => setToggel(!toggle)}/> }
        {toggle && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign UP</button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar
