"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { Menu, X } from "lucide-react";

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#041E42] md:bg-white/95 md:backdrop-blur border-b border-white/10 md:border-[#041E42]/10 transition-all duration-300">
      <div className="mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* LOGO */}
        <a href="#hero" className="relative flex items-center h-10 w-36 md:h-12 md:w-44" onClick={() => setIsOpen(false)}>
          <Image 
            src="/brand/logo.png" 
            alt={siteConfig.name}
            fill
            className="object-contain object-left brightness-0 invert md:brightness-0 md:invert-0 opacity-90 transition-all" 
            priority
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10">
          <a href="#services" className="text-[15px] font-bold text-[#041E42] hover:text-[#F28C28] transition-colors">Serviços</a>
          <a href="#diferenciais" className="text-[15px] font-bold text-[#041E42] hover:text-[#F28C28] transition-colors">Sobre</a>
          <a href="#testimonials" className="text-[15px] font-bold text-[#041E42] hover:text-[#F28C28] transition-colors">Avaliações</a>
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-[15px] font-bold transition-transform hover:-translate-y-0.5 rounded-full shadow-sm hover:shadow-md"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Pedir orçamento
          </a>
          
          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden flex items-center justify-center w-12 h-12 text-white rounded-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full h-[calc(100vh-5rem)] bg-[#041E42] overflow-y-auto">
          <div className="flex flex-col p-6 gap-2 border-t border-white/10">
            <a href="#services" onClick={() => setIsOpen(false)} className="block py-4 px-2 text-xl font-bold text-white border-b border-white/10">Serviços</a>
            <a href="#diferenciais" onClick={() => setIsOpen(false)} className="block py-4 px-2 text-xl font-bold text-white border-b border-white/10">Sobre</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block py-4 px-2 text-xl font-bold text-white border-b border-white/10">Avaliações</a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              onClick={() => setIsOpen(false)}
              className="mt-8 flex justify-center items-center gap-2 bg-[#25D366] text-white px-6 py-4 text-lg font-bold rounded-full"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Pedir orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
