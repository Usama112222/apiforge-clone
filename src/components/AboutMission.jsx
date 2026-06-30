import React from 'react';

const AboutMission = () => {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              APIs Should Just Work
            </h2>
            <p className="mt-4 text-lg font-medium italic text-orange-600 dark:text-orange-400">
              "To give every developer the tools to build, ship, and scale APIs without fighting infrastructure — so they can focus on what matters: building great products."
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              APIForge was founded in 2022 by a team of engineers who were tired of stitching together API gateways, auth providers, rate limiters, and monitoring tools from five different vendors. We believed there had to be a better way — a single, developer-first platform that handles the entire API lifecycle.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Today, APIForge powers over 50 billion API calls per month for more than a million developers worldwide. From startups shipping their first endpoint to enterprises managing thousands of microservices, our platform scales seamlessly to meet any demand.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="About APIForge" 
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;