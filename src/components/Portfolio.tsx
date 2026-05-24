import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioItems, galleryItems } from '../data';
import { PortfolioItem } from '../types';

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = e.currentTarget;
  const originalSrc = img.getAttribute('data-original-src') || img.src;
  
  if (!img.getAttribute('data-original-src')) {
    img.setAttribute('data-original-src', originalSrc);
  }

  const tryIndex = parseInt(img.getAttribute('data-try-index') || '0', 10);
  // Prioritize files in standard image formats
  const extensions = ['.jpeg', '.jpg', '.png', '.webp', '.JPEG', '.JPG', '.PNG', '.WEBP'];
  
  let basePath = originalSrc;
  for (const ext of extensions) {
    if (originalSrc.endsWith(ext) || originalSrc.includes(ext + '?') || originalSrc.includes(ext + '#')) {
      const idx = originalSrc.indexOf(ext);
      basePath = originalSrc.substring(0, idx);
      break;
    }
  }

  if (tryIndex < extensions.length) {
    img.setAttribute('data-try-index', (tryIndex + 1).toString());
    img.src = basePath + extensions[tryIndex];
  }
};
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { DaisyFlower } from './Hero';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'long' | 'short' | 'design'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filterTabs = [
    { id: 'all', label: 'все' },
    { id: 'long', label: 'длинные' },
    { id: 'short', label: 'короткие' },
    { id: 'design', label: 'дизайн' },
  ] as const;

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = filteredItems[carouselIndex] || filteredItems[0];

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-[#faf6f0] border-y border-[#e89a8e]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mockup styled Title header with Yellow Daisy Flower */}
        <div className="flex flex-col items-center justify-center text-center mb-10 reveal-on-scroll">
          <div className="flex items-center gap-3.5">
            <DaisyFlower className="w-12 h-12 animate-[spin_24s_linear_infinite]" />
            <h2 className="font-display text-4xl sm:text-5xl text-[#2c2523] lowercase italic tracking-tight">
              мои работы
            </h2>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[#2c2523]/70 font-sans max-w-md">
            Чистый маникюр, безупречные блики и укрепление архитектуры ногтя. Посмотрите примеры выполненных мною работ.
          </p>
        </div>

        {/* Thick White border card structure mimicking the Right panel of the mockup */}
        <div className="max-w-xl mx-auto bg-white border-8 border-white rounded-[40px] shadow-sm p-4 sm:p-6 mb-12 reveal-scale">
          
          {/* Main Slider Display Area */}
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[#faf6f0] border-4 border-white shadow-inner group">
            <AnimatePresence mode="wait">
              {currentItem && (
                <motion.img
                  key={currentItem.id}
                  src={currentItem.imageUrl}
                  alt={currentItem.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
              )}
            </AnimatePresence>

            {/* Slider Navigation Overlay Controls */}
            <div className="absolute inset-y-0 left-2 flex items-center">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#2c2523] flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
                aria-label="Назад"
                id="prev-btn"
              >
                <ChevronLeft className="w-5 h-5 text-[#e89a8e]" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-2 flex items-center">
              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#2c2523] flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
                aria-label="Вперед"
                id="next-btn"
              >
                <ChevronRight className="w-5 h-5 text-[#e89a8e]" />
              </button>
            </div>

            {/* Tap to maximize overlay badge */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => setSelectedItem(currentItem)}
                className="bg-[#2c2523]/80 hover:bg-[#2c2523] text-white p-2.5 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
                id="slider-maximize"
              >
                <Maximize2 className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Soft Category badge inside slider */}
            {currentItem && (
              <div className="absolute top-4 left-4 bg-white/90 px-3.5 py-1 rounded-full border border-[#e89a8e]/15">
                <span className="text-[10px] font-bold text-[#e89a8e] uppercase tracking-wider">
                  {currentItem.categoryLabel}
                </span>
              </div>
            )}
          </div>

          {/* Current Slider Meta text */}
          {currentItem && (
            <div className="mt-4 px-2 space-y-1 text-center select-text">
              <h3 className="font-serif text-lg font-bold text-[#2c2523]">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#2c2523]/70 font-sans">
                {currentItem.description}
              </p>
            </div>
          )}

          {/* Quick Category Tabs at bottom of card - styled exactly like the three thumbs at mockup */}
          <div className="grid grid-cols-4 gap-2 mt-6">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setCarouselIndex(0);
                  }}
                  className={`py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#e89a8e] text-white shadow-xs scale-102'
                      : 'bg-[#faf6f0] text-[#2c2523]/70 hover:bg-[#f7dcd7]/30 hover:text-[#2c2523]'
                  }`}
                  id={`portfolio-tab-${tab.id}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Also provide a modern, beautifully spaced grid of other works below the focus slider for rich engagement */}
        <div className="mt-16 text-center">
          <h3 className="text-xs uppercase tracking-widest text-[#e89a8e] font-bold mb-6">галерея других работ</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer relative aspect-square rounded-[20px] overflow-hidden bg-white border-2 border-white shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.02] reveal-on-scroll delay-${(index % 4) * 100}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-10 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-[#2c2523]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-[#e89a8e] px-2.5 py-1 rounded-full">
                    смотреть
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox / Full Screen Viewer Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2c2523]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Закрыть"
              id="close-lightbox-btn"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#faf6f0] rounded-[32px] overflow-hidden max-w-sm w-full shadow-2xl relative"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full border border-[#e89a8e]/20">
                  <p className="text-[10px] font-bold text-[#e89a8e] uppercase tracking-wider">
                    {selectedItem.categoryLabel}
                  </p>
                </div>
              </div>
              
              <div className="p-6 space-y-1.5 select-text">
                <span className="text-[10px] font-bold text-[#e89a8e] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Balance Studio
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2c2523]">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#2c2523]/75 font-sans leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
