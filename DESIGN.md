---
name: Império Corretora de Seguros
description: Corretora de seguros local de Arujá/SP — escritório de bairro à luz do dia, com o oliva nas decisões e o dourado da logo como fio de acabamento.
colors:
  ground: "#f7f7f5"
  surface: "#ffffff"
  band: "#e9e9e6"
  line: "#d9d9d3"
  line-soft: "#e6e6e1"
  ink: "#22231f"
  ink-2: "#45463f"
  muted: "#5c5d56"
  olive: "#4b5a2b"
  olive-hover: "#3f4c23"
  olive-deep: "#36421f"
  olive-tint: "#e8ebdc"
  tint: "#f0f0ef"
  gold: "#c9a84c"
  gold-soft: "#e2cd92"
  gold-ink: "#7d6420"
  on-dark-2: "rgba(255, 255, 255, 0.80)"
  on-dark-line: "rgba(255, 255, 255, 0.16)"
  error: "#a23b2a"
typography:
  display:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 1.55rem + 3.6vw, 4.375rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  display-inner:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.8vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.3vw, 2.375rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.6vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  numeral:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 1.6rem + 1.2vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  lead:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.01em"
  label:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.35
rounded:
  radius-sm: "6px"
  radius: "8px"
  radius-md: "14px"
  circle: "50%"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-5: "1.25rem"
  space-6: "1.5rem"
  space-8: "2rem"
  space-10: "2.5rem"
  space-12: "3rem"
  space-16: "4rem"
  space-20: "5rem"
  section-y: "clamp(4rem, 3rem + 4vw, 6.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.olive-hover}"
  button-primary-lg:
    padding: "0.875rem 1.75rem"
    height: "54px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.olive}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.olive-tint}"
  button-on-dark:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.olive-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-on-dark-hover:
    backgroundColor: "{colors.olive-tint}"
  button-outline-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.surface}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  header:
    backgroundColor: "{colors.band}"
    height: "84px"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.radius-sm}"
    padding: "0.625rem 0.875rem"
  nav-link-active:
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 0.875rem"
    height: "48px"
  input-focus:
    backgroundColor: "{colors.surface}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.radius-md}"
    padding: "2rem"
  panel-deep:
    backgroundColor: "{colors.olive-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.radius-md}"
    padding: "2rem"
  arrow-go:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.surface}"
    rounded: "{rounded.circle}"
    size: "48px"
  check:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.surface}"
    rounded: "{rounded.circle}"
    size: "22px"
  numbers-band:
    backgroundColor: "{colors.band}"
    padding: "2rem 1.5rem"
  form-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius-md}"
    padding: "2rem"
---

# Design System: Império Corretora de Seguros

## Overview

**Creative North Star: "O Escritório de Bairro à Luz do Dia"**

A Império é desenhada como um escritório de bairro bem cuidado, numa manhã clara: paredes cinza-claro e brancas, uma mesa limpa, e uma única cor que significa "é aqui que você decide" — o verde-oliva. O dourado da logo não é tinta, é acabamento: aparece como um fio fino de 2px que abre os títulos, separa os números e sublinha o link ativo, como o friso de metal de um móvel bom. O chumbo da logo vira a cor do texto, não de faixas.

A densidade é calma e respirada. Seções alternam entre o fundo cinza-quente (`ground`) e o branco (`surface`), com faixas cinza mais fechadas (`band`) marcando a estrutura: cabeçalho, faixa de números, faixa de chamada e rodapé. O escuro existe, mas é oliva profundo e reservado para os momentos de decisão (contato, chamada final, painel de história, citação sobre a foto). Títulos são serifados e generosos; o texto é uma sans humanista, legível e sem frescura. Fotos de pessoas reais em conversa carregam o calor; a interface não compete com elas.

A direção recusa explicitamente a versão 1.x do site: hero claro solto, faixas escuras pesadas, botões dourados com texto escuro e FAQ em pílulas pretas.

**Key Characteristics:**
- Superfícies claras em três tons (`ground`, `surface`, `band`) com fios de 1px (`line`, `line-soft`) no lugar de caixas pesadas.
- Verde-oliva como a cor de toda ação e da ênfase nos títulos; nenhuma outra cor de ação.
- Dourado só como fio (2px em títulos e link ativo, 1px nas divisórias de números), marcador de lista e ícone de traço sobre fundo escuro.
- DM Serif Display em peso 400 nos títulos; DM Sans no texto e nos controles.
- Cantos suaves em três medidas: 6px, 8px e 14px; círculos para controles de ícone.
- Sombras baixas, com deslocamento e desfoque suave, que respondem ao passar o mouse.
- Movimento mínimo: números contam ao entrar na tela e cards sobem levemente ao passar o mouse. Nada mais anima por conta própria.

