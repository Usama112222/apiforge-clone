import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img 
                src="/logo-light.svg" 
                alt="APIForge" 
                className="h-10 w-auto"
                onError={(e) => e.target.style.display = 'none'}
              />
             
            </Link>
            <p className="mt-4 max-w-xs text-gray-400">
              Developer-first API infrastructure that helps teams ship better APIs faster. Gateway, auth, analytics, and SDKs in one platform.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="tel:(555) 678-9012" className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white">
                <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 678-9012
              </a>
              <a href="mailto:hello@apiforge.dev" className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white">
                <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@apiforge.dev
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                200 Congress Ave, Austin, TX 78701
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Products
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/services" className="text-gray-400 transition-colors hover:text-white">
                    API Gateway
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 transition-colors hover:text-white">
                    Authentication
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 transition-colors hover:text-white">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 transition-colors hover:text-white">
                    Webhooks
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Developers
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="#" className="text-gray-400 transition-colors hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 transition-colors hover:text-white">
                    SDKs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 transition-colors hover:text-white">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link to="/changelog" className="text-gray-400 transition-colors hover:text-white">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/about" className="text-gray-400 transition-colors hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 transition-colors hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 APIForge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              Terms of Service
            </Link>
            <Link to="/elements" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              Style Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;