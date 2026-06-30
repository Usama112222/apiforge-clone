import React from 'react';
import { Link } from 'react-router-dom';

const PricingPlans = () => {
  return (
    <section className="bg-white py-20 lg:py-28 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Plans for Every Stage
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Start with our generous free tier and scale seamlessly as your API traffic grows.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Free Plan */}
          <div className="relative rounded-2xl p-8 shadow-soft transition-all hover:shadow-soft-lg bg-gray-50 dark:bg-gray-900 border-2 border-transparent">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Free</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">For side projects and prototyping</p>
            </div>
            <div className="mt-6 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">$0</span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">1K requests/day</p>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">1,000 API requests/day</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">100 req/min rate limit</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">API Gateway &amp; routing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">API key authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Basic analytics dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Community support (Discord)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-500 dark:text-gray-600">Webhook management</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-500 dark:text-gray-600">Custom domains</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="block w-full rounded-lg py-3 text-center font-medium transition-colors bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Get Started Free
              </Link>
            </div>
          </div>

          {/* Growth Plan - Most Popular with Orange Border */}
          <div className="relative rounded-2xl p-8 shadow-soft transition-all hover:shadow-soft-lg border-2 border-orange-500 dark:border-orange-400 bg-white dark:bg-gray-800">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white">
              Most Popular
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Growth</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">For startups and growing teams</p>
            </div>
            <div className="mt-6 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">$49</span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">per month</p>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">1M API requests/month</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">10K req/min rate limit</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">API Gateway &amp; routing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">OAuth 2.0 &amp; JWT auth</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Advanced analytics &amp; alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Email support (24h response)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Webhook management</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Custom domains</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="block w-full rounded-lg py-3 text-center font-medium transition-colors bg-orange-600 text-white hover:bg-orange-700">
                Start Growth Plan
              </Link>
            </div>
          </div>

          {/* Scale Plan */}
          <div className="relative rounded-2xl p-8 shadow-soft transition-all hover:shadow-soft-lg bg-gray-50 dark:bg-gray-900 border-2 border-transparent">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Scale</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">For enterprises and high-traffic APIs</p>
            </div>
            <div className="mt-6 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">$199</span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">per month</p>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Unlimited API requests</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Unlimited rate limits</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">API Gateway with edge caching</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">SSO, RBAC &amp; audit logs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Custom dashboards &amp; SLA monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Dedicated Slack + 1h SLA</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Webhook management + DLQ</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Multi-region deployment</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="block w-full rounded-lg py-3 text-center font-medium transition-colors bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          All plans include the full platform. Pricing is based on monthly API calls. Volume discounts available for annual billing.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;