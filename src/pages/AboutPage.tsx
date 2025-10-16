import React from 'react';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <About />
      <Achievements />
      <Contact />
    </div>
  );
};

export default AboutPage;