## Colors

Uma paleta de dia claro: neutros quentes levemente esverdeados, um oliva decidido e um dourado usado como metal, nunca como tinta.

### Primary
- **Oliva Decisão** (`olive`): fundo de todo botão primário, contorno e texto do botão secundário, círculos de seta "ver mais", marcas de check, ícones de destaque em superfície clara, palavras de ênfase no título (`em` em cor, sem itálico), seleção de texto e cursor de digitação. Contraste de 7,5:1 com branco.
- **Oliva Pressionado** (`olive-hover`): estado de hover do primário e dos círculos de seta. Só existe como resposta.
- **Oliva Profundo** (`olive-deep`): o único escuro de painel. Bloco de contato, chamada final (`cta-final`), painel "Fundada em" da história, coluna de solução nas páginas internas e cartão de citação sobre a foto do hero.
- **Oliva Véu** (`olive-tint`): hover do botão de contorno e do botão branco sobre escuro. Um sopro de cor, nunca uma superfície de seção.

### Secondary
- **Dourado da Logo** (`gold`): fios de 2px (44px de largura) que abrem títulos, sublinhado do link ativo, divisórias verticais de 1px na faixa de números, marcadores redondos de 6px em listas de recursos, aspas dos depoimentos, anel de foco de teclado. Sobre `olive-deep` também serve a ícones de traço (4,7:1). Sobre fundo claro tem só 2,1:1: é ornamento, nunca texto.
- **Dourado Claro** (`gold-soft`): texto pequeno de apoio sobre oliva profundo (6,8:1).
- **Dourado Tinta** (`gold-ink`): a versão legível do dourado em superfície clara. Ícones de traço do hero, da faixa de números e do rodapé, asterisco de campo obrigatório (4,65:1 sobre `band`, 5,65:1 sobre branco).

### Neutral
- **Papel de Escritório** (`ground`): fundo do corpo, do hero e dos campos de formulário em repouso.
- **Branco Mesa** (`surface`): seções alternadas (`section--alt`), cards, cartão do formulário, faixa de seguradoras.
- **Cinza Seção** (`tint`): o único fundo discreto de seção, um cinza neutro. Alterna com o branco para cada seção se distinguir da vizinha e os cards brancos saltarem. O cliente recusou tons esverdeados ou quentes nos fundos: aqui é só cinza e branco.
- **Cinza Faixa** (`band`): a estrutura do site. Cabeçalho, faixa de números (também nas páginas internas), faixa de chamada (`cta-band`) e rodapé. Também é o `theme-color` do navegador.
- **Fio** (`line`) e **Fio Suave** (`line-soft`): bordas de 1px de cards, divisórias de FAQ, bordas de campo (1,5px) e separadores de faixa.
- **Chumbo** (`ink`): títulos e texto principal (14,7:1 sobre `ground`).
- **Chumbo Médio** (`ink-2`): links de navegação, itens de lista, rótulos de formulário.
- **Cinza Nota** (`muted`): subtítulos, descrições, legendas (6,2:1 sobre `ground`, 5,5:1 sobre `band`).
- **Branco 80%** (`on-dark-2`) e **Fio Branco 16%** (`on-dark-line`): texto secundário e bordas sobre oliva profundo.
- **Tijolo de Erro** (`error`): borda de campo inválido e mensagem de erro. Usado apenas em validação.

### Named Rules
**A Regra da Decisão Oliva.** Toda ação clicável que leva a uma cotação, a uma conversa ou a uma página é oliva (ou branca, sobre escuro). Nenhuma outra cor ganha papel de botão; dourado nunca preenche um botão.

**A Regra do Fio Dourado.** O dourado aparece como linha (2px ou 1px), marcador de 6px, aspas ou ícone sobre escuro. Em fundo claro, ícone dourado usa `gold-ink`; texto dourado sobre claro não existe.

**A Regra do Escuro Oliva.** Quando uma seção precisa escurecer, ela usa `olive-deep`, não chumbo nem preto. O escuro é reservado para decisão e prova: contato, chamada final, painéis de destaque e a faixa de benefícios da página Empresas (`section--dark`). Duas faixas escuras nunca ficam seguidas: por isso a faixa de números interna é clara.

