import React from 'react';
import BlogHero from '../components/BlogHero';
import BlogGrid from '../components/BlogGrid';
import BlogNewsletter from '../components/BlogNewsletter';

const Blog = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  );
};

export default Blog;