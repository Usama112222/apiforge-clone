import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutMission from '../components/AboutMission';
import AboutValues from '../components/AboutValues';
import AboutTeam from '../components/AboutTeam';
import AboutCTA from '../components/AboutCTA';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
};

export default About;