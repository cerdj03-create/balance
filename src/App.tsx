/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import PriceList from './components/PriceList';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';
import FloatingBookingButton from './components/FloatingBookingButton';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем кнопку после прокрутки вниз на 200px
      const scrolledPastThreshold = window.scrollY > 200;
      
      // Вычисляем расстояние до низа страницы для скрытия у подвала
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPos = window.scrollY || window.pageYOffset;
      
      const distanceToBottom = docHeight - (scrollPos + windowHeight);
      
      // Высота футера составляет около 380px, скрываем кнопку при приближении к нему
      const isNearFooter = distanceToBottom < 380;
      
      setShowFloatingBtn(scrolledPastThreshold && !isNearFooter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Проверяем положение сразу при монтировании

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2026 Трендовая анимация появления элементов при скролле (Scroll-driven animations)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Срабатывает при появлении элемента в поле зрения на 15-20%
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target); // Предотвращает лишнюю нагрузку после показа
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll, .reveal-scale');
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleScrollTo = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      // Смещение для фиксированной шапки
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#2c2523] flex flex-col font-sans antialiased selection:bg-[#f7dcd7] selection:text-[#2c2523]" id="app-root">
      {/* Premium Header */}
      <Header onScrollTo={handleScrollTo} />

      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Dynamic Portfolio Grid with Lightbox */}
        <Portfolio />

        {/* Complete Price list with Interactive Estimator Calculator */}
        <PriceList />

        {/* Customer Reviews Area with Local State submitting mock */}
        <Reviews />

        {/* Live Booking & Contacts Section */}
        <Booking onShowPrivacy={() => setIsPrivacyOpen(true)} />
      </main>

      {/* Structured Footer */}
      <Footer onScrollTo={handleScrollTo} onShowPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Плавающая кнопка быстрой записи */}
      <FloatingBookingButton 
        visible={showFloatingBtn} 
      />

      {/* FZ-152 compliance statement detailed overlay dialog */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}