**A Regra do Ritmo de Fundos.** Seções vizinhas nunca repetem o mesmo fundo. A sequência alterna branco e `tint` (com `band` nas faixas estruturais), e `olive-deep` como pontuação forte. Nada de fundo amarelado ou esverdeado. O tom é discreto de propósito: a cor da seção é atmosfera; quem chama atenção continua sendo o oliva dos botões.

## Typography

**Display Font:** DM Serif Display (com Georgia, Times New Roman, serif)
**Body Font:** DM Sans (com system-ui, -apple-system, Segoe UI, sans-serif)

**Character:** Um serifado de alto contraste, caloroso e um pouco editorial, que dá aos títulos a voz de uma placa de escritório tradicional; ao lado, uma sans geométrica-humanista neutra que mantém o texto e os controles práticos e diretos. Os títulos levam `text-wrap: balance`; parágrafos, `text-wrap: pretty`.

### Hierarchy
- **Display** (400, `display`, altura de linha 1.04, -0.02em): só o título do hero da home. Palavras-chave em oliva.
- **Display interno** (400, `display-inner`, 1.06, -0.02em): título do hero das páginas internas.
- **Headline** (400, `headline`, 1.15, -0.01em): títulos de seção (por que escolher, história, depoimentos, FAQ, contato, chamada final).
- **Title** (400, `title`, 1.15): títulos de card de porta (Empresas / Você), títulos de faixa de chamada e de colunas dor/solução.
- **Title pequeno** (400, `title-sm`): título do formulário, títulos de card de serviço, rótulo da faixa de seguradoras, mensagem de sucesso.
- **Numeral** (400, `numeral`, 1, algarismos tabulares e alinhados): valores da faixa de números. O ano do painel de história usa o mesmo rosto em escala maior (até 5rem).
- **Lead** (400, `lead`, 1.6): subtítulo do hero e descrições de seção, medida máxima de 34em.
- **Body** (400, `body`, 1.6): texto corrido, medida máxima de 60–68ch.
- **Body pequeno** (400/500, `body-sm`): descrições de card, itens de lista, links de navegação e rodapé.
- **Button** (600, `button`, 0.01em): todos os botões. Sem caixa-alta.
- **Label** (600, `label`): rótulos de campo de formulário e legendas de canal de contato.

### Named Rules
**A Regra da Ênfase por Cor.** No serifado, ênfase é cor oliva em peso 400 (`em` com `font-style: normal`). Nunca itálico, nunca negrito, nunca gradiente. O serifado só existe em peso 400; hierarquia vem do tamanho.

**A Regra dos Dois Rostos.** Serifado para títulos e números; sans para todo o resto, inclusive botões, FAQ e rótulos. Perguntas de FAQ são DM Sans 600, não serifado.

## Layout

Contêiner centralizado de no máximo 1240px, com respiro lateral de 20px (`space-5`) que sobe para 32px (`space-8`) a partir de 768px. Seções têm padding vertical fluido `section-y` (64px a 104px). A escala de espaço é em passos de 4px (`space-1` a `space-20`); grupos internos usam 8–16px e a separação entre blocos usa 40–48px, sempre mais espaço acima de um título do que abaixo.

O ritmo vertical da home alterna superfícies: `ground` → faixa `band` de números colada ao fim da primeira dobra → `ground` → `surface` → `ground` → `olive-deep` (contato) → `band` (rodapé). Cabeçalho fixo de 84px (`--header-h`), que ganha sombra ao rolar; âncoras compensam a altura do cabeçalho.

Composições recorrentes: título de seção à esquerda numa coluna estreita (~0,9fr) com o conteúdo numa coluna larga (~3fr) à direita (por que escolher, parceiros, depoimentos, FAQ com coluna lateral fixa); grade de três colunas na história e no contato; títulos centralizados com fio dourado nas páginas internas. Hero da home dividido: texto em ~46% à esquerda e foto sangrando até a borda direita em 52%, esmaecendo para o fundo por uma máscara em gradiente linear.

Responsivo: a navegação vira gaveta em tela cheia abaixo de 1080px; o hero empilha abaixo de 1024px (foto em 16:10 depois do texto, citação no canto inferior esquerdo); layouts de duas colunas empilham em 1100px; grades de quatro passam a duas em 960–1100px e a uma em 480–560px; abaixo de 520px os botões do hero e da chamada final ocupam a largura toda.

## Elevation & Depth

