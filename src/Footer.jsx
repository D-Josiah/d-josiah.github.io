import { useState } from 'react'
import './scss/style.css'

function Footer() {

  return (
    <footer>
      <div className='copyright'>
        <p>&copy; 2024  Vital Vintage</p>
        <p>All Rights Reserved</p>
      </div>
      
      <div className='contact-info'>
        <div className='footer-title'>
          <i class="fa-regular fa-envelope"></i>
          <p>Contact Information</p>
        </div>
        <div className='footer-content'>
          <p>+63956479283</p>
          <p>info@vitalvinatge.com</p>
          <p>02 8123-4567</p>
        </div>
       

      </div>

      <div className='legal-info'>
        <div className='footer-title'>
          <i class="fa-solid fa-gavel"></i>
          <p>Legal Information</p>
        </div>
        <div className='footer-content'>
            <a>Privacy Policy</a>
            <a>Terms and Conditions</a>
            <a>Accessibility Statement</a>
        </div>
      
  

      </div>
    
    </footer>
  )
}

export default Footer;
