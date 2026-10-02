# 03 Art Direction

## 1. Brand Visual Diagnosis
**BRAND_VISUAL_DIAGNOSIS**: A marca possui uma identidade clara e bem documentada com base de cores sólidas (Azul Marinho e Laranja Sol) e tipografia geométrica (Poppins). O negócio baseia-se na entrega de serviços essenciais (clima/elétrica) com os diferenciais principais de capricho, organização técnica e pontualidade. A atual deficiência material é a falta de fotos factuais de instalações e do profissional no repositório acessível, exigindo que o design e as cores assumam a responsabilidade primária de transmitir a "limpeza" e "segurança" requeridas pelo público local.

## 2. Source Hierarchy
- **SOURCES_READ**: YES
- **BRAND_MANUAL_CONSIDERED**: YES
- **REAL_ASSETS_CONSIDERED**: YES (via Inventory)
- **STYLE_SELECTION_RESPECTED**: YES

## 3. Brand Personality
- **PRECISO (Precise)**: `HOW_IT_APPEARS_VISUALLY` - Alinhamentos rigorosos, grids bem definidos, uso de linhas estruturais finas (`#D5DEE8`) que remetem a fiação/tubulação perfeitamente executada, sem pontas soltas.
- **CONFIÁVEL (Reliable)**: `HOW_IT_APPEARS_VISUALLY` - Blocos massivos de Azul Marinho em áreas de alta autoridade (como o Footer ou transições de seções), tipografia robusta em H1/H2 e contraste legível.
- **PRÓXIMO (Approachable)**: `HOW_IT_APPEARS_VISUALLY` - Temperado pelo Laranja Sol (ação) e Amarelo Raio (micro-detalhes de avaliação), evadindo a percepção de ser um serviço técnico frio e inacessível.
- **LIMPO (Clean)**: `HOW_IT_APPEARS_VISUALLY` - Respeito à recomendação de 60% de uso de Branco e Gelo Claro, criando respiros (whitespace) intencionais e organizados.

## 4. Material Opportunities
**MATERIAL_VISUAL_OPPORTUNITIES**: Sem fotos reais disponíveis no momento, a oportunidade reside em usar intensamente o sistema de design tokens já estabelecido. O foco visual será em tipografia bem desenhada, uso cirúrgico das cores da marca, ícones técnicos (outline) e composições de cards limpos para enquadrar perfeitamente os 16 depoimentos reais - que se tornam o "asset real" mais poderoso da marca.

## 5. Concept Exploration
**STATUS:** Currently in Concept Exploration Phase (Creative Quality Escalation).
- **CONSTRAINTS APPLIED:** NO glassmorphism, NO generic gradients, NO Bento, NO generic cards, NO random 3D, NO generic dashboard style, NO gratuitous dark mode.
- Três conceitos visuais totalmente distintos (explorando metáforas de Climatização, Elétrica, Marca, Serviço, e Local) foram elaborados em detalhe. Ver `docs/factory/VISUAL-CONCEPTS.md` para análise completa.
- **CONCEPT_A**: Pendente revisão
- **CONCEPT_B**: Pendente revisão
- **CONCEPT_C**: Pendente revisão
- **SELECTED_CONCEPT**: PENDING_HUMAN_REVIEW

## 6. Selected Core Visual Idea
**CORE_VISUAL_IDEA**: "A precisão técnica encontra o conforto residencial através de um design estruturado em blocos e linhas perfeitamente organizadas, fundamentado na autoridade do Azul Marinho e iluminado pelo Laranja em pontos cruciais de ação."

## 7. Signature Visual Device
**SIGNATURE_VISUAL_DEVICE**: **"The Blueprint Frame"** - Cards, divisões e contornos levemente traçados com linhas de espessura fina (hairline, `var(--c-line)`), evocando um projeto arquitetônico ou elétrico recém-traçado. Juntamente com ícones em outline, isso manifesta visualmente o "capricho e acabamento" atestados pelos clientes.

