# 04 UI Architecture

## 1. Interface Summary
O projeto é uma Landing Page voltada para captação de leads via WhatsApp para Felipe Lipreri (Climatização e Elétrica em Nova Petrópolis). A direção de arte "The Local Craft" rege um visual editorial, fugindo do paradigma genérico de "Bento/Cards", usando a precisão de linhas estruturais (Blueprint Frame), a assinatura visual da "Thermal Line" e fotografias reais e focadas. Tudo é construído exclusivamente com tipografia Poppins e paleta oficial da marca, sem uso de beges ou neutros artificiais. O foco é tangibilizar "capricho, limpeza e pontualidade".

## 2. Page Structure Map
- `PAGE_TYPE`: LANDING_PAGE
- `PRIMARY_GOAL`: Geração de orçamentos e contatos qualificados.
- `PRIMARY_CONVERSION`: WHATSAPP
- `SECONDARY_CONVERSION`: INSTAGRAM
- `NUMBER_OF_SECTIONS`: 6 (Hero, Diferenciais, Serviços, Depoimentos, Sobre, Final CTA) + Footer + Floating FAB
- `SECTION_ORDER`: hero -> diferentials -> services -> testimonials -> about -> final-cta
- `NAVIGATION_MODEL`: Anchor Navigation
- `HEADER_BEHAVIOR`: Sticky após scroll, com transição de transparente para fundo sólido.
- `FOOTER_ROLE`: Institucional, localidade, repetição de contatos primários.

## 3. Navigation
- `NAVIGATION_TYPE`: ANCHOR
- `ITEMS`:
  - `LABEL`: Início | `TARGET_SECTION_ID`: hero
  - `LABEL`: Diferenciais | `TARGET_SECTION_ID`: diferentials
  - `LABEL`: Serviços | `TARGET_SECTION_ID`: services
  - `LABEL`: Depoimentos | `TARGET_SECTION_ID`: testimonials
  - `LABEL`: Contato | `TARGET_SECTION_ID`: final-cta

## 4. Global Grid / Container
- `MAX_WIDTH_DESKTOP`: 1280px (container centralizado), permitindo que imagens reais extrapolem a borda (bleed) em componentes editoriais.
- `GRID_SYSTEM`: 12 colunas em desktop (gap 24px), 4 colunas em mobile (gap 16px).
- `STRUCTURAL_BREAKPOINTS`: 390px (Mobile base), 768px (Tablet portrait/Structural shift), 1024px (Desktop base), 1280px (Max Container).
- `HORIZONTAL_PADDING`: 24px em mobile, 48px em tablet/desktop (quando dentro do container).

## 5. Typography Application
- `DISPLAY_FONT_ROLE`: Poppins (Bold 700) - Títulos, grandes claims.
- `BODY_FONT_ROLE`: Poppins (Regular 400, Medium 500) - Textos corridos e descrições.
- `NAV_FONT_ROLE`: Poppins (Medium 500) - Rótulos de navegação e pequenos headers.
- `H1_SCALE`: Desktop 64px / Mobile 40px (Line-height 1.1, Letter-spacing -0.02em).
- `H2_SCALE`: Desktop 48px / Mobile 32px (Line-height 1.2, Letter-spacing -0.01em).
- `H3_SCALE`: Desktop 32px / Mobile 24px (Line-height 1.3).
- `BODY_SCALE`: Desktop 18px / Mobile 16px (Line-height 1.6).
- `SMALL_TEXT_SCALE`: 14px (Line-height 1.5).
- `EYEBROW_STYLE`: 14px, Medium 500, Uppercase, Letter-spacing 0.05em.
- *Nota Crítica:* **Exclusivamente Poppins.** Nenhuma fonte serifada é permitida. Impacto visual é gerado por contraste de tamanhos e pesos.

## 6. Color Application
- `PAGE_BACKGROUND`: Mistura alternada entre Branco (`#FFFFFF`) e Light Ice (`#F1F6FA`) para criar zonas de conteúdo, garantindo 60% de áreas claras.
- `PRIMARY_SURFACE`: Branco (`#FFFFFF`).
- `SECONDARY_SURFACE`: Navy (`#041E42`) para seções de quebra/autoridade pesada.
- `PRIMARY_TEXT`: Graphite (`#1B2533`).
- `SECONDARY_TEXT`: Slate (`#5B6B7F`).
- `ACCENT_PRIMARY`: Orange (`#F28C28`) - Usado para detalhes de "Thermal Line" e botões primários.
- `ACCENT_SECONDARY`: Ice Blue (`#3BA7DB`) - Fundo secundário para ícones ou detalhes.
- `CTA_PRIMARY`: Fundo Orange (`#F28C28`), Texto Navy (`#041E42`).
- `CTA_SECONDARY`: Outline Navy ou Fundo Ice Blue.
- `DIVIDER`: Line (`#D5DEE8`) - Fina e precisa (1px) representando o "Blueprint Frame".
- `RATING_STARS`: Yellow (`#FFC53D`).
- *Nota Crítica:* Proibido uso de beges ou neutros que não sejam os tons de azul/cinza oficiais.

