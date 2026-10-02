const fs = require('fs');

const pageContent = `import { siteConfig } from "@/data/site.config";
import { content } from "@/data/content";
import Image from "next/image";
import { Header } from "@/components/header";
import { Star, MapPin, User, Tag, Clock, Sparkles, ShieldCheck, Zap, MessageCircle, ThumbsUp, AirVent, Wrench, Droplets, PlugZap, Camera, Lightbulb, ChevronDown, CheckCircle2, Check, FileText, Settings } from "lucide-react";

const getIcon = (iconName: string, className?: string) => {
  const icons: any = {
    Clock, Sparkles, ShieldCheck, Zap, MessageCircle, ThumbsUp, 
    AirVent, Wrench, Droplets, PlugZap, Camera, Lightbulb
  };
  const Icon = icons[iconName];
  return Icon ? <Icon className={className} /> : null;
};

// Map real images to services for mobile
const serviceImages = [
  "/images/imgi_31_720398730_18076913360410956_6428894448538040989_n.jpg", // Instalação
  "/images/imgi_36_684244053_18070584083410956_6615980530227540354_n.jpg", // Manutenção
  "/images/imgi_22_688061696_18071563547410956_6063225042114791600_n.jpg", // Higienização
  "/images/imgi_41_656050637_18063014828410956_4131112646853627750_n.jpg", // Elétrica
  "/images/imgi_25_800755883_18091242767410956_5339602096009869201_n.jpg", // Câmeras
  "/images/imgi_38_670877998_1858325508177289_8464701839609986011_n.jpg", // Iluminação
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#041E42] font-sans">
      <Header />

      {/* 1. HERO */}
      <section id="hero" className="relative bg-[#041E42] pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col z-10 text-white order-1 md:order-1">
              <span className="text-[#F28C28] font-semibold text-sm uppercase tracking-wider mb-4">
                {content.hero.eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                Climatização, elétrica e <span className="text-[#3BA7DB]">segurança com serviço bem feito.</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={\`https://wa.me/\${siteConfig.contact.whatsapp}\`}
                  className="bg-[#F28C28] text-white px-8 py-4 rounded-xl text-center font-bold text-lg hover:bg-[#F28C28]/90 transition"
                >
                  {content.hero.cta}
                </a>
                <a
                  href={\`https://wa.me/\${siteConfig.contact.whatsapp}\`}
                  className="border border-white text-white px-8 py-4 rounded-xl text-center font-bold text-lg hover:bg-white/10 transition"
                >
                  Chamar no WhatsApp
                </a>
              </div>

              {/* Trust Badges - Desktop */}
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#F28C28]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span>5 estrelas no Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3BA7DB]"></div>
                  <span>Atendimento direto</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3BA7DB]"></div>
                  <span>Preço justo</span>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative h-[400px] md:h-[500px] w-full order-2 md:order-2 rounded-2xl md:rounded-tl-[80px] md:rounded-br-[80px] md:rounded-tr-2xl md:rounded-bl-2xl overflow-hidden">
              <Image 
                src="/images/imgi_34_696264296_18072934913410956_1703139684847338476_n.jpg"
                alt="Felipe Lipreri"
                fill
                className="object-cover object-[center_30%]"
                priority
              />
              
              {/* Desktop overlapping images */}
              <div className="hidden md:block absolute top-8 -left-8 w-40 h-40 rounded-2xl overflow-hidden border-4 border-[#041E42] shadow-xl">
                <Image src="/images/imgi_24_797101896_18092704553410956_1716728865092901056_n.jpg" alt="Roof work" fill className="object-cover" />
              </div>
              <div className="hidden md:block absolute bottom-8 left-8 w-48 h-32 rounded-2xl overflow-hidden border-4 border-[#041E42] shadow-xl">
                <Image src="/images/imgi_29_722313928_18078109142410956_6371540210880806133_n.jpg" alt="Indoor work" fill className="object-cover" />
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl text-center hidden md:block">
                <span className="block text-[#F28C28] font-bold text-2xl">6 serviços</span>
                <span className="text-[#041E42] text-xs font-semibold">climatização · elétrica · segur...</span>
              </div>
            </div>

            {/* Trust Badges - Mobile */}
            <div className="md:hidden w-full order-3 bg-white rounded-2xl p-6 shadow-sm flex justify-between items-start text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#FFF5E5] text-[#F28C28] flex items-center justify-center">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs font-semibold text-[#041E42] leading-tight">5 estrelas<br/>no Google</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#EBF5FB] text-[#3BA7DB] flex items-center justify-center">
                  <User className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs font-semibold text-[#041E42] leading-tight">Atendimento<br/>direto</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#EBF5FB] text-[#3BA7DB] flex items-center justify-center">
                  <Tag className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs font-semibold text-[#041E42] leading-tight">Preço<br/>justo</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#EBF5FB] text-[#3BA7DB] flex items-center justify-center">
                  <MapPin className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs font-semibold text-[#041E42] leading-tight">Serra Gaúcha<br/>e região</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES */}
      <section id="services" className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[#F28C28] font-bold text-sm uppercase tracking-wider mb-2 block">Soluções completas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#041E42] mb-12 max-w-2xl">
            Conforto e segurança para sua casa ou empresa.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col group">
                {/* Mobile Image */}
                <div className="md:hidden relative h-48 w-full">
                  <Image src={serviceImages[idx]} alt={service.title} fill className="object-cover" />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  {/* Desktop Icon */}
                  <div className="hidden md:flex w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#3BA7DB] items-center justify-center mb-6">
                    {getIcon(service.icon, "w-6 h-6")}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#041E42] mb-3">{service.title}</h3>
                  <p className="text-[#041E42]/70 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  <a href={\`https://wa.me/\${siteConfig.contact.whatsapp}\`} className="inline-flex items-center text-[#041E42] font-bold text-sm group-hover:text-[#3BA7DB] transition-colors">
                    Solicitar orçamento <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile bottom banner */}
          <div className="md:hidden mt-8 bg-[#041E42] rounded-2xl p-6 flex items-center justify-between">
            <span className="text-white font-bold leading-tight">Soluções completas<br/>com qualidade e garantia.</span>
            <div className="w-10 h-10 rounded-full bg-[#3BA7DB] flex items-center justify-center text-white">→</div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT / DIFFERENTIALS */}
      <section id="diferenciais" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative aspect-[4/5] w-full rounded-2xl md:rounded-tr-[80px] md:rounded-bl-[80px] overflow-hidden order-2 lg:order-1">
              <Image 
                src="/images/imgi_24_797101896_18092704553410956_1716728865092901056_n.jpg"
                alt="Felipe trabalhando"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#F28C28] rounded-tr-[100px] -z-10 hidden md:block"></div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[#F28C28] font-bold text-sm uppercase tracking-wider mb-2 block">Por que escolher Felipe Lipreri</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#041E42] mb-6">
                Cuidado técnico que aparece no resultado.
              </h2>
              <p className="text-lg text-[#041E42]/70 leading-relaxed mb-10">
                Atendimento direto com o profissional, explicação clara e execução organizada. A proposta é cuidar do conforto e da segurança do ambiente, da instalação à manutenção preventiva.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.differentials.map((diff, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 flex gap-4 items-start">
                    <div className="min-w-[32px] h-8 rounded-full bg-[#EBF5FB] text-[#3BA7DB] flex items-center justify-center mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#041E42] mb-1 text-sm">{diff.title}</h4>
                      <p className="text-[#041E42]/60 text-xs leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 bg-[#041E42] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[#F28C28] font-bold text-sm uppercase tracking-wider mb-2 block">Como funciona</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Do primeiro contato ao serviço pronto.
          </h2>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            <div className="bg-[#0A2540] rounded-2xl p-10 relative">
              <span className="text-[#3BA7DB] text-4xl font-bold mb-6 block">01</span>
              <div className="absolute top-10 right-10 w-10 h-10 rounded-full bg-[#F28C28] flex items-center justify-center text-white">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Chame no WhatsApp</h3>
              <p className="text-white/70">Conte o que você precisa e envie fotos do local ou do equipamento, quando necessário.</p>
            </div>
            <div className="bg-[#0A2540] rounded-2xl p-10 relative">
              <span className="text-[#3BA7DB] text-4xl font-bold mb-6 block">02</span>
              <div className="absolute top-10 right-10 w-10 h-10 rounded-full bg-[#F28C28] flex items-center justify-center text-white">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Avaliação e orçamento</h3>
              <p className="text-white/70">Felipe avalia o serviço, explica a melhor solução e apresenta o orçamento com transparência.</p>
            </div>
            <div className="bg-[#0A2540] rounded-2xl p-10 relative">
              <span className="text-[#3BA7DB] text-4xl font-bold mb-6 block">03</span>
              <div className="absolute top-10 right-10 w-10 h-10 rounded-full bg-[#F28C28] flex items-center justify-center text-white">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Serviço com acabamento limpo</h3>
              <p className="text-white/70">Execução cuidadosa, organizada e focada em segurança, eficiência e resultado final.</p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-8 relative">
            <div className="absolute left-6 top-8 bottom-8 w-px border-l border-dashed border-[#3BA7DB]/50"></div>
            
            <div className="flex gap-6 relative z-10">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#3BA7DB] text-xl font-bold">01</span>
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-lg font-bold mb-2">Chame no WhatsApp</h3>
                <p className="text-white/70 text-sm">Tire suas dúvidas e fale sobre sua necessidade.</p>
              </div>
            </div>

            <div className="flex gap-6 relative z-10">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#3BA7DB] text-xl font-bold">02</span>
                <div className="w-12 h-12 rounded-full bg-[#F28C28] flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-lg font-bold mb-2">Avaliação e orçamento</h3>
                <p className="text-white/70 text-sm">Visita técnica, análise e orçamento sem compromisso.</p>
              </div>
            </div>

            <div className="flex gap-6 relative z-10">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#3BA7DB] text-xl font-bold">03</span>
                <div className="w-12 h-12 rounded-full bg-[#3BA7DB] flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-lg font-bold mb-2">Serviço com acabamento limpo</h3>
                <p className="text-white/70 text-sm">Execução com qualidade e ambiente organizado.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ANTES E DEPOIS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[#F28C28] font-bold text-sm uppercase tracking-wider mb-2 block">Antes e depois</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#041E42] mb-12">
            O cuidado que você consegue ver.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
                <source src="/images/antes ar condicionado sujo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-between p-6">
                <span className="bg-white text-[#041E42] font-bold px-4 py-2 rounded-full w-max text-xs uppercase tracking-wider">Antes</span>
                <p className="text-white font-bold text-lg">Acúmulo de sujeira no equipamento</p>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90">
                <source src="/images/depois ar condicionado limpo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-between p-6">
                <span className="bg-[#F28C28] text-white font-bold px-4 py-2 rounded-full w-max text-xs uppercase tracking-wider">Depois</span>
                <p className="text-white font-bold text-lg">Equipamento limpo e higienizado</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#F28C28] pl-6">
            <p className="text-2xl font-bold italic text-[#041E42]">“Invista no que você respira todos os dias.”</p>
          </div>
        </div>
      </section>

      {/* 6. REAL WORK / GALLERY (Desktop Only per Mockup) */}
      <section className="hidden md:block py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-[#F28C28] font-bold text-sm uppercase tracking-wider mb-2 block">Trabalho Real</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#041E42] mb-12">
            Instalações, manutenção e acabamento em campo.
          </h2>

          <div className="grid grid-cols-12 gap-6 h-[600px]">
            <div className="col-span-4 relative rounded-2xl overflow-hidden">
              <Image src="/images/imgi_36_684244053_18070584083410956_6615980530227540354_n.jpg" alt="Instalação" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold">Instalação limpa e acabamento</p>
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-6">
              <div className="flex-1 relative rounded-2xl overflow-hidden">
                <Image src="/images/imgi_29_722313928_18078109142410956_6371540210880806133_n.jpg" alt="Trabalho" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold text-sm">Higienização com proteção</p>
                </div>
              </div>
              <div className="flex-1 relative rounded-2xl overflow-hidden">
                <Image src="/images/imgi_31_720398730_18076913360410956_6428894448538040989_n.jpg" alt="Aparelho" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold text-sm">Climatização residencial</p>
                </div>
              </div>
            </div>
            <div className="col-span-4 relative rounded-2xl overflow-hidden">
              <Image src="/images/imgi_41_656050637_18063014828410956_4131112646853627750_n.jpg" alt="Elétrica" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#F28C28]/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-white font-bold text-4xl leading-tight mb-4" style={{textShadow: "0 2px 10px rgba(0,0,0,0.5)"}}>
                  Excelência<br/>Técnica<br/>Segurança
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-bold">Excelência técnica e segurança</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-[#F8FAFC] md:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-[#F28C28] font-bold text-sm uppercase tracking-wider mb-2 block">Avaliações Reais</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#041E42]">Quem contrata, recomenda.</h2>
            </div>
            <div className="bg-[#041E42] rounded-xl px-6 py-4 flex flex-col items-center justify-center">
              <div className="flex text-[#F28C28] mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-white text-xs font-medium">5 estrelas nas avaliações do Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.testimonials.slice(0,4).map((test, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col">
                <div className="flex text-[#F28C28] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-[#041E42]/80 leading-relaxed font-medium flex-1 mb-8">
                  {test.text}
                </p>
                <div className="flex justify-between items-end border-t border-[#041E42]/10 pt-4">
                  <span className="font-bold text-[#041E42] text-sm">{test.name}</span>
                  <span className="text-xs text-[#041E42]/50">{test.service}</span>
                </div>
              </div>
            ))}
            {/* Adicionando mais um card para simular o mockup que tem 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col hidden md:flex">
              <div className="flex text-[#F28C28] mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-[#041E42]/80 leading-relaxed font-medium flex-1 mb-8">
                “Ótimo profissional, pontual, serviço de qualidade e preço justo. Já indiquei para familiares e amigos.”
              </p>
              <div className="flex justify-between items-end border-t border-[#041E42]/10 pt-4">
                <span className="font-bold text-[#041E42] text-sm">Fernando M.</span>
                <span className="text-xs text-[#041E42]/50">Manutenção</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ & CONTACT (Desktop split / Mobile stacked) */}
      <section className="bg-[#041E42] text-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact / Info */}
            <div>
              <span className="text-[#F28C28] font-bold text-sm uppercase tracking-wider mb-2 block">Peça seu orçamento</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Qualidade, pontualidade e confiança.
              </h2>
              <p className="text-white/70 text-lg mb-12">
                Atendimento em Nova Petrópolis, Serra Gaúcha e região. Fale diretamente com Felipe e solicite seu orçamento sem compromisso.
              </p>

              <div className="flex flex-col gap-4">
                <a href={\`https://wa.me/\${siteConfig.contact.whatsapp}\`} className="bg-white/10 hover:bg-white/20 transition rounded-xl p-4 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">WhatsApp</p>
                      <p className="font-bold">{(siteConfig.contact as any).whatsappFormatted || "(54) 99120-5801"}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#3BA7DB] flex items-center justify-center group-hover:scale-110 transition">
                    <span className="text-white font-bold">→</span>
                  </div>
                </a>
                
                <a href="https://instagram.com/lipreri.climatizacao" className="bg-white/10 hover:bg-white/20 transition rounded-xl p-4 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Instagram</p>
                      <p className="font-bold">@lipreri.climatizacao</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F28C28] flex items-center justify-center group-hover:scale-110 transition">
                    <span className="text-white font-bold">→</span>
                  </div>
                </a>

                <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#3BA7DB] flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Área de atendimento</p>
                      <p className="font-bold text-sm">Nova Petrópolis · Serra Gaúcha e região</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#3BA7DB] flex items-center justify-center">
                    <span className="text-white font-bold">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white text-[#041E42] rounded-2xl p-8 md:p-12 shadow-xl">
              <span className="text-[#F28C28] font-bold text-sm uppercase tracking-wider mb-6 block">Dúvidas Frequentes</span>
              
              <div className="flex flex-col">
                <details className="group border-b border-[#041E42]/10 py-6" open>
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
                    Quais serviços são realizados?
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5 text-[#3BA7DB]" />
                    </span>
                  </summary>
                  <p className="text-[#041E42]/70 mt-4 text-sm leading-relaxed">
                    Instalação, manutenção, limpeza e higienização de ar condicionado, elétrica em geral, câmeras de segurança e iluminação.
                  </p>
                </details>
                
                <details className="group border-b border-[#041E42]/10 py-6">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
                    Você atende fora de Nova Petrópolis?
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5 text-[#3BA7DB]" />
                    </span>
                  </summary>
                  <p className="text-[#041E42]/70 mt-4 text-sm leading-relaxed">
                    Sim. O atendimento contempla Nova Petrópolis, Serra Gaúcha e região.
                  </p>
                </details>

                <details className="group border-b border-[#041E42]/10 py-6">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
                    Como é feito o orçamento?
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5 text-[#3BA7DB]" />
                    </span>
                  </summary>
                  <p className="text-[#041E42]/70 mt-4 text-sm leading-relaxed">
                    O contato é direto pelo WhatsApp. Explique o que precisa e envie fotos, quando necessário, para facilitar a avaliação inicial.
                  </p>
                </details>

                <details className="group border-b border-[#041E42]/10 py-6">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
                    Vocês fazem higienização de ar condicionado?
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5 text-[#3BA7DB]" />
                    </span>
                  </summary>
                  <p className="text-[#041E42]/70 mt-4 text-sm leading-relaxed">
                    Sim. A limpeza é feita com proteção do ambiente e foco em deixar o aparelho limpo, saudável e sem odores.
                  </p>
                </details>

                <details className="group py-6">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
                    Também trabalham com elétrica e segurança?
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5 text-[#3BA7DB]" />
                    </span>
                  </summary>
                  <p className="text-[#041E42]/70 mt-4 text-sm leading-relaxed">
                    Sim. Há serviços de elétrica em geral, instalação de câmeras de segurança e iluminação.
                  </p>
                </details>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 -translate-y-10">
          <div className="bg-[#F28C28] rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#041E42] mb-4">
                Pronto para cuidar melhor do conforto e da segurança do seu ambiente?
              </h2>
              <p className="text-[#041E42]/80 font-medium">
                Fale agora pelo WhatsApp e solicite seu orçamento sem compromisso.
              </p>
            </div>
            <a
              href={\`https://wa.me/\${siteConfig.contact.whatsapp}\`}
              className="bg-[#041E42] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-4 hover:bg-[#0A2540] transition whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#041E42] pb-12 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center border-t border-white/10 pt-12 text-center text-white/60 text-sm">
            <div className="relative h-12 w-32 mb-6">
              <Image 
                src="/brand/logo.png" 
                alt={siteConfig.name}
                fill
                className="object-contain object-center"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
              <span>Instalação</span>
              <span>·</span>
              <span>Manutenção</span>
              <span>·</span>
              <span>Elétrica</span>
              <span>·</span>
              <span>Câmeras</span>
              <span>·</span>
              <span>Iluminação</span>
            </div>

            <div className="flex flex-col gap-3 font-medium text-white/80">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-[#3BA7DB]" /> Nova Petrópolis · Serra Gaúcha e região
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> (54) 99120-5801
              </div>
              <div className="flex items-center justify-center gap-2">
                <Camera className="w-4 h-4 text-[#F58529]" /> @lipreri.climatizacao
              </div>
            </div>
            
          </div>
        </div>
      </footer>

    </main>
  );
}
`;

fs.writeFileSync('app/page.tsx', pageContent);
