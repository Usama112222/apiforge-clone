import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "We migrated from a custom API gateway to APIForge in a weekend. The rate limiting and analytics dashboard are exactly what we needed at scale.",
    name: "Marcus Rivera",
    role: "Lead Engineer, Fintech Labs",
    initial: "M",
  },
  {
    quote: "The developer experience is unmatched. Our team went from zero to production API in under an hour. The documentation and SDKs are phenomenal.",
    name: "Priya Patel",
    role: "VP Engineering, CloudStack",
    initial: "P",
  },
  {
    quote: "APIForge handles 2 billion API calls per month for us without breaking a sweat. The 99.999% uptime SLA is real — we have never had an outage.",
    name: "James Okafor",
    role: "Platform Director, ScaleForce",
    initial: "J",
  },
  {
    quote: "APIForge's monitoring and analytics helped us reduce response times by 40%.",
    name: "Sarah Chen",
    role: "CTO, NexaTech",
    initial: "S",
  },
  {
    quote: "Moving to APIForge simplified our entire backend architecture. One platform for gateway, auth, and monitoring instead of five different tools.",
    name: "Emily Zhang",
    role: "Senior Developer, NexaTech",
    initial: "E",
  },
  {
    quote: "The webhook management system is brilliant. Automatic retries with exponential backoff and detailed delivery logs made our integrations rock-solid.",
    name: "Daniel Kim",
    role: "API Architect, PayRoute",
    initial: "D",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F5F6F8] dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 text-sm font-medium px-4 py-1 rounded-full transition-colors duration-300">
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#111827] dark:text-white mt-5 transition-colors duration-300">
          Trusted by Engineering Teams
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-4 text-lg transition-colors duration-300">
          Hear from the developers and CTOs who rely on APIForge to power their
          API infrastructure.
        </p>

        {/* Slider */}
        <div className="relative mt-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            loop={true}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 min-h-[280px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 h-full flex flex-col">
                  {/* Stars - Orange */}
                  <div className="flex gap-1 mb-4 flex-shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 md:w-5 md:h-5 text-orange-500 dark:text-orange-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote - White in dark mode */}
                  <p className="text-gray-800 dark:text-white text-sm md:text-base leading-relaxed flex-grow">
                    "{item.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-500 dark:text-orange-400 font-semibold text-base md:text-lg flex-shrink-0">
                      {item.initial}
                    </div>

                    <div className="ml-3 md:ml-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                        {item.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="custom-prev absolute left-[-12px] md:left-[-22px] top-1/2 z-10 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-700 group">
            <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="custom-next absolute right-[-12px] md:right-[-22px] top-1/2 z-10 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-700 group">
            <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination (Dots) */}
          <div className="custom-pagination flex justify-center gap-2 mt-8"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .custom-pagination {
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
          margin-top: 32px !important;
          position: relative !important;
        }

        .custom-pagination .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          width: 26px !important;
          border-radius: 999px !important;
          background: #f97316 !important;
        }

        .dark .custom-pagination .swiper-pagination-bullet {
          background: #4b5563 !important;
        }

        .dark .custom-pagination .swiper-pagination-bullet-active {
          background: #fb923c !important;
        }

        .swiper-slide {
          height: auto !important;
        }

        .swiper-button-disabled {
          opacity: 0.5 !important;
          cursor: not-allowed !important;
        }
      `}</style>
    </section>
  );
}