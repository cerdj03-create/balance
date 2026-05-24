import { motion } from 'motion/react';
import { testimonials as initialReviews } from '../data';
import { Star, Quote } from 'lucide-react';
import { DaisyFlower } from './Hero';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#fcf9f5]/60 border-t border-[#e89a8e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16 reveal-on-scroll">
          <div className="space-y-3 max-w-xl text-left">
            <div className="flex items-center gap-3">
              <DaisyFlower className="w-10 h-10 animate-[spin_18s_linear_infinite]" />
              <h2 className="font-display text-4xl sm:text-5xl text-[#2c2523] lowercase italic tracking-tight">
                отзывы
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#2c2523]/70 font-sans leading-relaxed">
              Отзывы прекрасных девушек, которые доверили мне заботу о своих руках и ногтях.
            </p>
          </div>

          <a
            href="https://yandex.ru/maps/?text=Balance+Studio+Горячий+Ключ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#e89a8e] hover:bg-[#e58f82] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full border border-[#e89a8e]/15 transition-all duration-300 shadow-sm hover:shadow cursor-pointer self-start sm:self-auto"
            id="reviews-write-yandex-btn"
          >
            <Star className="w-4 h-4 fill-white text-white" />
            Оставить отзыв на Яндекс Карты
          </a>
        </div>

        {/* Reviews Grid Cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" id="reviews-cards-container">
          {initialReviews.map((rev, index) => (
            <motion.div
              layout
              key={rev.id}
              className={`bg-[#faf6f0] rounded-[24px] p-6 sm:p-8 border border-[#e89a8e]/10 hover:border-[#e89a8e]/20 transition-all duration-300 hover:shadow-xs relative reveal-on-scroll delay-${(index % 2) * 150}`}
              id={`review-card-${rev.id}`}
            >
              {/* Elegant floating double quote icon markup */}
              <div className="absolute right-6 top-6 text-[#f7dcd7]/80 pointer-events-none">
                <Quote className="w-10 h-10 rotate-180" strokeWidth={1} />
              </div>

              {/* Star markup line */}
              <div className="flex gap-0.5 text-[#e89a8e] mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < rev.rating ? 'fill-[#e89a8e]' : 'stroke-neutral-300'}`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-[#2c2523]/85 font-serif italic leading-relaxed select-text min-h-[60px]">
                «{rev.text}»
              </p>

              {/* Client Info alignment footer */}
              <div className="mt-6 pt-5 border-t border-[#e89a8e]/10 flex items-center justify-between gap-4">
                <div className="text-left select-text">
                  <h4 className="font-sans text-sm font-bold text-[#2c2523]">{rev.name}</h4>
                  <p className="text-[10px] text-[#e89a8e] font-semibold uppercase tracking-wider">{rev.service}</p>
                </div>
                <span className="text-[10px] text-gray-400 font-medium font-sans">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
