import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BeforeAfterCarousel from '../components/BeforeAfterCarousel';
import Treatments from '../components/Treatments';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfterCarousel />
      <Treatments />
      <About />
      <Achievements />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