## 7. Header
- `HEADER_POSITION`: Fixed / Sticky.
- `HEADER_HEIGHT_DESKTOP`: 80px.
- `HEADER_HEIGHT_MOBILE`: 64px.
- `HEADER_BACKGROUND_INITIAL`: Transparente (se o hero for imagem plena) ou Branco (`#FFFFFF`).
- `HEADER_BACKGROUND_SCROLLED`: Branco (`#FFFFFF`) puro, com borda inferior fina (1px solid `#D5DEE8`) e leve sombra de elevação difusa.
- `LOGO_ASSET`: Logo colorido completo.
- `LOGO_SIZE_DESKTOP`: Altura 48px.
- `LOGO_SIZE_MOBILE`: Altura 32px.
- `NAV_ALIGNMENT`: Centralizado (Desktop).
- `CTA_PRESENT`: Sim.
- `CTA_LABEL`: "Pedir Orçamento".
- `CTA_ROLE`: Primary (Fundo Orange, Texto Navy). Oculto em mobile em favor do Menu Hamburguer e Floating FAB.
- `MOBILE_MENU_MODEL`: Fullscreen Overlay Branco. Texto Navy enorme (H3 Scale) para os links de âncora.

## 8. Hero
- `SECTION_ID`: hero
- `HERO_PURPOSE`: Estabelecer área, serviço e qualidade real.
- `EYEBROW`: "NOVA PETRÓPOLIS E REGIÃO" (Navy, acompanhado de linha fina Orange).
- `HEADLINE`: "Instalação e Manutenção de Ar Condicionado"
- `SUPPORTING_COPY`: "Cuidamos do conforto e da segurança do seu ambiente, da instalação à manutenção preventiva, com atendimento direto e acabamento limpo."
- `PRIMARY_CTA`: "Peça seu orçamento" (Orange).
- `SECONDARY_CTA`: "Nossos serviços" (Link textual com seta, Navy).
- `VISUAL_PROTAGONIST`: Fotografia documental real (alta resolução) de Felipe trabalhando ou de uma instalação limpa (ex: aparelho bem alinhado, sem fiação exposta).
- `COMPOSITION_DESKTOP`: Editorial Asymmetrical. Conteúdo textual ocupa 5 colunas à esquerda. Imagem real de alto impacto ocupa 6 colunas à direita, em um quadro com bordas retas que sangra (bleed) para a margem direita e superior, quebrando o alinhamento engessado.
- `COMPOSITION_MOBILE`: Stacked. Texto acima com paddings generosos, seguido pela fotografia real ocupando a largura total (bleed horizontal).
- `BACKGROUND`: Branco (`#FFFFFF`).
- `CONTENT_ALIGNMENT`: Left (Desktop e Mobile).
- `MAX_TEXT_WIDTH`: 540px.
- `HERO_HEIGHT_MODEL`: Min-height 85vh (Desktop), Auto (Mobile, com padding-bottom de 64px).

## 9. Section Blueprints

### Section: Diferenciais (diferentials)
- `SECTION_ID`: diferentials
- `LAYOUT_MODEL`: Editorial List (Não usar cards genéricos).
- `BACKGROUND_TREATMENT`: Light Ice (`#F1F6FA`).
- `ENTRY_SPACING`: py-24 (Desktop), py-16 (Mobile).
- `CONTENT_ORDER`: Header da seção (Esquerda, 4 colunas) contendo a introdução. Lista de diferenciais (Direita, 7 colunas).
- `TYPOGRAPHIC_HIERARCHY`: Números estruturais finos (ex: 01, 02) em Navy (opacidade 20%) enormes, sobrepostos pelo título do diferencial (H3 Scale).
- `DIVIDERS`: Linhas horizontais 1px (`#D5DEE8`) separando cada item da lista (Blueprint Frame).
- `DESKTOP_BEHAVIOR`: Lista vertical espaçosa. O texto de cada item flui à direita do título em colunas de proporção clássica.
- `MOBILE_BEHAVIOR`: Quebra para pilha única. Título da seção no topo. Itens separados por divider com o número visível no fundo. Textos curtos.