## 8. Color Direction
- `PRIMARY_COLOR`: Azul Marinho (`#041E42`)
- `ACCENT_COLOR`: Laranja Sol (`#F28C28`)
- `SECONDARY_COLOR`: Azul Gelo (`#3BA7DB`)
- `TERTIARY_COLOR`: Amarelo Raio (`#FFC53D`) - Usar em estrelas do Google/detalhes pontuais
- `BACKGROUND_LIGHT`: Branco (`#FFFFFF`) e Gelo Claro (`#F1F6FA`)
- `BACKGROUND_DARK`: Azul Marinho (`#041E42`)
- `TEXT_PRIMARY`: Grafite (`#1B2533`)
- `TEXT_SECONDARY`: Cinza Azulado (`#5B6B7F`)
- `BORDER_TONE`: Linha (`#D5DEE8`)
- `CTA_COLOR`: Fundo Laranja Sol com texto Azul Marinho
- **COLOR_USAGE_LOGIC**: Alternância clara de blocos. O Azul Marinho fundamenta confiança e autoridade (frequentemente com texto em branco). O Branco e o Gelo Claro compõem 60% da página, abrigando listas e serviços com máxima legibilidade. Laranja restrito estritamente a CTAs (ex: Botão WhatsApp).
- **LOGO_USAGE_DARK**: Logo original completo sobre Branco/Gelo. Se não houver versão white do logo no repositório, o Hero deve adotar uma abordagem de container claro para o logo no header, ou adaptar o header.
- **LOGO_USAGE_LIGHT**: Logo original mantido como é.
- **LOGO_CLEAR_SPACE_INTENT**: Mínimo 25% do raio (conforme manual).
- **LOGO_SCALE_INTENT**: Mobile hero ~40px min, desktop header ~56px.
- **LOGO_RESTRICTIONS**: Proibido esticar, aplicar glow, sombras soltas ou recriar tipograficamente.

## 9. Typography Direction
- `DISPLAY_PERSONALITY`: Poppins Bold (700) para H1 e H2. Traz solidez e segurança.
- `BODY_PERSONALITY`: Poppins Regular (400) e Medium (500). Texto fluido, amigável.
- `NAV_PERSONALITY`: Poppins Medium (500).
- `WEIGHT_STRATEGY`: Contraste binário entre Display (robusto/seguro) e Corpo (ágil/claro).
- `CASE_STRATEGY`: Sentence case predominante para tom conversacional. Uppercase exclusivo para rótulos técnicos (Overlines 12px Medium).
- `WIDTH_STRATEGY`: Normal (fonte nativa Poppins).
- `CONTRAST_STRATEGY`: Títulos escuros, nunca em cinza claro, preservando alto contraste WCAG.

## 10. Image Language
- `IMAGE_STYLE`: Fotografia documental focada em instalações. Limpo, real, direto.
- `IMAGE_TEMPERATURE`: Equilibrada, luz do dia natural (remetendo à confiabilidade).
- `IMAGE_CONTRAST`: Nítido, contrastante. Sem efeitos cinematográficos pesados ou filtros vintage.
- `IMAGE_FRAMING`: Aparelhos alinhados na parede, quadros de distribuição retos. O serviço é o protagonista.
- `IMAGE_OVERLAY`: Mínimo/Nenhum (usar no hero apenas se necessário para contraste tipográfico).
- `IMAGE_DEPTH`: Flat / Integrada ao ambiente 3D.
- `IMAGE_CROP_STYLE`: Focado, clean architecture shots.
- `IMAGE_EDGE_TREATMENT`: Cantos de 12px (seguindo os cards da marca) quando inseridas na malha, e 0px quando bleed.

## 11. Generated Asset Policy
- `GENERATED_ASSET_NEEDED`: YES (Na falta transitória de fotos do cliente).
- `PURPOSE`: Ambientação visual arquitetônica para compor fundo do Hero ou cards de categorias (Ar-condicionado e Painel Elétrico).
- `PLACEMENT`: Fundo de Hero / Imagens de apoio.
- `VISUAL_DESCRIPTION`: Renderizações realistas de ambientes residenciais/comerciais (parede clara, luz solar entrando), exibindo aparelhos split perfeitamente instalados sem fios aparentes, ou cortes macro de componentes elétricos bem organizados.
- `REALITY_STATUS`: GENERATED.
- `WHY_REAL_ASSET_IS_INSUFFICIENT`: O repositório atual carece das fotografias factuais prometidas no briefing.
- `RESTRICTION`: PROIBIDO gerar rostos humanos, equipe irreal, carros adesivados irrealistas ou clientes falsos. Apenas arquitetura estática impessoal.

## 12. Composition Principles
- `SYMMETRY_MODEL`: Grids ortogonais e listas simétricas que transmitem ordem métrica.
- `GRID_CHARACTER`: Racional, respeitando uma leitura fluida em Z ou F.
- `ALIGNMENT_CHARACTER`: Alinhamento à esquerda em textos descritivos para leitura confortável. Alinhamento central apenas em cabeçalhos de Seção principais.
- `OVERLAP_POLICY`: Baixa sobreposição. A ideia central é "organização e limpeza", então os elementos possuem contornos demarcados.
- `DEPTH_POLICY`: Flat, exceto pelo uso sutil e utilitário das sombras definidas no design system.
- `EDGE_BEHAVIOR`: Limpo, delimitado por `border`.
- `WHITE_SPACE_INTENT`: "Dense/Precise". Espaço usado para segmentar pensamentos lógicos sem vazios supérfluos.
- `WHITE_SPACE_CHARACTER`: Espaçamento metódico.
- `DENSITY_CHARACTER`: Moderada.

