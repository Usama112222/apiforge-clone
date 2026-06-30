import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('Smarter');
  const words = ['Smarter', 'Together', 'Securely', 'Faster'];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setTypewriterText(words[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-orange-50/30 to-white dark:from-gray-950 dark:via-orange-950/30 dark:to-gray-950 transition-colors duration-300">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-[5] overflow-hidden" aria-hidden="true">
        {/* Grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60'/%3E%3Cpath d='M60 0v60H0'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Glowing orbs */}
        <div 
          className="animate-hero-float absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-orange-200/40 blur-[120px] dark:bg-orange-500/10"
          style={{ transform: 'translateY(0px)' }}
        ></div>
        <div 
          className="animate-hero-float-reverse absolute -left-32 bottom-20 h-[400px] w-[400px] rounded-full bg-orange-100/50 blur-[100px] dark:bg-orange-600/8"
          style={{ transform: 'translateY(0px)' }}
        ></div>
        <div className="animate-hero-float absolute left-1/2 top-1/4 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-orange-100/30 blur-[80px] dark:bg-orange-500/5"></div>
      </div>

      <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column: text content */}
          <div>
            {/* Trusted badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300 transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75 dark:bg-orange-400"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500 dark:bg-orange-400"></span>
              </span>
              Trusted by 1M+ developers worldwide
            </div>

            {/* Heading with typewriter */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl dark:text-white transition-colors duration-300">
              Ship Better APIs
              <br />
              <span className="text-orange-600 dark:text-orange-400 transition-opacity duration-300 inline-block">
                {typewriterText}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg text-gray-600 sm:text-xl dark:text-gray-300 transition-colors duration-300">
              The complete API infrastructure platform. Build, deploy, and scale production-ready APIs with built-in gateway, authentication, analytics, and auto-generated SDKs.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-orange-600/25 transition-all hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/30 dark:shadow-orange-500/20"
              >
                Get Free API Key
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-8 py-4 text-base font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-800/50"
              >
                View Documentation
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4 dark:border-gray-800 transition-colors duration-300">
              <div>
                <div className="text-3xl font-bold text-orange-600 lg:text-4xl dark:text-orange-400 transition-colors duration-300">1M+</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Developers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 lg:text-4xl dark:text-orange-400 transition-colors duration-300">50B+</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">API Calls/mo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 lg:text-4xl dark:text-orange-400 transition-colors duration-300">99.999%</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 lg:text-4xl dark:text-orange-400 transition-colors duration-300">200+</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">SDKs</div>
              </div>
            </div>
          </div>

          {/* Right column: Terminal */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-gray-200 bg-gray-900 shadow-2xl shadow-orange-500/5 dark:border-gray-700 dark:bg-gray-900/90 dark:backdrop-blur-sm transition-colors duration-300">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs text-gray-400">terminal</span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-gray-400"># Install the APIForge CLI</div>
                <div className="mt-1">
                  <span className="text-orange-400">$</span> 
                  <span className="text-gray-300"> npm install -g @apiforge/cli</span>
                </div>

                <div className="mt-4 text-gray-400"># Initialize your project</div>
                <div className="mt-1">
                  <span className="text-orange-400">$</span> 
                  <span className="text-gray-300"> apiforge init my-api</span>
                </div>

                <div className="mt-4 text-gray-400"># Deploy to production</div>
                <div className="mt-1">
                  <span className="text-orange-400">$</span> 
                  <span className="text-gray-300"> apiforge deploy --prod</span>
                </div>

                <div className="mt-3 text-green-400">
                  <span className="mr-2">✓</span> Deployed to https://api.example.com
                </div>
                <div className="text-green-400">
                  <span className="mr-2">✓</span> Gateway configured (3 routes)
                </div>
                <div className="text-green-400">
                  <span className="mr-2">✓</span> SDKs generated (Node, Python, Go)
                </div>

                <div className="mt-4 text-gray-400"># Make your first API call</div>
                <div className="mt-1">
                  <span className="text-orange-400">$</span> 
                  <span className="text-gray-300"> curl https://api.example.com/v1/health</span>
                </div>
                <div className="mt-1 text-gray-300">
                  {"{"}"<span className="text-orange-400">status</span>": "<span className="text-green-400">ok</span>", "<span className="text-orange-400">latency</span>": "<span className="text-green-400">2ms</span>{"}"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes hero-float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-2deg); }
        }
        .animate-hero-float {
          animation: hero-float 8s ease-in-out infinite;
        }
        .animate-hero-float-reverse {
          animation: hero-float-reverse 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;