### Section: Serviços (services)
- `SECTION_ID`: services
- `LAYOUT_MODEL`: Asymmetrical Typographic Grid com imagens on-hover (Desktop). Lista com linhas estruturais (Mobile).
- `BACKGROUND_TREATMENT`: Branco (`#FFFFFF`).
- `PRIMARY_MESSAGE`: "Nossas especialidades em climatização e elétrica."
- `CONTENT_WIDTH`: Container total (1280px).
- `DIVIDERS`: Uso severo de `border-bottom: 1px solid var(--c-line)` criando faixas horizontais de ponta a ponta (Blueprint Frame).
- `DESKTOP_BEHAVIOR`: Cada serviço (Instalação, Manutenção, Higienização, Elétrica, Câmeras, Iluminação) é uma faixa horizontal. À esquerda, título gigante (H2); ao centro, ícone outline e copy breve; à direita, um botão discreto de ação ou seta. Ao interagir, imagens de apoio aparecem ou as bordas ganham cor Navy. Nada de grid 3x2 quadrado.
- `MOBILE_BEHAVIOR`: Lista vertical em blocos separados por linha fina. Título em H3, ícone ao lado, texto descritivo curto embaixo.

### Section: Depoimentos (testimonials)
- `SECTION_ID`: testimonials
- `LAYOUT_MODEL`: Masonry / Pull-Quote Editorial.
- `BACKGROUND_TREATMENT`: Navy (`#041E42`). Traz extrema autoridade técnica e contraste.
- `TYPOGRAPHIC_HIERARCHY`: Texto principal Branco, estrelas em Yellow (`#FFC53D`), linha estrutural Ice Blue (`#3BA7DB`) para divisão.
- `DESKTOP_BEHAVIOR`: Sem carrossel básico. Um depoimento primário enorme ocupando 6 colunas, destacado por tipografia em itálico e aspas gigantes gráficas (opacidade 10%). Dois outros depoimentos menores empilhados assimetricamente em colunas ao lado. Foco na transcrição real: "Acabamento caprichoso, pontualidade...".
- `MOBILE_BEHAVIOR`: Um depoimento focado em evidência central (H3 size). Os outros dois empilhados em caixas simples com contornos Ice Blue (1px solid). Rolagem nativa vertical, sem cards laterais escondidos.

### Section: Sobre (about)
- `SECTION_ID`: about
- `LAYOUT_MODEL`: Image Overlap / Materiality.
- `BACKGROUND_TREATMENT`: Transição entre Light Ice (`#F1F6FA`) e Branco (`#FFFFFF`).
- `MEDIA_POSITION`: Foto real do fundador (Felipe Lipreri) em um quadro de perfil.
- `DESKTOP_BEHAVIOR`: A foto do fundador quebra o grid, subindo ou sobrepondo parcialmente o container de texto. O texto "Atendimento direto com o profissional..." flui ao lado. Há uma "Thermal Line" (Orange hairline, 2px de altura) sublinhando o nome do fundador, conectando a seção tecnicamente.
- `MOBILE_BEHAVIOR`: Foto real no topo (proporção 4:5), nome com Thermal Line, seguido pelo copy com alinhamento à esquerda e fonte confortável.

### Section: Final CTA (final-cta)
- `SECTION_ID`: final-cta
- `LAYOUT_MODEL`: Block Container.
- `BACKGROUND_TREATMENT`: Fundo Gelo Claro (`#F1F6FA`) com um contêiner interno gigante na cor Navy (`#041E42`).
- `DESKTOP_BEHAVIOR`: Caixa de bordas retilíneas (12px radius). Título denso "Invista no que você respira" (H2), acompanhado por 5 estrelas amarelas e a prova de avaliações. Botão Laranja pulsante (CTA Primário) com muito espaço ao redor (py-24).
- `MOBILE_BEHAVIOR`: Mesmo formato, com o botão ocupando 100% da largura do contêiner e o título alinhado ao centro para máxima clareza final.

## 10. Responsive Transformation Map
- `hero`: Imagem de bleed lateral direita em Desktop vira imagem de bleed horizontal completa (abaixo do texto) em Mobile.
- `diferentials`: Layout em 2 colunas assimétricas vira empilhamento sequencial. O número de fundo (`01, 02`) desce de opacidade e tamanho no mobile para evitar colisão textual.
- `services`: Faixas largas horizontais transformam-se em blocos verticais, empilhando o ícone, o H3 e o texto em uma coluna flex (gap 8px).
- `testimonials`: Composição editorial rígida quebra em blocos discretos listados verticalmente; a aspas gigantes é redimensionada.