Sistema híbrido: a profundidade principal vem do tom (três neutros claros e fios de 1px); sombras são baixas, quentes (tingidas de `ink`), sempre com deslocamento vertical e desfoque suave em duas camadas. Elementos em repouso ficam quase planos; a sombra cresce em resposta ao mouse. Só elementos que flutuam sobre outra superfície recebem sombra alta em repouso.

### Shadow Vocabulary
- **Repouso** (`--shadow-1`: `0 1px 2px rgba(34,35,31,.06), 0 2px 8px rgba(34,35,31,.05)`): cards de porta, faixa de motivos, cards de serviço e de depoimento.
- **Painel** (`--shadow-2`: `0 2px 4px rgba(34,35,31,.05), 0 10px 28px rgba(34,35,31,.09)`): coluna de solução oliva nas páginas internas.
- **Flutuante** (`--shadow-3`: `0 4px 10px rgba(34,35,31,.06), 0 20px 48px rgba(34,35,31,.14)`): hover dos cards; em repouso, só no cartão de citação sobre a foto e no cartão do formulário sobre o oliva profundo.
- **Botão** (`0 1px 2px rgba(54,66,31,.25)` → hover `0 6px 18px rgba(54,66,31,.28)`): sombra oliva do botão primário.
- **Cabeçalho rolado** (`0 6px 24px rgba(34,35,31,.08)`).

### Named Rules
**A Regra da Sombra que Responde.** Cards repousam em `--shadow-1` e, ao passar o mouse, sobem 4px e vão para `--shadow-3`. Sombra alta em repouso só para o que está de fato sobre outra superfície. Nunca sombra sem desfoque, nunca halo colorido sem deslocamento.

## Shapes

Cantos suavemente arredondados em três medidas e nada além: 6px (`radius-sm`) para links de navegação, 8px (`radius`) para botões, campos e canais de contato, 14px (`radius-md`) para cards, painéis e mídia. Controles de ícone são círculos perfeitos (seta "ver mais" de 48px, check de 22px, ícone de FAQ de 32px, redes sociais de 44px, avatar de 44px). Bordas são de 1px em cards e 1,5px em botões e campos. Fotos são cortadas pelo card (`overflow: hidden`) e herdam o raio de 14px.

A forma-assinatura é o **fio dourado**: um traço de 44×2px (32px dentro da citação do hero) acima de cada título de seção, repetido como sublinhado do link ativo e, em 1px vertical, como divisória entre números. Nos passos de "Como funciona" ele vira o início dourado de uma linha superior cinza de 2px.

## Components

### Buttons
Confiantes e baixos, como uma assinatura num documento: retangulares, cantos de 8px, sem caixa-alta.
- **Shape:** cantos suavemente arredondados (8px), borda de 1,5px, altura mínima de 48px (54px no tamanho grande).
- **Primary:** fundo oliva, texto branco, 12×24px de padding; seta de traço à direita que desliza 3px no hover.
- **Hover / Focus:** hover escurece para `olive-hover` e a sombra cresce; `:active` desce 1px; foco de teclado é um contorno dourado de 3px com 3px de afastamento. Transições de 0,18s com `--ease-out`.
- **Outline:** fundo transparente, borda e texto oliva; hover com véu `olive-tint`. É o par do primário (ex.: "Solicitar cotação" + "Falar com um especialista" no WhatsApp, lado a lado).
- **Sobre oliva profundo:** o primário inverte para fundo branco com texto `olive-deep`; o contorno vira branco 70%.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** `surface` com borda `line-soft` de 1px.
- **Shadow Strategy:** `--shadow-1` em repouso; hover levanta 4px para `--shadow-3` quando o card inteiro é clicável.
- **Internal Padding:** 32px (24px em telas pequenas).
- **Card de porta:** foto à esquerda (0,85fr) e corpo à direita, lista de links com checks oliva e, no canto inferior direito, o texto da ação com o círculo de seta.
- **Card de serviço:** foto no topo em 16:8, ícone circular oliva sobreposto à borda da foto com anel branco de 4px, lista de recursos com marcadores dourados de 6px, botões no rodapé.

### Painel Oliva
Painel `olive-deep` de 14px de canto, texto branco, fio dourado interno e ícones de traço dourados. Usado no painel "Fundada em 2015" da história, na coluna de solução das páginas internas e no cartão de citação sobre a foto do hero (com `--shadow-3`). Sempre um por composição.

