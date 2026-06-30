import React from 'react';
import PricingHero from '../components/PricingHero';
import PricingPlans from '../components/PricingPlans';
import FAQ from '../components/FAQ';
import PricingCTA from '../components/PricingCTA';

const Pricing = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <PricingHero />
      <PricingPlans />
      <FAQ />
      <PricingCTA />
    </div>
  );
};

export default Pricing;