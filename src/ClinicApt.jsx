import { useState } from 'react';
import Header_p from './Header_p.jsx'

import './scss/style.css';


function ClinicApt() {
  return (
    <>
       <Header_p/>
       <div className='apt-wrapper'>
          <div className='apt-nav'>
            <ul>
                <li>
                  <p className='apt-stepnum'>1</p>
                  <p className='apt-stepname'>Set Appointment</p>
                </li>
                <li>
                  <p className='apt-stepnum'>2</p>
                  <p className='apt-stepname'>Your Information</p>
                </li>
            
                <li>
                  <p className='apt-stepnum'>3</p>
                  <p className='apt-stepname'>Confirmation</p>
                </li>
            
            
            </ul>
          </div>
          <main className='apt-main'>
            <aside>
              <section className='apt-selection'>
               
                  <button class="selection-btn">
                  <i class="fa-solid fa-briefcase"></i> Select Services
                  <i class="fa-regular fa-square"></i>
                  </button>
                  <button class="selection-btn">
                  <i class="fa-solid fa-briefcase"></i> Select Date
                  <i class="fa-regular fa-square"></i>
                  </button>
         
              </section>
              <section className='apt-summary'>
                <h2>Selected Services</h2>


              </section>
            </aside>
            <section className='services-wrap'>
                <h2 className='service-title'>SERVICES OFFERED IN OUR OB-GYN DEPARTMENT</h2>
                <ul>
                  <li>Appointmenst Needed</li>
                  <li>Walk-ins Allowed</li>
                </ul>

                <div className='services-choose'>
                  <div className='service-book'>
                    <h2>Prenatal Checkup</h2>
                    <button>Book</button>
                  </div>
                  <p>Prenatal checkups monitor your health and baby’s development during pregnancy. Book your appointment for a healthy pregnancy</p>
                </div>
                <div className='apt-notes-wrap'>
                  <p className='notes-instructuction'>Add any details or special requests for your appointment here.</p>
                  <textarea className='apt-notes' id='prenatal-notes'></textarea>
                </div>
            </section>

          </main>
          <div className='nav-btns'>
            <button class="btn">
                    <i class="fa-solid fa-briefcase"></i> Back
              </button>
            <button class="btn">
                  <i class="fa-solid fa-briefcase"></i> Next
            </button>

          </div>

       </div>
       
       
    </>
  );
}

export default ClinicApt;
