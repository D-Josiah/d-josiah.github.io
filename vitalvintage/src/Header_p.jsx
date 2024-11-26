import { useState } from 'react';
import './scss/style.css';

function Header_p() {
  return (
    <>
      <header className='header_p'>
        <img className='logo' alt="Logo" src='/src/assets/logo.png'/>
   
        <div className='profile-widget'>
          <i class="fa-solid fa-user"></i>
          <p>Username</p>
          <button>
          <i class="fa-solid fa-caret-down"></i>
          </button>
        </div>

      </header>
      <nav>
        <ul>
          <li><a href="#clinics">Clinics</a></li>
          <li><a href="#laboratories">Laboratories</a></li> 
          <li><a href="#about-us">About Us</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header_p;
