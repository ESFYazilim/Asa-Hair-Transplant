import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BeforeAfterCarousel from '../components/BeforeAfterCarousel';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfterCarousel />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
