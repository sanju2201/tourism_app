
import React, { useRef } from 'react';
import "./home.scss"



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
          ABOUT US
        </div>
        <div ref={sectionRefs.destinations} className="section destinations">
          DESTINATIONS
        </div>
        <div ref={sectionRefs.experiences} className="section experiences">
          EXPERIENCES
        </div>
        <div ref={sectionRefs.travelStyles} className="section travelStyles">
          TRAVEL STYLES
        </div>
        <div ref={sectionRefs.contact} className="section contact">
          CONTACT US
        </div>
      </div>
    );
  }
  
  export default Home;