## 11. Asset Placement Map
- **ASSET:** Foto documental (Felipe / Trabalho real).
  - `SECTION`: hero. `FIT`: COVER. `DESKTOP_PLACEMENT`: Right Bleed. `MOBILE_PLACEMENT`: Bottom Bleed.
- **ASSET:** Foto Fundador.
  - `SECTION`: about. `FIT`: COVER. `DESKTOP_PLACEMENT`: Left Overlap. `MOBILE_PLACEMENT`: Top Block.
- **ASSET:** Imagens de Instalação (se confirmadas no plano de assets).
  - `SECTION`: services. `FIT`: COVER. `DESKTOP_PLACEMENT`: Revealed on Hover ou integradas lateralmente na faixa.

## 12. Motion Architecture
- `MOTION_PURPOSE`: Agilidade e eficiência técnica.
- `TRIGGER`: Scroll Into View (Intersection Observer) e Hover.
- `INTENSITY`: Rápida, sem elasticidade (Duração 250ms, ease-out).
- `MUST_BE_JS`: Nenhum obrigatório, a maioria `CAN_BE_CSS`.
- `EFFECTS`:
  - Fades sutis para o texto (Y: 15px para cima).
  - Blueprint Frame lines crescendo (scale-x) do centro para as bordas na entrada da seção Serviços e Diferenciais (Simula o "desenho" do projeto elétrico).

## 13. CTA Map
| CTA_ID | LABEL | ROLE | DESTINATION | VISUAL_TREATMENT | DEVICE |
|---|---|---|---|---|---|
| CTA_HEADER | Pedir Orçamento | Primary | WHATSAPP | Fundo Orange, Texto Navy | Desktop |
| CTA_HERO | Peça seu orçamento | Primary | WHATSAPP | Fundo Orange, Texto Navy, Elevado | Ambos |
| CTA_SEC_HERO | Nossos serviços | Anchor | ANCHOR: services | Navy, underline simples | Ambos |
| CTA_FINAL | Chamar no WhatsApp | Primary | WHATSAPP | Fundo Orange, Texto Navy, Huge | Ambos |
| CTA_FLOAT | WhatsApp Icon | Primary | WHATSAPP | Círculo Verde `#25D366` | Mobile Focado |

- `FLOATING_ACTION`: Botão do WhatsApp fixo, canto inferior direito. Em Desktop, visível e clássico (tamanho normal). Em Mobile, alvo grande (56x56px), fundo verde sólido (`#25D366`), com z-index alto, garantindo acesso em qualquer ponto do scroll. Não deve cobrir o menu de navegação base.

## 14. Footer
- `FOOTER_PURPOSE`: Fechamento de informações locais e reforço de contato.
- `BACKGROUND`: Branco puro (`#FFFFFF`) para limpeza e contraste com o bloco Navy anterior. Divisor de topo: `1px solid var(--c-line)`.
- `CONTENT_COLUMNS_DESKTOP`: 3 (Logo+Copy; Local de Atendimento; Contato e Social).
- `CONTENT_STACK_MOBILE`: Empilhado. Logo primeiro, depois contato direto, por último localização.
- `ALIGNMENT_DESKTOP`: Esquerda em cada coluna.
- `ALIGNMENT_MOBILE`: Centro.

## 15. Performance-Aware Decisions
- Nenhuma imagem ou vídeo pesado carregado no Hero acima da dobra ("LCP Candidate" é o Hero Texto e Imagem Otimizada Documental convertida para WebP).
- Backgrounds sólidos coloridos (Branco, Navy, Light Ice) não usam assets externos.
- Ícones importados devem ser SVG inline ou icon font altamente otimizada, de preferência SVG para reduzir requests (Outline com 2px stroke).
- O uso de interações hover em `services` não deve pré-carregar imagens massivas de fundo simultaneamente (Lazy Load imperativo abaixo da dobra).

## 16. Frontend Handoff Checklist
- [ ] Garantir que **Poppins** seja a única tipografia, sem fallback visual que dependa de fontes padrão em momentos críticos.
- [ ] Aplicar restrição rígida de Cores (Navy, Orange, White, Light Ice). Beges são proibidos.
- [ ] Respeitar alinhamentos e espaçamentos editoriais: O `Blueprint Frame` precisa ter exato `1px solid #D5DEE8`.
- [ ] Construir layout de serviços em faixas horizontais de linha a linha, **não em cards em grade 3x2**.
- [ ] Section `testimonials` deve espelhar o layout assimétrico (uma citação muito maior em destaque).
- [ ] CTA Flutuante testado e sem cobrir informações críticas ou botões de footer no mobile.
- [ ] **NO IMPLEMENTATION WITHOUT COMPLETE PASS.**
