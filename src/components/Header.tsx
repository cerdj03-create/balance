import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Send, Phone } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'portfolio', label: 'Мои работы' },
    { id: 'price', label: 'Прайс-лист' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'booking', label: 'Контакты' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onScrollTo(id);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#faf6f0]/95 backdrop-blur-md border-b border-[#e89a8e]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <div 
              onClick={() => onScrollTo('hero')} 
              className="flex items-center gap-2.5 cursor-pointer group"
              id="h-logo"
            >
              <div className="w-9 h-9 rounded-full bg-[#f7dcd7] flex items-center justify-center text-[#e89a8e] group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-normal tracking-wide text-[#2c2523] lowercase">
                  balance
                  <span className="font-serif text-xs italic text-[#e89a8e] ml-1 font-bold">studio</span>
                </span>
                <span className="text-[9px] text-[#e89a8e] tracking-widest uppercase -mt-1 font-semibold">
                  goryachy klyuch
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="font-sans text-sm font-medium text-[#2c2523]/80 hover:text-[#e89a8e] transition-colors relative py-2 group cursor-pointer"
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e89a8e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('booking')}
                className="px-5 py-2.5 bg-[#e89a8e] hover:bg-[#e58f82] text-white text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer"
                id="header-cta"
              >
                Записаться
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#2c2523] hover:text-[#e89a8e] transition-colors rounded-full"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-18 sm:top-20 z-40 md:hidden bg-[#fcf9f5]/98 border-b border-[#e89a8e]/15 shadow-lg overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left px-4 py-3 bg-[#faf6f0] h-12 flex items-center rounded-xl text-base font-medium text-[#2c2523] border border-transparent hover:border-[#e89a8e]/25 hover:bg-[#f7dcd7]/30 transition-all duration-200 cursor-pointer"
                    id={`mobile-nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-[#2c2523]/5 space-y-3">
                <a
                  href="https://t.me/balance_studio_gkey"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-12 flex items-center justify-center gap-2 bg-[#e89a8e] text-white rounded-xl font-medium text-sm transition-all hover:bg-[#e58f82] cursor-pointer"
                  id="mobile-menu-tg"
                >
                  <Send className="w-4 h-4 fill-white text-white" />
                  Запись в Telegram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
