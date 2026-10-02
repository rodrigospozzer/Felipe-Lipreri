# Visual Asset Plan

## 1. Contexto e Necessidade
De acordo com o Gate 01 (Material Audit) e o Gate 03 (Art Direction), não possuímos fotografias reais de alta qualidade das instalações ou do profissional em campo acessíveis no repositório no momento.
Para sustentar a arquitetura visual proposta ("Engenharia Clara e Caprichada"), imagens ambientais (generated/stock) são necessárias.

## 2. Política de Geração/Seleção (Restrições)
- **NÃO PERMITIDO**: Rostos humanos gerados (para não configurar fake founder/equipe).
- **NÃO PERMITIDO**: "Casos de sucesso" forjados em forma de antes/depois.
- **NÃO PERMITIDO**: Adesivação simulada de frotas irrealistas.
- **PERMITIDO**: Fotografia arquitetônica impessoal e de alta qualidade (macro de componentes, aparelhos em ambientes limpos).

## 3. Assets Planejados

### ASSET_ID: 01
- **SECTION_INTENT**: Texturas de Fundo e Atmosfera (Hero / Destaques)
- **ROLE**: Evocar clima (ar/fluxo) ou precisão elétrica sem simular serviços reais falsos.
- **REAL_OR_GENERATED**: GENERATED (Abstract/Conceptual)
- **PROMPT_DIRECTION_IF_GENERATED**: Textura abstrata sutil focada em contraste de temperatura (azul escuro e reflexos laranjas leves) ou fluxos de ar contínuos, sem formas literais de produtos. Fotografia macro de detalhes de materiais construtivos (alumínio, conduítes limpos).
- **ASPECT_RATIO**: Diversos (Backgrounds expansivos)
- **DESKTOP_ROLE**: Background textural ou máscara tipográfica.
- **MOBILE_ROLE**: Background textural.
- **FALLBACK**: Cores sólidas do manual da marca.
- **REALITY_LIMITATIONS**: PROIBIDO gerar equipamentos instalados irrealistas, pessoas, clientes ou depoimentos.
- **APPROVAL_STATUS**: PENDING

### ASSET_ID: 02
- **SECTION_INTENT**: Imagens de Serviço (Apoio visual)
- **ROLE**: Representar serviços de elétrica e climatização de forma crível e limpa.
- **REAL_OR_GENERATED**: REAL PREFERRED (Generated apenas se não houver solução)
- **PROMPT_DIRECTION_IF_GENERATED**: Se for estritamente necessário usar banco/gerado: Fotografia close-up extrema (mãos trabalhando, sem rostos) ou quadros de distribuição reais, focando exclusivamente na técnica e acabamento. NUNCA gerar "antes e depois" falsos.
- **ASPECT_RATIO**: 1:1 ou 4:3
- **DESKTOP_ROLE**: Suporte aos cards de serviço.
- **MOBILE_ROLE**: Apoio visual em seções de serviço.
- **FALLBACK**: Ícones de marca ou tipografia.
- **REALITY_LIMITATIONS**: Não simular ambientes de alto padrão que não condizem com a região real.
- **APPROVAL_STATUS**: PENDING

## 4. Status do Plano e Refinamentos (Concept 03)
**POLICY UPDATE**: A direção aprovada (Concept 03 - The Local Craft) exige que **fotografias reais sejam as protagonistas** absolutas (Felipe trabalhando, ferramentas, tubulações e detalhes de acabamento).
- A geração de imagens fica restrita apenas a fundos texturais ou macro-detalhes arquitetônicos caso faltem fotos de apoio.
- É EXPRESSAMENTE PROIBIDO gerar imagens simulando serviço prestado a clientes (sem portfólio falso, sem pessoas geradas).

**VISUAL_ASSET_PLAN**: PASS