## 13. Surface / Border / Shadow / Corner Language
- `SURFACES`: Mistas entre Flat (Branco/Gelo) e Bordered (quando em painéis de destaque).
- `BORDER_CHARACTER`: Fina e precisa (1px `#D5DEE8`).
- `SHADOW_CHARACTER`: "Controlled". Sombra de elevação de card apenas (`0 8px 24px rgba(4,30,66,.08)`).
- `CORNER_LANGUAGE`: Subtile-radius. 12px nos painéis, 10px nos CTAs. Nada de botões arredondados em excesso (pill-shape) caso entre em conflito com as regras técnicas, exceto se demandado pela UI orgânica.

## 14. Iconography
- `ICON_STYLE`: Outline com linhas de espessura uniforme (2px).
- `ICON_STROKE`: Canto suavizado (rounded cap).
- `ICON_USAGE`: Para indexar os 6 serviços principais e ilustrar diferenciais (Capricho, Pontualidade). Usa Azul Marinho ou Azul Gelo, com um minúsculo ponto/detalhe de acento Laranja quando cabível, refletindo o "sol e faísca" da logo.

## 15. Motion Direction
- `MOTION_PERSONALITY`: Eficiente e ágil (Refletindo o diferencial "agilidade").
- `MOTION_SPEED`: Rápido (200–300ms).
- `MOTION_AMPLITUDE`: Transições curtas, fade in e deslizes simples verticais (Y: 10px).
- `MOTION_FREQUENCY`: Ocasional. O foco é a leitura rápida.
- `MOTION_RESTRAINT`: Mecânico/Preciso. Não usar animações rochosas elásticas ou rebotes longos que percam tempo.

## 16. Responsive Art Direction
- `DESKTOP_EXPRESSION`: Grids de serviços dispostos em matriz (ex: 3 colunas), uso de margens largas destacando os blocos Blueprint.
- `MOBILE_EXPRESSION`: Listas contíguas legíveis; foco absoluto no número de WhatsApp. "MOBILE FIRST" é prioridade absoluta.
- `MOBILE_SIGNATURE_DEVICE`: A preservação da borda fina dos cards, mantendo cada item perfeitamente descolado do outro, ajudando o cliente (de variadas idades) a perceber que um item começa onde o outro termina. Toque > 48px.

## 17. Visual Intensity
- `SCALE`: Alta e clara em hierarquia tipográfica.
- `CONTRAST`: Alto.
- `MOTION`: Baixa intensidade.
- `OVERLAP`: Baixa intensidade.
- `COLOR`: Intensidade de acentos focada. Moderação estrutural.
- **INTENSITY**: MODERADA (Focada em precisão e clareza direcional).

## 18. Audience + Sector Fit
- `AUDIENCE_VISUAL_EXPECTATION`: Proximidade, clareza, preço justo perceptível (mas com alto nível de serviço). Não espera um layout experimental, mas uma resposta imediata a sua dor (quebrou/quero instalar).
- `DESIRED_DEVIATION`: O padrão do setor muitas vezes cai na "arte poluída de encanador". O desvio é apresentar uma identidade visual premium, polida e arquitetônica sem perder a acessibilidade no texto e no CTA, construindo um hiato de qualidade contra a concorrência sem afastar pela frieza visual de "SaaS/Tech".

## 19. Visual Non-Negotiables
1. **Logo intacto:** O logo não pode ser distorcido ou editado e deve respirar adequadamente (25% clearance).
2. **Contraste de Ação:** Laranja Sol APENAS para conversões; com tipografia Poppins em Azul Marinho no botão, garantindo acessibilidade e destaque máximo.
3. **Restrição de Fake Trust:** Depoimentos sem fotos falsas geradas; nenhum "Founder" fake inventado; claims como as 5 estrelas baseadas 100% no texto.
4. **Hierarquia Tipográfica:** Uso exclusivo de Poppins. Nenhuma serifa será injetada para simular luxo genérico.

