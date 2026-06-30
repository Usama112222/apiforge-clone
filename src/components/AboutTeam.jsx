import React from 'react';

const teamMembers = [
  {
    name: 'Alex Kim',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    alt: 'Alex Kim'
  },
  {
    name: 'Maya Rodriguez',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    alt: 'Maya Rodriguez'
  },
  {
    name: 'Jordan Lee',
    role: 'Head of Platform',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    alt: 'Jordan Lee'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Developer Relations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    alt: 'Priya Sharma'
  }
];

const AboutTeam = () => {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Engineers building tools for engineers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                <img 
                  src={member.image} 
                  alt={member.alt} 
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;