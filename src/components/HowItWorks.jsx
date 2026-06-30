import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Import Your Spec',
      description: 'Upload your OpenAPI or GraphQL schema, or point us at your existing endpoints.'
    },
    {
      number: 2,
      title: 'Configure Your Gateway',
      description: 'Set up routing rules, auth policies, rate limits, and transformations through the dashboard.'
    },
    {
      number: 3,
      title: 'Generate SDKs',
      description: 'Auto-generate type-safe client libraries in every language your consumers need.'
    },
    {
      number: 4,
      title: 'Ship & Monitor',
      description: 'Deploy to our global edge network and monitor everything in real-time from day one.'
    }
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Go from zero to production API in four simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;