## 20. Project-Specific Anti-Patterns
- **Generic Service Clutter:** Não usar dezenas de ícones soltos coloridos diferentes.
- **Glassmorphism Genérico:** Não aplicar fundos translúcidos/blurs que destruam a legibilidade. Isso é uma empresa de instalação real, não um aplicativo web3.
- **Texturas Grunge/Sujas:** Proibido o uso de qualquer textura que vá contra o princípio máximo da marca: "Limpeza, Capricho e Acabamento".
- **Botões Verdes sem WhatsApp:** `#25D366` é estrito ao CTA flutuante/específico da rede. Laranja dita o restante das ações.

## 21. Performance Risks
- **PERFORMANCE_RISK**: Carregamento lento do Hero devido ao uso de imagens geradas grandes, atrasando LCP.
- **MITIGATION**: Qualquer background visual aprovado deverá ser otimizado; uso forte de fallback colors (Azul Marinho) caso o background seja pesado; evitar o uso de vídeos institucionais sem que haja real demanda e fallback de alta precisão.

## 22. UI Architect Handoff
A arquitetura de UI (Gate 04) deve basear-se nos tokens descritos em `estilos-visuais.md`. Aplique o "Blueprint Frame" na seção de serviços e diferenciais para trazer a tangibilidade da técnica. Em dispositivos móveis, garanta alvos de toque gordo (mínimo de 48px) e WhatsApp persistente (FAB). Projete a área de Depoimentos como o coração de prova social da landing page (com cards de citação limpos e claros). O uso de Branco e Gelo Claro deve guiar 60% da área útil do usuário, mantendo as barreiras escuras de Azul Marinho apenas para cabeçalhos pesados e rodapé institucional.

## 23. Visual QA Criteria
- A interface passa confiança através de alinhamentos e espaçamentos simétricos, sem elementos amontoados?
- O texto em botões laranjas está Azul Marinho e passa em acessibilidade contrastante?
- A identidade foge dos estereótipos visuais de SaaS (sombras exageradas coloridas, neons, fundos escuros complexos)?
- O CTA do WhatsApp (Verde) e Laranja dominam as ações exclusivas do usuário?
- Foram evitadas imagens "humanas" não-autênticas?

## 24. Originality / Cliché Audit
- **GENERIC_SAAS:** NO, Justified: Proibido no conceito de escalada.
- **GENERIC_BENTO:** NO, Justified: Bloqueado pelas restrições de escalada criativa.
- **GENERIC_GLASSMORPHISM:** NO, Justified: Bloqueado pelas restrições.
- **GENERIC_GRADIENT:** NO, Justified: Bloqueado pelas restrições.
- **GENERIC_STOCK_PHOTO:** NO, Justified: Apenas imagens factuais ou conceituais/arquitetônicas de alta precisão. Proibido falsas pessoas e serviços genéricos.
- **CLICHE_AUDIT_COMPLETE:** YES.
- **ORIGINALITY_TEST_PASS:** PENDING_HUMAN_REVIEW (Aguardando escolha de conceito).

## 25. Final Decision & Refinements (Concept 03 Selected)
**SELECTED_CONCEPT**: 03 — THE LOCAL CRAFT
**HUMAN_SELECTION**: APPROVED_WITH_REFINEMENTS

**CORE DIRECTION**:
- **Typography**: EXCLUSIVAMENTE Poppins. Sem serifas. Impacto editorial gerado por escala, peso, espaçamento e composição.
- **Brand Colors**: Rigoroso às cores oficiais (Navy `#041E42`, Orange `#F28C28`, Ice Blue `#3BA7DB`, Light Ice `#F1F6FA`, White `#FFFFFF`). Sem beges arquitetônicos. Cinzas neutros apenas derivados das fotos reais.
- **Photography**: *REAL ASSETS FIRST*. Protagonismo da fotografia real (Felipe trabalhando, instalações limpas, equipamentos). Proibido simular trabalho de cliente (sem fake portfolio, fake brands).
- **Composition**: Editorial, materialidade palpável, recortes inusitados, assimetria controlada. Redução drástica de grids genéricos de cards.
- **Structural Influence**: Incorpora a disciplina estrutural do Concept 02 (alinhamentos precisos, divisores técnicos finos, grade intencional), sem virar blueprint monocromática.
- **Signature Device**: Uso contido da *Thermal Line* do Concept 01 (linha fina laranja para conectar elementos/CTA). Sem glow, neon ou CGI cyberpunk.
- **Hero Section**: Image-led com asset real. Forte tipografia Poppins, CTA claro. Sem "split-card" convencional.
- **Testimonials**: Tratamento editorial (grandes citações, variações de escala, destacando as provas reais).

***
**STATUS**: PASS