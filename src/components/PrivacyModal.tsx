import { motion } from 'motion/react';
import { X, ShieldAlert, Sparkles } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2c2523]/80 backdrop-blur-sm flex items-center justify-center p-4 select-text">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="bg-[#faf6f0] rounded-[32px] max-w-2xl w-full border border-[#e89a8e]/15 shadow-2xl overflow-hidden text-left"
      >
        {/* Header bar */}
        <div className="p-6 sm:p-8 bg-[#f7dcd7]/20 border-b border-[#e89a8e]/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#e89a8e]/10 text-[#e89a8e] rounded-xl">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2c2523]">
                Политика конфиденциальности
              </h3>
              <p className="text-[10px] text-[#e89a8e] font-bold uppercase tracking-widest mt-0.5">в соответствии с ФЗ № 152</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#e89a8e]/10 text-neutral-500 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 max-h-[350px] overflow-y-auto space-y-4 font-sans text-xs sm:text-sm text-[#2c2523]/80 leading-relaxed">
          <p className="font-semibold text-[#2c2523]">
            Настоящая Политика конфиденциальности персональных данных регулирует порядок сбора, хранения и защиты информации, предоставляемой пользователями на сайте Balance Studio.
          </p>
          
          <div className="space-y-2">
            <h4 className="font-bold text-[#2c2523] uppercase text-[11px] tracking-wide text-[#e89a8e]">
              1. Сбор персональных данных
            </h4>
            <p>
              При переходе по кнопкам записи и связи, вы можете предоставлять следующие персональные данные в мессенджеры: Имя, Номер телефона, ссылка на аккаунт в Telegram.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#2c2523] uppercase text-[11px] tracking-wide text-[#e89a8e]">
              2. Цели обработки данных
            </h4>
            <p>
              Ваши данные используются исключительно для согласования даты и времени визита в маникюрную студию, подтверждения записи, а также ответов на ваши вопросы относительно услуг и цен.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#2c2523] uppercase text-[11px] tracking-wide text-[#e89a8e]">
              3. Защита и хранение персональных данных
            </h4>
            <p>
              Мастер Анастасия обязуется не передавать полученные сведения третьим лицам. Сведения хранятся на защищенных устройствах с ограниченным доступом.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#2c2523] uppercase text-[11px] tracking-wide text-[#e89a8e]">
              4. Согласие пользователя
            </h4>
            <p>
              Переходя по прямым ссылкам связи в мессенджеры, вы безусловно соглашаетесь с обработкой ваших персональных данных.
            </p>
          </div>

          <p className="text-[11px] text-[#2c2523]/60 italic pt-2 border-t border-[#e89a8e]/10">
            Для отзыва согласия на обработку ваших данных или их изменения напишите лично в мессенджер Telegram к мастеру.
          </p>
        </div>

        {/* Footer Area */}
        <div className="p-6 sm:p-8 bg-[#fcf9f5] border-t border-[#e89a8e]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#e89a8e] hover:bg-[#e58f82] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer"
          >
            Принять и закрыть
          </button>
        </div>
      </motion.div>
    </div>
  );
}
