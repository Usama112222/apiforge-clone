import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCTA = () => {
  return (
    <section className="bg-orange-600 py-16 lg:py-24 dark:bg-orange-900 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Build Better APIs?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
          Start with our free tier and scale as you grow. No credit card required.
        </p>
        <Link
          to="/pricing"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-orange-600 shadow-lg transition-all hover:bg-gray-100"
        >
          Get Free API Key
        </Link>
      </div>
    </section>
  );
};

export default ProductsCTA;