import React from 'react'
import Instagram_text_logo from '../img/Instagram_text_logo.png'
import './navbar.css'
import {Link} from 'react-router-dom'
import './SignUp.css'
import './SignIN.css'


export default function Navbar() {
  return (
    <div class="navbar">
      {/* <img src={Instagram_text_logo } alt="Navbar_logo" className='Navbar' /> */}
      <div className='text_logo'><i>Moments</i></div>
      <ul className='Nav_menu'>
        <Link to="/signup"><li className='signupbtn'>Signup</li></Link>
        <Link to="/signin"><li>SignIn</li></Link>
        <Link to="/Profile"><li>Profile</li></Link>
        <Link to="/createPost"><li>Add Post</li></Link>

      </ul>
    </div>
  )
}
