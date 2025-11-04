import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Publications() {
  // Re-useable carousel config
  const carouselConfig = {
    modules: [Navigation, Pagination, Autoplay, Keyboard],
    spaceBetween: 24,
    slidesPerView: 1.2,
    centeredSlides: false,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    keyboard: { enabled: true },
    pagination: { clickable: true, el: '.swiper-pagination', type: 'bullets' },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 2.2 },
      768: { slidesPerView: 3.2 },
      1024: { slidesPerView: 4.2 },
    },
  };

  return (
    <section className="py-32 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
          Publications
        </h1>

        <div className="space-y-20">
          {/* ---------- JOURNALS ---------- */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Journals / Articles</h2>

            <div className="relative">
              <Swiper {...carouselConfig} className="pb-12">
                {[1, 2, 3, 4, 5].map((i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group h-full flex flex-col">
                      {/* Image placeholder */}
                      <div className="bg-gray-700 h-48 rounded-lg mb-4 border-2 border-dashed border-gray-600 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>

                      <p className="font-medium text-white group-hover:text-cyan-300 transition">
                        Article Title {i}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Published in <em>PhDians Journal</em>
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation arrows */}
              <div className="swiper-button-prev !text-cyan-400 !w-10 !h-10 after:!text-lg"></div>
              <div className="swiper-button-next !text-cyan-400 !w-10 !h-10 after:!text-lg"></div>

              {/* Pagination bullets */}
              <div className="swiper-pagination !bottom-0"></div>
            </div>
          </div>

          {/* ---------- BOOKS ---------- */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Books / Book Chapters</h2>

            <div className="relative">
              <Swiper {...carouselConfig} className="pb-12">
                {[1, 2, 3].map((i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group h-full flex flex-col items-center justify-center">
                      {/* Book cover placeholder */}
                      <div className="bg-gray-700 h-64 w-32 mx-auto mb-3 rounded border-2 border-dashed border-gray-600 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>

                      <p className="font-medium text-white group-hover:text-cyan-300 transition">
                        Book Title {i}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">PhDians Press</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button-prev !text-cyan-400 !w-10 !h-10 after:!text-lg"></div>
              <div className="swiper-button-next !text-cyan-400 !w-10 !h-10 after:!text-lg"></div>
              <div className="swiper-pagination !bottom-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}