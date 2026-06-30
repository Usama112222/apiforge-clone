import React from 'react';
import { Link } from 'react-router-dom';

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-b from-orange-600 to-orange-700 py-20 dark:from-orange-900 dark:to-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
            Our Blog
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Insights & Updates
          </h1>
          <p className="mt-4 text-lg text-orange-100">
            Stay up to date with the latest tips, trends, and insights from our team.
          </p>
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-orange-200" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;