"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site.config";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* LOGO */}
        <a href="#hero" className="relative flex items-center h-10 w-32 md:h-12 md:w-40" onClick={() => setIsOpen(false)}>
          <Image 
            src="/brand/logo.png" 
            alt={siteConfig.name}
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8">
          <a href="#hero" className="text-sm font-medium hover:text-secondary transition-colors">Início</a>
          <a href="#diferentials" className="text-sm font-medium hover:text-secondary transition-colors">Diferenciais</a>
          <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">Serviços</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-secondary transition-colors">Avaliações</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            className="hidden md:flex rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 shadow-sm"
          >
            Orçamento
          </a>
          
          {/* MOBILE TOGGLE (Touch target 48x48) */}
          <button 
            className="md:hidden flex items-center justify-center w-12 h-12 text-foreground rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-2">
          <a href="#hero" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium">Início</a>
          <a href="#diferentials" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium">Diferenciais</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium">Serviços</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium">Avaliações</a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            onClick={() => setIsOpen(false)}
            className="mt-4 flex justify-center rounded-xl bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-sm"
          >
            Orçamento
          </a>
        </div>
      )}
    </header>
  );
}
