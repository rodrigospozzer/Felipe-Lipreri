const fs = require('fs');

const replacement = `      {/* 1. HERO - REDESIGN PREMIUM EDITORIAL */}
      <section id="hero" className="relative bg-[#041E42] pt-8 md:pt-16 pb-12 md:pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
            
            {/* TEXT COLUMN */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center relative z-20 pt-4 lg:pt-12">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-[2px] bg-[#F28C28]"></div>
                <span className="text-[#F28C28] font-bold text-xs md:text-sm uppercase tracking-widest">
                  Serra Gaúcha e Região
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
                Climatização e elétrica com <span className="text-[#3BA7DB] italic font-light">acabamento de verdade.</span>
              </h1>
              
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 md:mb-12 max-w-md">
                Conforto, segurança e serviço técnico focado no detalhe. Atendimento direto e sem intermediários.
              </p>
              
              <div className="flex flex-col items-start gap-8">
                <a
                  href={\`https://wa.me/\${siteConfig.contact.whatsapp}\`}
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 md:px-10 md:py-5 text-lg font-bold transition-all hover:-translate-y-1 shadow-lg hover:shadow-[#25D366]/20 rounded-full w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Peça seu Orçamento
                </a>

                {/* Social Proof Text - Compact */}
                <div className="flex items-center gap-4 text-sm font-medium text-white/80">
                  <div className="flex text-[#F28C28]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span>Avaliações 5 estrelas</span>
                </div>
              </div>
            </div>

            {/* IMAGE COLUMN - PROTAGONIST */}
            <div className="w-full lg:w-7/12 relative mt-8 lg:mt-0">
              {/* Desktop Composition */}
              <div className="hidden lg:block relative w-full h-[75vh] min-h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image 
                  src="/images/imgi_34_696264296_18072934913410956_1703139684847338476_n.jpg"
                  alt="Felipe Lipreri em atendimento"
                  fill
                  className="object-cover object-[center_30%] transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041E42]/80 via-transparent to-transparent"></div>
                
                {/* Secondary Image Overlapping */}
                <div className="absolute -left-12 bottom-12 w-64 h-72 rounded-2xl overflow-hidden border-8 border-[#041E42] shadow-2xl z-20">
                  <Image 
                    src="/images/imgi_24_797101896_18092704553410956_1716728865092901056_n.jpg" 
                    alt="Acabamento técnico no telhado" 
                    fill 
                    className="object-cover" 
                  />
                </div>

                <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl max-w-xs">
                  <p className="text-white font-semibold text-lg leading-tight mb-2">Atendimento Direto</p>
                  <p className="text-white/80 text-sm">Do primeiro contato até o serviço pronto, você fala comigo.</p>
                </div>
              </div>

              {/* Mobile Composition */}
              <div className="lg:hidden relative w-full aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl mt-4">
                <Image 
                  src="/images/imgi_34_696264296_18072934913410956_1703139684847338476_n.jpg"
                  alt="Felipe Lipreri em atendimento"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041E42] via-[#041E42]/20 to-transparent"></div>
                
                {/* Mobile Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EBF5FB] text-[#3BA7DB] flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-[#041E42] font-bold leading-tight">Atendimento Direto</p>
                    <p className="text-[#041E42]/70 text-xs mt-0.5">Sem intermediários na execução.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>`;

const code = fs.readFileSync('app/page.tsx', 'utf8');

// Find the start and end of the hero section
const startPattern = '      {/* 1. HERO */}';
const endPattern = '      {/* 2. SERVICES */}';

const startIndex = code.indexOf(startPattern);
const endIndex = code.indexOf(endPattern);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find Hero section boundaries");
  process.exit(1);
}

const newCode = code.substring(0, startIndex) + replacement + '\n\n' + code.substring(endIndex);

fs.writeFileSync('app/page.tsx', newCode);
console.log("Hero successfully replaced!");
