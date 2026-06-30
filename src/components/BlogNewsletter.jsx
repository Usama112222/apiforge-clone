import React, { useState } from 'react';

const BlogNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed email:', email);
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gray-900 px-8 py-16 text-center shadow-xl dark:bg-gray-800">
          <span className="inline-flex items-center rounded-full bg-orange-600/20 px-4 py-1.5 text-sm font-medium text-orange-400">
            Newsletter
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Subscribe to our newsletter for the latest articles, tips, and updates delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full max-w-sm rounded-full border border-gray-700 bg-gray-800 px-6 py-3 text-white shadow-lg placeholder:text-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 sm:w-auto"
            />
            <button 
              type="submit" 
              className="w-full rounded-full bg-orange-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-orange-700 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;