### Inputs / Fields
- **Style:** fundo `ground`, borda `line` de 1,5px, cantos de 8px, altura mínima de 48px, cursor oliva. Rótulo acima em `label`. Select com seta de traço oliva desenhada.
- **Focus:** fundo vira branco, borda oliva e anel suave `0 0 0 3px rgba(75,90,43,.18)`.
- **Error / Disabled:** borda e mensagem em `error`; resumo de erros em caixa rosada com texto tijolo escuro. Botão de envio desabilitado a 70% de opacidade com cursor de progresso. Sucesso substitui o formulário por um check oliva desenhado em traço.

### Navigation
Cabeçalho fixo `band` de 84px com fio inferior: logo à esquerda (64px de altura), quatro ou cinco links centralizados em DM Sans 500 `ink-2`, botão primário "Solicitar cotação" à direita. Hover dá um véu de 5% de chumbo; o link ativo fica `ink` em 600 com o fio dourado de 2px embaixo, que cresce da esquerda. Abaixo de 1080px, botão de menu de 44px abre gaveta em tela cheia sobre `ground`, com links em DM Serif Display de 1,625rem separados por fios e o botão de cotação ocupando a largura toda.

### Faixa de Números
Faixa `band` entre fios de 1px, quatro colunas separadas por fios dourados verticais de 1px. Cada item: ícone de traço `gold-ink` de 40px, valor em `numeral` que conta ao entrar na tela, legenda em `muted`. Pedida pela referência visual do cliente; só leva números reais e verificáveis.

### FAQ
Lista entre fios `line`, sem caixas nem pílulas. Pergunta em DM Sans 600 que vira oliva no hover; ícone circular de contorno à direita que, aberto, preenche de oliva e gira (45° na home, 180° nas internas). Resposta em `muted`, medida de 68ch.

### Fita de Seguradoras (exceção pedida pelo cliente)
A rolagem horizontal automática das logos de seguradoras e operadoras existe porque o cliente pediu. Não é padrão do sistema e não deve ser reutilizada em outros conteúdos. Ela pausa no hover, para com `prefers-reduced-motion` e esmaece nas bordas.

### Depoimentos (estilo temporário)
Os cards de depoimento com borda tracejada, fundo branco translúcido e textos entre colchetes são marcadores provisórios até chegarem depoimentos reais. Esse estilo tracejado não é um componente do sistema; quando houver conteúdo real, o card volta ao card padrão (`surface`, `line-soft`, `--shadow-1`) com aspas douradas.

## Do's and Don'ts

### Do:
- **Do** use oliva (`olive`) para toda ação e branco com texto `olive-deep` para a ação sobre fundo escuro.
- **Do** abra títulos de seção com o fio dourado de 44×2px e mantenha o dourado como linha, marcador ou ícone.
- **Do** use `gold-ink` para ícones de traço em superfície clara; `gold` só sobre `olive-deep`.
- **Do** dê ênfase no título serifado com cor oliva em peso 400, sem itálico.
- **Do** mantenha cards em `--shadow-1` com borda `line-soft`, subindo 4px para `--shadow-3` no hover.
- **Do** use os três raios do sistema (6px, 8px, 14px) e círculos para controles de ícone.
- **Do** coloque o WhatsApp ao lado da cotação como par primário + contorno nas dobras de decisão.
- **Do** use algarismos tabulares e alinhados (`tnum`, `lnum`) em todo número exibido em destaque.
- **Do** respeite `prefers-reduced-motion` e mantenha o conteúdo visível por padrão, sem animações de entrada.

### Don't:
- **Don't** pinte botões de dourado nem coloque texto escuro sobre dourado (recusa explícita da versão 1.x).
- **Don't** crie faixas escuras pesadas em chumbo ou preto; quando escurecer, use `olive-deep`.
- **Don't** monte FAQ em pílulas pretas; FAQ é lista entre fios.
- **Don't** use texto dourado (`gold`) sobre fundo claro: o contraste é de 2,1:1.
- **Don't** use o serifado em negrito ou itálico, nem gradiente em texto.
- **Don't** coloque rótulos pequenos ou sobretítulos acima de títulos; o fio dourado é a única marca que antecede um título.
- **Don't** reutilize a rolagem automática da fita de seguradoras em outro conteúdo; é uma exceção do cliente.
- **Don't** trate o card tracejado de depoimento como padrão nem invente depoimentos, nomes ou números.
- **Don't** anime nada além da contagem dos números, do levantar dos cards e das respostas de estado (hover, foco, abrir FAQ).
