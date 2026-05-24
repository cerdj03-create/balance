import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';
import { DaisyFlower } from './Hero';

export default function PriceList() {
  const extensionPrices = [
    { length: 1, price: '1900p' },
    { length: 2, price: '2000p' },
    { length: 3, price: '2200p' },
    { length: 4, price: '2400p' },
    { length: 5, price: '2600p' },
    { length: 6, price: '2800p' },
  ];

  const correctionPrices = [
    { length: 1, price: '1700p' },
    { length: 2, price: '1800p' },
    { length: 3, price: '1900p' },
    { length: 4, price: '2000p' },
    { length: 5, price: '2100p' },
    { length: 6, price: '2200p' },
  ];

  return (
    <section id="price" className="py-16 sm:py-20 bg-[#faf6f0] select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title Badge */}
        <div className="flex flex-col items-center justify-center text-center mb-6 reveal-on-scroll">
          <DaisyFlower className="w-12 h-12 mb-3 animate-[spin_20s_linear_infinite]" />
          <p className="text-[10px] uppercase font-bold tracking-widest text-[#e89a8e]">
            фирменный прайс-лист
          </p>
        </div>

        {/* Thick elegant card holding the Price structure inspired by the photo */}
        <div className="bg-[#1e1a18] text-white rounded-[40px] shadow-xl p-6 sm:p-10 border-4 border-[#e89a8e]/20 max-w-2xl mx-auto relative overflow-hidden reveal-scale">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -z-0 w-44 h-44 bg-[#e89a8e]/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -z-0 w-44 h-44 bg-[#e89a8e]/5 rounded-full blur-2xl" />

          {/* Large Stylish Pink PRICE Header */}
          <div className="text-center relative z-10 mb-8">
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#e89a8e] mb-1">
              BALANCE STUDIO
            </p>
            <h3 className="font-sans text-5xl sm:text-6xl font-extrabold tracking-widest text-[#f5cfc9] opacity-90 select-none drop-shadow-sm uppercase">
              PRICE
            </h3>
            <div className="w-20 h-0.5 bg-[#e89a8e] mx-auto mt-2 opacity-50" />
          </div>

          {/* Interactive Pricing Diagram */}
          <div className="grid grid-cols-12 gap-y-4 gap-x-2 items-center relative z-10">
            
            {/* Left Column: НАРАЩИВАНИЕ prices */}
            <div className="col-span-4 sm:col-span-5 flex flex-col justify-between h-[300px] text-right pr-2 sm:pr-4">
              {extensionPrices.map((item, idx) => (
                <div key={idx} className="flex items-center justify-end h-8 group">
                  <span className="font-display text-base sm:text-xl font-medium text-[#fcf9f5] group-hover:text-[#e89a8e] transition-colors">
                    {item.price}
                  </span>
                  <div className="hidden sm:block border-b border-dashed border-[#e89a8e]/20 w-8 ml-2 mt-1" />
                </div>
              ))}
            </div>

            {/* Middle Column: Nail Extension graphic scale */}
            <div className="col-span-4 sm:col-span-2 flex flex-col items-center justify-between h-[300px] relative">
              {/* Vertical line through the nail */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-[#e89a8e]/15 -z-10" />
              
              {/* Styled "Central Nail Extension Tips" Column representing a real nail */}
              <div className="w-9 sm:w-12 bg-gradient-to-b from-[#ebd0cb] via-[#f7dcd7] to-[#ffffff] rounded-t-sm rounded-b-full flex flex-col justify-between py-1.5 h-full shadow-inner border border-[#e89a8e]/25 select-none transition-all relative overflow-hidden">
                {/* Finger base skin at the top */}
                <div className="absolute top-0 left-0 right-0 h-[48px] bg-gradient-to-b from-[#ebd0cb] to-[#f7dcd7]" />
                
                {/* Cuticle line curved overlay */}
                <div className="absolute top-[48px] left-0 right-0 h-[4px] bg-[#dca8a1] rounded-b-full opacity-80" />

                {/* French tip background overlay at bottom lengths 5 and 6 */}
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-[#faf6f0]/40 to-white" />

                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="relative z-10 flex items-center justify-center h-8 w-full">
                    <span 
                      className={`text-xs font-mono font-black text-center ${
                        num === 1 
                          ? 'text-[#8b6560]' 
                          : num >= 5 
                            ? 'text-[#e89a8e]' 
                            : 'text-[#2c2523]'
                      }`}
                    >
                      {num}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: КОРРЕКЦИЯ prices */}
            <div className="col-span-4 sm:col-span-5 flex flex-col justify-between h-[300px] text-left pl-2 sm:pl-4">
              {correctionPrices.map((item, idx) => (
                <div key={idx} className="flex items-center justify-start h-8 group">
                  <div className="hidden sm:block border-b border-dashed border-[#e89a8e]/20 w-8 mr-2 mt-1" />
                  <span className="font-display text-base sm:text-xl font-medium text-[#fcf9f5] group-hover:text-[#e89a8e] transition-colors">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Labels under diagram */}
          <div className="grid grid-cols-2 gap-4 mt-3 text-center border-t border-[#e89a8e]/10 pt-4 font-bold tracking-wider text-[11px] sm:text-xs">
            <span className="text-[#f5cfc9] uppercase font-sans">НАРАЩИВАНИЕ</span>
            <span className="text-[#f5cfc9] uppercase font-sans">КОРРЕКЦИЯ</span>
          </div>

          {/* Detailed Inclusion List */}
          <div className="mt-8 bg-black/30 rounded-3xl p-5 border border-[#e89a8e]/10 text-left select-text relative z-10 space-y-4">
            <p className="text-[11px] font-sans font-bold text-[#e89a8e] uppercase tracking-wider text-center">
              В СТОИМОСТЬ ВХОДИТ:
            </p>
            
            <div className="space-y-3 text-[10.5px] leading-relaxed text-[#fcf9f5]/85 font-sans">
              <div>
                <span className="font-bold text-[#f5cfc9] uppercase block mb-0.5 text-[9.5px]">НАРАЩИВАНИЕ:</span>
                снятие старого покрытия, чистый маникюр, бережное наращивание (верхние/нижние формы), укрепление архитектуры, покрытие premium гель-лаком.
              </div>
              
              <div className="border-t border-[#e89a8e]/5 pt-2">
                <span className="font-bold text-[#f5cfc9] uppercase block mb-0.5 text-[9.5px]">КОРРЕКЦИЯ:</span>
                снятие предыдущего покрытия, гигиенический маникюр, ремонт мелких трещин / донаращивание уголков, укрепление архитектуры, свежий гель-лак.
              </div>

              <div className="border-t border-[#e89a8e]/5 pt-2 flex items-center gap-1.5 text-[#f5cfc9] font-bold uppercase text-[9px]">
                <Star className="w-3.5 h-3.5 fill-[#e89a8e] text-[#e89a8e]" />
                легкий дизайн входит в стоимость
              </div>
            </div>
          </div>

          {/* Two Distinct Additional Items */}
          <div className="mt-6 border-t border-[#e89a8e]/15 pt-6 space-y-3 relative z-10">
            {[
              { label: 'ПОЛНОЕ СНЯТИЕ', price: '400 ₽' },
              { label: 'МАНИКЮР БЕЗ ПОКРЫТИЯ', price: '800 ₽' }
            ].map((addon, index) => (
              <div key={index} className="flex justify-between items-baseline select-text">
                <span className="font-sans text-xs sm:text-sm font-bold tracking-wider text-[#fcf9f5] shrink-0">
                  {addon.label}
                </span>
                <div className="flex-grow border-b border-dotted border-[#e89a8e]/25 mx-3" />
                <span className="font-display text-sm sm:text-base font-bold text-[#e89a8e] shrink-0">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>

          {/* Elegant Footer Notice from Screenshot */}
          <div className="mt-6 text-center text-[10px] text-[#f5cfc9]/75 font-bold uppercase tracking-widest leading-loose">
            • ОБЪЕМНЫЕ ДИЗАЙНЫ РАССЧИТЫВАЮТСЯ В ЗАВИСИМОСТИ ОТ СЛОЖНОСТИ •
          </div>

        </div>

      </div>
    </section>
  );
}
