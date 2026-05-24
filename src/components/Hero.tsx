import { motion } from 'motion/react';
import { ArrowRight, Send, ShieldCheck, Heart, Sparkles, Award, Star } from 'lucide-react';
import { handleImageError } from './Portfolio';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export const DaisyFlower = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg className={`${className} text-[#fbc843]`} viewBox="0 0 100 100" fill="currentColor">
    {/* Clean round 8-petals daisy flower from the style reference */}
    <circle cx="50" cy="20" r="12" />
    <circle cx="50" cy="80" r="12" />
    <circle cx="20" cy="50" r="12" />
    <circle cx="80" cy="50" r="12" />
    <circle cx="29" cy="29" r="12" />
    <circle cx="71" cy="71" r="12" />
    <circle cx="29" cy="71" r="12" />
    <circle cx="71" cy="29" r="12" />
    <circle cx="50" cy="50" r="14" className="text-[#fbc843]" />
    <circle cx="50" cy="50" r="6" className="text-[#2c2523]" />
  </svg>
);

export default function Hero({ onScrollTo }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  };

  return (
    <section id="hero" className="relative pt-4 pb-12 sm:pb-20 lg:pt-8 lg:pb-24 overflow-hidden select-none">
      {/* Background Decor from screenshot */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-[#f7dcd7]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 w-96 h-96 bg-[#e89a8e]/10 rounded-full blur-2xl" />

      {/* Repeating pink checkerboard pattern on the side for retro accent like in screenshot */}
      <div className="absolute right-0 top-1/4 -z-20 w-16 h-80 bg-[repeating-conic-gradient(#f7dcd7_0_25%,transparent_0_50%)] bg-[size:20px_20px] opacity-25 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Intro card + Beautiful speech bubble + Interactive navigation block */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8"
          >
            {/* Header Badge */}
            <div className="flex items-center gap-3">
              <DaisyFlower className="w-10 h-10 animate-[spin_12s_linear_infinite]" />
              <div className="px-4 py-1.5 bg-[#f7dcd7] text-[#2c2523] rounded-full text-xs font-bold tracking-widest uppercase">
                Анастасия
              </div>
            </div>

            {/* Typography Heading & Subtitle */}
            <div className="space-y-4">
              <motion.h1 
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl lg:text-5xl font-normal text-[#2c2523] leading-[1.1] tracking-normal"
                id="hero-heading"
              >
                эстетика и <br />
                <span className="font-serif italic text-[#e89a8e] font-light">
                  идеальные ногти
                </span> <br />
                в Горячем Ключе
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="font-sans text-sm sm:text-base text-[#2c2523]/80 leading-relaxed max-w-xl"
                id="hero-subtitle"
              >
                Привет! Я Настя. Люблю делать красивые ногти прекрасным девушкам в атмосфере комфорта и нежной заботы.
              </motion.p>
            </div>

            {/* Quote dialog speech bubble (from mockup) */}
            <motion.div 
              variants={itemVariants}
              className="relative bg-[#faf6f0] border-2 border-[#e89a8e] p-5 rounded-3xl shadow-sm max-w-md"
              id="hero-quote-bubble"
            >
              {/* Little speech arrow */}
              <div className="absolute bottom-[-10px] left-8 w-4 h-4 bg-[#faf6f0] border-r-2 border-b-2 border-[#e89a8e] transform rotate-45" />
              <p className="font-sans text-xs sm:text-sm font-bold text-[#e89a8e] tracking-wide select-text">
                «быть красивой легко, главное следить за ухоженностью своих ногтей»
              </p>
            </motion.div>

            {/* Aesthetic Navigation Actions (as in premium left side of mockup) */}
            <motion.div 
              variants={itemVariants}
              className="space-y-3 pt-4"
              id="hero-custom-navigation-btns"
            >
              {[
                { label: 'МОИ РАБОТЫ', target: 'portfolio' },
                { label: 'ПРАЙС-ЛИСТ', target: 'price' },
                { label: 'ОТЗЫВЫ КЛИЕНТОВ', target: 'reviews' },
                { label: 'КОНТАКТЫ & ЗАПИСЬ', target: 'booking' }
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => onScrollTo(link.target)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-[#f7dcd7]/20 text-[#2c2523] border-2 border-[#e89a8e]/15 hover:border-[#e89a8e]/50 rounded-2xl transition-all duration-300 font-sans text-xs sm:text-sm font-semibold tracking-widest cursor-pointer group shadow-xs"
                >
                  <span className="group-hover:text-[#e89a8e] transition-colors">{link.label}</span>
                  <span className="text-[#e89a8e] opacity-75 font-mono group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                    —————————————————<ArrowRight className="w-4 h-4 inline-block" />
                  </span>
                </button>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Beautiful arched photo portrait with checkerboard details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-center relative mt-8 lg:mt-0"
          >
            {/* White container with thick border holding master portrait */}
            <div className="relative w-full max-w-[380px] bg-white p-4.5 rounded-[40px] shadow-lg border border-[#e89a8e]/10">
              
              {/* Arched image container like mockup */}
              <div className="relative aspect-[3/4] w-full rounded-t-[150px] rounded-b-[24px] overflow-hidden bg-[#f7dcd7] border-4 border-white shadow-inner">
                <img 
                  src="/master.jpeg" 
                  alt="Анастасия" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />

                {/* Overlapping small branding chip inside image at bottom right (safe from arched top clipping) */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs py-1.5 px-3.5 rounded-full shadow-md text-[10px] font-bold text-[#e89a8e] uppercase tracking-wider flex items-center gap-1.5 border border-[#e89a8e]/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e89a8e] animate-pulse" />
                  Анастасия
                </div>
              </div>

              {/* Master bio summary label */}
              <div className="mt-4 p-4 bg-[#fbf9f5] rounded-2xl border border-[#e89a8e]/10 space-y-1.5 text-center">
                <p className="text-xs uppercase font-bold tracking-widest text-[#e89a8e]">Мастер Эстетики</p>
                <div className="flex justify-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-xs text-[#2c2523]/70 font-sans">
                  Стерильные насадки, бережные фрезы и материалы премиум-класса
                </p>
              </div>

              {/* Floating Flower Graphic next to the picture */}
              <div className="absolute -left-6 top-8">
                <DaisyFlower className="w-12 h-12 bounce-slow" />
              </div>

              {/* Checkboard decoration on the right side block */}
              <div className="absolute -right-4 top-1/3 w-8 h-24 bg-[repeating-conic-gradient(#e89a8e_0_25%,transparent_0_50%)] bg-[size:16px_16px] opacity-50 rounded-lg -z-10" />

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
