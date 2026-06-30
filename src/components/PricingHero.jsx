import React from 'react';
import { Link } from 'react-router-dom';

const PricingHero = () => {
  return (
    <section className="bg-orange-600 py-16 lg:py-24 dark:bg-orange-900 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Pricing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
          Simple, transparent pricing that scales with your API traffic. Start free, upgrade when you are ready.
        </p>
        <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-orange-200" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Pricing</span>
        </nav>
      </div>
    </section>
  );
};

export default PricingHero;