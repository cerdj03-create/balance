import { Sparkles, Send, Phone, MapPin, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  onShowPrivacy: () => void;
}

export default function Footer({ onScrollTo, onShowPrivacy }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2c2523] text-[#faf6f0]/80 pt-16 pb-8 border-t border-[#e89a8e]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 pb-12 border-b border-[#faf6f0]/10 items-start select-text">
          
          {/* Logo Column */}
          <div className="space-y-4 md:col-span-1 text-left">
            <div 
              onClick={() => onScrollTo('hero')} 
              className="flex items-center gap-2.5 cursor-pointer group"
              id="f-logo"
            >
              <div className="w-9 h-9 rounded-full bg-[#faf6f0]/10 flex items-center justify-center text-[#e89a8e] group-hover:bg-[#faf6f0]/20 transition-all">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wide text-white uppercase block">
                  Balance Studio
                </span>
                <span className="text-[9px] text-[#e89a8e] tracking-widest uppercase block -mt-1">
                  goryachy klyuch
                </span>
              </div>
            </div>
            <p className="text-xs text-[#faf6f0]/60 leading-relaxed font-sans mt-2">
              Абсолютная гармония формы, цвета и ухода. Запишитесь к действительно умелому дипломированному мастеру ногтевой эстетики.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 md:col-span-1 text-left select-none">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#e89a8e] border-l-2 border-[#e89a8e] pl-2.5">
              Навигация
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-semibold">
              <button onClick={() => onScrollTo('portfolio')} className="hover:text-[#e89a8e] transition-colors cursor-pointer self-start">Мои работы</button>
              <button onClick={() => onScrollTo('price')} className="hover:text-[#e89a8e] transition-colors cursor-pointer self-start">Прайс-лист</button>
              <button onClick={() => onScrollTo('reviews')} className="hover:text-[#e89a8e] transition-colors cursor-pointer self-start">Отзывы клиентов</button>
              <button onClick={() => onScrollTo('booking')} className="hover:text-[#e89a8e] transition-colors cursor-pointer self-start">Запись</button>
            </div>
          </div>

          {/* Contacts Column */}
          <div className="space-y-4 md:col-span-1 text-left">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#e89a8e] border-l-2 border-[#e89a8e] pl-2.5">
              Студия
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#e89a8e] shrink-0" />
                <span>г. Горячий Ключ, ул. Кучерявого, 50Б</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e89a8e] shrink-0" />
                <span>+7 (918) 087-21-20</span>
              </div>
              <a href="https://t.me/balance_studio_gkey" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#e89a8e] transition-colors">
                <Send className="w-4 h-4 text-[#e89a8e] shrink-0 fill-[#e89a8e]" />
                <span>@balance_studio_gkey</span>
              </a>
            </div>
          </div>

          {/* Legal Compliance Mini Column */}
          <div className="space-y-4 md:col-span-1 text-left">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#e89a8e] border-l-2 border-[#e89a8e] pl-2.5">
              Соглашение
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onShowPrivacy}
                className="text-xs hover:text-white underline transition-colors flex items-center gap-1.5 cursor-pointer text-left"
              >
                <Shield className="w-3.5 h-3.5" />
                Политика конфиденциальности
              </button>
              <p className="text-[10px] text-[#faf6f0]/45 leading-normal select-text">
                Направляя любые формы обратной связи на сайте, вы подтверждаете согласие с обработкой анкетных сведений по ФЗ-152 РФ.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Sub-Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#faf6f0]/40">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="select-text">
              &copy; {currentYear} Balance Studio. Студия эстетического маникюра Анастасии.
            </p>
            <p>
              Все права защищены. ИНН мастера сформирован в ФНС РФ.
            </p>
          </div>
          
          <button
            onClick={() => onScrollTo('hero')}
            className="group flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-all text-white cursor-pointer select-none"
            aria-label="Back to top"
            id="footer-back-to-top-btn"
          >
            Наверх
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
