import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import FadeInSection from '../components/FadeInSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300">
      <FadeInSection delay={0}>
        <Hero />
      </FadeInSection>

      <FadeInSection delay={100}>
        <Stats />
      </FadeInSection>

      <FadeInSection delay={200}>
        <Features />
      </FadeInSection>

      <FadeInSection delay={300}>
        <Testimonials />
      </FadeInSection>

      <FadeInSection delay={150}>
        <FAQ />
      </FadeInSection>

      <FadeInSection delay={200}>
        <Contact />
      </FadeInSection>

      <FadeInSection delay={100}>
        <CTA />
      </FadeInSection>
    </div>
  );
};

export default Home;