import React from 'react';
import { Link } from 'react-router-dom';

const PricingCTA = () => {
  return (
    <section className="bg-orange-600 py-16 lg:py-24 dark:bg-orange-900 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Not Sure Which Plan Is Right?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
          Talk to our solutions team. We will help you find the right plan based on your traffic patterns and requirements.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 font-medium text-orange-600 shadow-lg transition-colors hover:bg-gray-100"
          >
            Talk to Sales
          </Link>
          <Link
            to="#"
            className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            View Documentation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;