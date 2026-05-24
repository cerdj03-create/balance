import { MapPin, Clock, Send, Phone } from 'lucide-react';
import { DaisyFlower } from './Hero';

interface BookingProps {
  onShowPrivacy: () => void;
}

export default function Booking({ onShowPrivacy }: BookingProps) {
  const mapAddress = 'г. Горячий Ключ, ул. Кучерявого, 50Б';
  const phoneVal = '+7 (918) 087-21-20';

  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#faf6f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title & Description */}
        <div className="space-y-4 max-w-xl mx-auto mb-12 reveal-on-scroll">
          <div className="flex items-center justify-center gap-3">
            <DaisyFlower className="w-10 h-10 animate-[spin_15s_linear_infinite]" />
            <h2 className="font-display text-4xl sm:text-5xl text-[#2c2523] lowercase italic tracking-tight">
              контакты
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#2c2523]/70 font-sans leading-relaxed">
            Запишитесь на идеальный маникюр. Я всегда на связи и готова подобрать для вас максимально комфортное и удобное время сеанса.
          </p>
        </div>

        {/* Contacts Cards Grid (Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10 reveal-scale">
          {/* Telegram Primary Button */}
          <a
            href="https://t.me/balance_studio_gkey"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between p-6 bg-[#e89a8e] hover:bg-[#e58f82] text-white rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-pointer min-h-[160px] text-left"
            id="booking-tg-card"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 self-start">
              <Send className="w-5 h-5 fill-white text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Написать в Telegram</h3>
              <p className="text-[11px] text-white/80 font-sans mt-0.5">Самый быстрый способ получить мгновенный ответ и забронировать свободное окно.</p>
            </div>
          </a>

          {/* Direct Phone presentation card */}
          <div
            className="group flex flex-col justify-between p-6 bg-[#f7dcd7] text-[#2c2523] rounded-[24px] border border-[#e89a8e]/15 shadow-sm min-h-[160px] text-left"
            id="booking-phone-card"
          >
            <div className="w-10 h-10 rounded-full bg-[#faf6f0] flex items-center justify-center shrink-0 self-start text-[#e89a8e]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Номер телефона</h3>
              <p className="text-sm font-semibold text-[#2c2523] mt-1 select-all">{phoneVal}</p>
              <p className="text-[10px] text-[#2c2523]/70 font-sans mt-2">Вы можете сохранить этот контакт или набрать его вручную.</p>
            </div>
          </div>
        </div>

        {/* Quick studio information details checklist */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#e89a8e]/15 select-text text-left reveal-on-scroll delay-100">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#f7dcd7]/40 flex items-center justify-center text-[#e89a8e] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#e89a8e] uppercase tracking-wider">Адрес студии</h4>
              <p className="text-sm font-semibold text-[#2c2523] mt-0.5">{mapAddress}</p>
              <p className="text-xs text-[#2c2523]/60">г. Горячий Ключ, Краснодарский край</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#f7dcd7]/40 flex items-center justify-center text-[#e89a8e] shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#e89a8e] uppercase tracking-wider">Режим работы</h4>
              <p className="text-sm font-semibold text-[#2c2523] mt-0.5">Ежедневно: с 09:00 до 21:00</p>
              <p className="text-xs text-[#2c2523]/60">Строго по предварительной записи</p>
            </div>
          </div>
        </div>

        {/* Mini compliance notice */}
        <p className="text-[10px] text-[#2c2523]/45 leading-relaxed text-center select-text pt-10">
          Связываясь со мной через мессенджеры, вы даете согласие на обработку своих данных в соответствии с <button type="button" onClick={onShowPrivacy} className="underline text-[#e89a8e] hover:text-[#e58f82] font-semibold cursor-pointer">политикой конфиденциальности РФ (ФЗ № 152)</button>.
          <br className="hidden sm:inline" /> Все персональные данные обрабатываются строго конфиденциально и не передаются третьим лицам.
        </p>

      </div>
    </section>
  );
}
