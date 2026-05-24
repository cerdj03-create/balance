import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, X, Send, Clock, Sparkles } from 'lucide-react';

interface FloatingBookingButtonProps {
  visible: boolean;
}

export default function FloatingBookingButton({ visible }: FloatingBookingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {visible && !isOpen && (
          <motion.button
            key="floating-btn"
            id="floating-booking-btn"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.05, 1],
              y: 0 
            }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              scale: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2.2,
                ease: "easeInOut"
              },
              opacity: { duration: 0.3 },
              y: { duration: 0.3 }
            }}
            className="fixed right-4 sm:right-8 bottom-4 sm:bottom-8 z-40 flex items-center gap-2.5 px-6 py-4 bg-[#e89a8e] hover:bg-[#e58f82] text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-[0_10px_35px_rgba(232,154,142,0.4)] hover:shadow-[0_12px_40px_rgba(232,154,142,0.6)] transition-shadow duration-300 cursor-pointer border border-white/20 select-none font-sans"
          >
            <Calendar className="w-4 h-4" />
            <span>Записаться</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Booking Dialog Modal Container */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
            {/* Backdrop lock */}
            <motion.div
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/45 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body Card */}
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-md bg-[#faf6f0] rounded-b-none rounded-t-[32px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_20px_60px_rgba(44,37,35,0.18)] border border-[#e89a8e]/15 z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e89a8e]/5 rounded-full blur-2xl -z-10" />

              {/* Close Button UI wrapper */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 rounded-full bg-[#f7dcd7]/40 text-[#2c2523] flex items-center justify-center hover:bg-[#f7dcd7]/75 transition-colors cursor-pointer"
                id="close-booking-modal-btn"
                aria-label="Закрыть"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Icon & Branding */}
              <div className="flex flex-col items-center text-center mt-2 mb-6 sm:mb-8">
                <div className="w-12 h-12 rounded-full bg-[#f7dcd7]/50 flex items-center justify-center text-[#e89a8e] mb-4">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="font-display text-3xl text-[#2c2523] lowercase italic tracking-tight">
                  запись на сеанс
                </h3>
                <p className="text-xs sm:text-sm text-[#2c2523]/70 font-sans mt-2.5 max-w-xs leading-relaxed">
                  Подберём идеальное время для вашего маникюра. Я на связи в мессенджере.
                </p>
              </div>

              {/* Fast Direct TG CTA Button */}
              <div className="space-y-4">
                <a
                  href="https://t.me/balance_studio_gkey"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#e89a8e] hover:bg-[#e58f82] text-white rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] cursor-pointer"
                  id="modal-telegram-action-link"
                >
                  <Send className="w-4.5 h-4.5 fill-white text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>записаться в Telegram</span>
                </a>

                {/* Additional Quick Working hours information details */}
                <div className="bg-[#f7dcd7]/20 rounded-2xl p-4 border border-[#e89a8e]/10 flex items-center gap-3.5 text-left">
                  <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center text-[#e89a8e] shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-[#e89a8e] uppercase tracking-wider">Режим работы</h4>
                    <p className="text-xs font-semibold text-[#2c2523] mt-0.5">Ежедневно: с 09:00 до 21:00</p>
                  </div>
                </div>
              </div>

              {/* Small footprint copy */}
              <p className="text-[9px] text-[#2c2523]/40 text-center mt-6 sm:mt-8 font-sans">
                Наш разговор будет абсолютно безопасен. Все персональные данные обрабатываются строго конфиденциально.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
