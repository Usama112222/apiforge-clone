import React, { useEffect, useRef, useState } from 'react';

const StatItem = ({ target, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-4xl font-bold text-orange-600 lg:text-5xl dark:text-orange-400">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatItem target={1} suffix="M+" label="Developers" />
          <StatItem target={50} suffix="B+" label="API Calls/mo" />
          <StatItem target={99.999} suffix="%" label="Uptime" />
          <StatItem target={200} suffix="+" label="SDKs" />
        </div>
      </div>
    </section>
  );
};

export default Stats;