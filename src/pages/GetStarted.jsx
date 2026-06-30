import React from 'react';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Get Your API Key</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Start building with APIForge today.
          </p>
          <div className="max-w-md mx-auto mt-10 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sign Up Free</h2>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;