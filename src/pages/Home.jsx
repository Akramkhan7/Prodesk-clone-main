import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import WelcomeSection from '../components/WelcomeSection';
import OurStory from '../components/OurStory';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <WelcomeSection />
      <OurStory />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}