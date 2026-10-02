const fs = require('fs');

const pageContent = `import { siteConfig } from "@/data/site.config";
import { content } from "@/data/content";
import Image from "next/image";
import { Header } from "@/components/header";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#041E42] font-sans selection:bg-[#F28C28] selection:text-white">
      <Header />

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-24 pb-12 lg:pt-0 lg:pb-0 min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row items-center overflow-hidden">
        {/* Text Column (approx 35-40%) */}
        <div className="w-full lg:w-[40%] px-6 lg:px-12 xl:px-16 z-10 flex flex-col justify-center h-full order-2 lg:order-1 mt-12 lg:mt-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#F28C28]"></div>
            <span className="text-sm font-semibold tracking-widest text-[#F28C28] uppercase">
              {content.hero.eyebrow}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight text-[#041E42] mb-6 text-balance">
            {content.hero.title}
          </h1>
          
          <p className="text-lg text-[#041E42]/70 leading-relaxed mb-10 max-w-lg">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href={\`https://wa.me/\${siteConfig.contact.whatsapp}\`}
              className="inline-flex items-center justify-center bg-[#F28C28] text-white px-8 py-4 text-base font-bold transition-transform hover:-translate-y-1"
            >
              {content.hero.cta}
            </a>
            <div className="flex flex-col gap-1">
              <div className="flex text-[#F28C28]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#041E42]/60">{content.hero.proof}</span>
            </div>
          </div>
        </div>

        {/* Image Column (approx 60-65%) */}
        <div className="w-full lg:w-[60%] lg:absolute lg:top-0 lg:right-0 lg:h-full order-1 lg:order-2">
          <div className="relative w-full h-[50vh] lg:h-full">
            <Image
              src="/images/imgi_34_696264296_18072934913410956_1703139684847338476_n.jpg"
              alt="Instalação de Ar Condicionado em Nova Petrópolis"
              fill
              className="object-cover object-center lg:object-[center_30%]"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </section>

      {/* PROOF / DIFFERENTIALS */}
      <section id="diferenciais" className="py-24 md:py-32 bg-[#F1F6FA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-12 h-[2px] bg-[#F28C28] mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#041E42] max-w-2xl leading-tight">
              A diferença está na forma como o trabalho é entregue.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 border-t border-[#041E42]/10 pt-16">
            {[
              { num: '01', title: 'Capricho e acabamento', desc: 'Instalação organizada, limpa e esteticamente discreta, preservando o seu ambiente.' },
              { num: '02', title: 'Segurança técnica', desc: 'Profundo conhecimento de normas elétricas e boas práticas para evitar riscos.' },
              { num: '03', title: 'Pontualidade rigorosa', desc: 'Respeitamos seu tempo. Cumprimos sempre o dia e o horário combinados.' }
            ].map((diff, index) => (
              <div key={index} className="flex flex-col relative group">
                <span className="text-[6rem] font-bold text-[#3BA7DB]/20 leading-none absolute -top-10 -left-4 pointer-events-none transition-transform group-hover:-translate-y-2">
                  {diff.num}
                </span>
                <div className="relative z-10 pt-6">
                  <h3 className="text-xl font-bold text-[#041E42] mb-3">{diff.title}</h3>
                  <p className="text-[#041E42]/70 leading-relaxed">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Complementary Differentials List */}
          <div className="mt-20 pt-10 border-t border-[#041E42]/10 flex flex-wrap gap-x-12 gap-y-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#F28C28]">Também garantimos:</span>
            <span className="text-sm font-semibold text-[#041E42]/80">Agilidade no atendimento</span>
            <span className="text-sm font-semibold text-[#041E42]/80">Explicação clara</span>
            <span className="text-sm font-semibold text-[#041E42]/80">Preço justo e transparente</span>
          </div>
        </div>
      </section>

      {/* REAL WORK / GALLERY */}
      <section id="galeria" className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#041E42] leading-tight">
                Instalação real.<br />Padrão impecável.
              </h2>
            </div>
            <p className="text-lg text-[#041E42]/70 max-w-md">
              Nenhuma foto comprada. Nosso portfólio reflete exatamente o nível de exigência e limpeza do serviço entregue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {/* Foto 1 - Vertical Large */}
            <div className="md:col-span-5 md:row-span-2 relative group overflow-hidden bg-[#F1F6FA]">
              <Image 
                src="/images/imgi_24_797101896_18092704553410956_1716728865092901056_n.jpg"
                alt="Instalação caprichada"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Foto 2 - Horizontal */}
            <div className="md:col-span-7 relative group overflow-hidden bg-[#041E42]">
              <Image 
                src="/images/imgi_29_722313928_18078109142410956_6371540210880806133_n.jpg"
                alt="Detalhe de instalação"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Foto 3 - Square */}
            <div className="md:col-span-4 relative group overflow-hidden bg-[#F28C28]">
              <Image 
                src="/images/imgi_22_688061696_18071563547410956_6063225042114791600_n.jpg"
                alt="Acabamento perfeito"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Foto 4 - Square */}
            <div className="md:col-span-3 relative group overflow-hidden bg-[#3BA7DB]">
              <Image 
                src="/images/imgi_31_720398730_18076913360410956_6428894448538040989_n.jpg"
                alt="Equipamento instalado"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-[#041E42] text-white border-b-8 border-[#F28C28]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Main Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <div>
              <div className="w-12 h-[2px] bg-[#3BA7DB] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                Climatização de alto padrão.
              </h2>
              <div className="flex flex-col gap-10">
                {content.services.slice(0, 3).map((service, index) => (
                  <div key={index} className="pb-8 border-b border-white/20 last:border-0">
                    <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-auto w-full lg:h-full">
              <Image 
                src="/images/imgi_25_800755883_18091242767410956_5339602096009869201_n.jpg"
                alt="Serviços de climatização"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Complementary Services */}
          <div className="border-t border-white/20 pt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-10">Elétrica & Complementares</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.services.slice(3, 6).map((service, index) => (
                <div key={index} className="bg-white/5 p-8 border-l-2 border-[#F28C28] hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT FELIPE */}
      <section id="about" className="py-24 md:py-32 bg-[#F1F6FA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/o felipe.jpg"
                alt={content.about.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#041E42] hidden md:block"></div>
            </div>

            <div>
              <div className="w-16 h-[2px] bg-[#F28C28] mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#041E42] mb-8 leading-tight">
                {content.about.title}
              </h2>
              <p className="text-xl text-[#041E42]/80 leading-relaxed mb-10 text-pretty">
                {content.about.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div>
                  <p className="font-bold text-[#041E42]">Felipe Lipreri</p>
                  <p className="text-sm text-[#041E42]/60 uppercase tracking-widest">Especialista Técnico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#041E42] leading-tight">
              Trabalho provado e aprovado.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Primary Testimonial */}
            <div className="lg:col-span-7 bg-[#041E42] p-10 md:p-16 text-white relative">
              <span className="absolute top-8 left-8 text-6xl text-[#3BA7DB] opacity-30 font-sans leading-none">"</span>
              <div className="flex text-[#F28C28] mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10">
                {content.testimonials[0].text}
              </p>
              <div>
                <p className="font-bold text-lg">{content.testimonials[0].name}</p>
                <p className="text-sm text-[#3BA7DB] uppercase tracking-wider mt-1">{content.testimonials[0].service}</p>
              </div>
            </div>

            {/* Secondary Testimonials */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {content.testimonials.slice(1, 3).map((test, i) => (
                <div key={i} className="bg-[#F1F6FA] p-8 md:p-10 h-full flex flex-col justify-center">
                  <div className="flex text-[#F28C28] mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-[#041E42]/80 leading-relaxed mb-6 italic">
                    "{test.text}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-[#041E42]">{test.name}</p>
                    <p className="text-xs text-[#041E42]/50 uppercase tracking-wider mt-1">{test.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="final-cta" className="py-24 md:py-32 bg-[#041E42] border-t border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col items-center">
          <div className="w-12 h-[2px] bg-[#F28C28] mb-10"></div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            {content.finalCta.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl text-pretty leading-relaxed">
            {content.finalCta.subtitle}
          </p>
          <a
            href={\`https://wa.me/\${siteConfig.contact.whatsapp}\`}
            className="inline-flex items-center justify-center bg-[#F28C28] text-white px-10 py-5 text-xl font-bold transition-transform hover:-translate-y-2"
          >
            {content.finalCta.cta}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#041E42] border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-white/60 text-sm">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative h-8 w-24 mb-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <Image 
                src="/brand/logo.png" 
                alt={siteConfig.name}
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
            <p className="font-bold text-white mb-1">{content.footer.description}</p>
            <p>{siteConfig.location.address}</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">{content.footer.copyright}</p>
            <a href="#hero" className="hover:text-white transition-colors">Voltar ao topo ↑</a>
          </div>
        </div>
      </footer>

      {/* FAB WHATSAPP */}
      <a 
        href={\`https://wa.me/\${siteConfig.contact.whatsapp}\`}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 shadow-2xl hover:scale-110 transition-transform flex items-center justify-center rounded-none"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

    </main>
  );
}
`;

fs.writeFileSync('app/page.tsx', pageContent);
