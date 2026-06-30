import React from 'react';
import ProductsHero from '../components/ProductsHero';
import ProductsGrid from '../components/ProductsGrid';
import ProductsCTA from '../components/ProductsCTA';
import HowItWorks from '../components/HowItWorks';

const Products = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300">
      <ProductsHero />
      <ProductsGrid />
      <HowItWorks />
      <ProductsCTA />
    </div>
  );
};

export default Products;