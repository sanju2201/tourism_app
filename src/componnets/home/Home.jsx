
import React, { useRef } from 'react';
import "./home.scss"
import About from '../about/About'
import Contact from '../contact/Contact'
import Destinations from '../destinations/Destinations'
import TravelStyles from '../travelStyles/TravelStyles'
import Experiences from '../experiences/Experiences'

function Home() {
    const sectionRefs = {
      about: useRef(null),
      destinations: useRef(null),
      experiences: useRef(null),
      travelStyles: useRef(null),
      contact: useRef(null),
    };
  
    const scrollToSection = (ref) => {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className='homeContainer'>
        <nav className='navigationBar'>
        <div className='logo'>
            <img src='https://cdn.sriggle.tech/kantents/production/23/122/03/11eb9c22-3258-4871-ba0c-06e9dec65dd5.png'  alt='logo'/>
        </div>
          <ul className='navList'>
            <li onClick={() => scrollToSection(sectionRefs.about)}>ABOUT US</li>
            <li onClick={() => scrollToSection(sectionRefs.destinations)}>DESTINATIONS</li>
            <li onClick={() => scrollToSection(sectionRefs.experiences)}>EXPERIENCES</li>
            <li onClick={() => scrollToSection(sectionRefs.travelStyles)}>TRAVEL STYLES</li>
            <li onClick={() => scrollToSection(sectionRefs.contact)}>CONTACT US</li>
          </ul>
        </nav>
        <div ref={sectionRefs.about} className="section about">
          <About />
        </div>
        <div ref={sectionRefs.destinations} className="section destinations">
          <Destinations />
        </div>
        <div ref={sectionRefs.experiences} className="section experiences">
          <Experiences />
        </div>
        <div ref={sectionRefs.travelStyles} className="section travelStyles">
          <TravelStyles />
        </div>
        <div ref={sectionRefs.contact} className="section contact">
          <div className='formContainer'><Contact /></div>
        
          <div className='footer'>
            <div className='logo'>
            <img src='https://cdn.sriggle.tech/kantents/production/23/122/03/11eb9c22-3258-4871-ba0c-06e9dec65dd5.png'  alt='logo'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;