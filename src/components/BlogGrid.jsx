import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'REST vs GraphQL in 2026: Which Should You Choose?',
    excerpt: 'A practical comparison of REST and GraphQL for modern API development, with guidance on when to use each approach.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    date: 'Feb 20, 2026',
    author: 'Maya Rodriguez',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    category: 'Architecture',
    readTime: '7 min read'
  },
  {
    id: 2,
    title: 'API Rate Limiting Strategies That Actually Work',
    excerpt: 'Learn proven rate limiting patterns that protect your APIs without frustrating legitimate users.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    date: 'Feb 15, 2026',
    author: 'Alex Kim',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    category: 'Engineering',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Building Developer Portals That Developers Actually Use',
    excerpt: 'The essential ingredients of a developer portal that drives adoption and reduces support burden.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    date: 'Feb 10, 2026',
    author: 'Priya Sharma',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    category: 'Developer Experience',
    readTime: '8 min read'
  },
  {
    id: 4,
    title: 'API Versioning Best Practices for Long-Lived APIs',
    excerpt: 'Strategies for evolving your API without breaking existing integrations, from URL versioning to content negotiation.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
    date: 'Feb 5, 2026',
    author: 'Jordan Lee',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    category: 'Architecture',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'Webhook Reliability Patterns for Production Systems',
    excerpt: 'How to build webhook delivery systems that never lose events, from retry strategies to dead letter queues.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    date: 'Jan 28, 2026',
    author: 'Alex Kim',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    category: 'Engineering',
    readTime: '7 min read'
  }
];

const categories = ['All', 'Architecture', 'Engineering', 'Developer Experience'];

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Search */}
        <div className="mb-8 mx-auto max-w-xl">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-orange-600 text-white dark:text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg dark:bg-gray-900 dark:ring-gray-800"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="h-8 w-8 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {post.author}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;