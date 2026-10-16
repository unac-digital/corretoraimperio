# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Donos, sócios e responsáveis por RH de pequenas e médias empresas de Arujá, Alto Tietê e Grande São Paulo, que precisam contratar ou trocar plano de saúde empresarial e seguro de vida coletivo para equipes de 2 a centenas de pessoas.
- Pessoas físicas e famílias da mesma região procurando seguro auto, saúde individual/familiar, seguro de vida ou consórcio, que querem comparar opções sem burocracia.

O visitante chega querendo saber se a corretora é confiável e quer falar com alguém rápido, quase sempre pelo WhatsApp.

## Product Purpose

Corretora de seguros independente com sede em Arujá/SP, fundada em 2015. Cota em várias seguradoras e operadoras ao mesmo tempo e entrega a melhor combinação de cobertura e preço, com um consultor que acompanha da cotação à implantação e durante toda a vigência. Sucesso do site é gerar contato qualificado: conversa no WhatsApp ou formulário de cotação preenchido.

## Positioning

Corretora local, com atendimento humano e próximo, que tem acesso às grandes seguradoras do país. O cliente fala com uma pessoa da região, não com uma central.

## Operating Context

- Atendimento principal pelo WhatsApp (11) 96497-8014; telefone (11) 4753-5830; e-mail contato@corretoraimperio.com.br.
- Sede: Rodovia Alberto Hinoto, 965 — Ed. Comercial Arujazinho, Sala 28 — Arujá/SP, CEP 07434-100. Atendimento remoto (WhatsApp, videochamada) para toda a região.
- Prazos: cotação de auto e vida em até 24h úteis; plano de saúde empresarial em até 48h.

## Capabilities and Constraints

- Site estático (HTML, CSS, JS sem framework), publicado no GitHub Pages pelo branch `gh-pages`. Fluxo obrigatório: mudanças vão primeiro para `dev`, depois para `gh-pages`.
- Páginas: home, Para Empresas, Para Você e 8 páginas de produto (4 em `empresas/`, 4 em `para-voce/`).
- O `.htaccess` (reescrita de URL sem `.php`) não deve ser alterado.
- Formulário de cotação na home e no contato; botões de WhatsApp em todas as páginas são o principal caminho de conversão e não podem sumir.
- Toda nova versão visual é construída em branch separado e só substitui a versão no ar com aprovação explícita do cliente.

## Brand Commitments

- Nome: Império Corretora de Seguros. Logo em `images/logo-imperio/logo-imperio.png` (figura e estrelas douradas, letreiro em cinza chumbo e dourado).
- Cores da marca: cinza chumbo e dourado, tirados da logo. Para a versão 2.0 o cliente aprovou o verde-oliva da imagem de referência como cor dos botões e destaques, com o dourado nos detalhes.
- Tipografia em uso: DM Serif Display (títulos) e DM Sans (texto).
- Referência visual escolhida pelo cliente: mockup da home com header cinza claro, botão de cotação verde-oliva, faixa de números, cards com foto, seção "Por que escolher", fita de seguradoras, história, depoimentos e bloco de contato com formulário. É inspiração, não cópia.
- Rodapé mantém a coluna "Grupo Império" (Clickers e Espanção).

## Evidence on Hand

- Números reais usados no site: mais de 500 clientes atendidos em Arujá e região, mais de 150 empresas com plano de saúde, mais de 10 seguradoras parceiras, mais de 15 anos de experiência no mercado de seguros. Fundação em 2015.
- Seguradoras: Porto Seguro, Azul, Tokio Marine, Yelum, Mapfre, Allianz, Bradesco Seguros, Suhai, Zurich, Pier. Operadoras de saúde: Porto Saúde, Bradesco Saúde, SulAmérica, Amil, Hapvida, São Miguel Saúde, Unihosp, Unimed, Plena Saúde, Garantia de Saúde. Logos em `images/logos-seguradoras/` e `images/logos-operadoras-saude/`.
- Fotos licenciadas em `images/conteudo/` (consultora, executiva, casal, família, equipe, auto, odonto, consórcio etc.), em 3 tamanhos webp.
- Não existem depoimentos reais ainda. As páginas usam espaços marcados `[CLIENTE: inserir depoimento real]`. Nunca inventar nomes, textos de clientes, notas ou números.
- Não existem fotos reais da equipe nem da sede.

## Product Principles

1. Falar com uma pessoa tem que estar sempre a um toque: WhatsApp visível em toda dobra relevante.
2. Confiança se prova com fatos verificáveis (seguradoras reais, prazos, endereço), nunca com promessas vagas.
3. Duas portas claras desde o início: empresa ou pessoa física.
4. Linguagem simples, sem jargão de seguro.

## Accessibility & Inclusion

O registro de mudanças (`MUDANCAS.md`) é escrito para ser lido por leitor de tela: frases completas, sem tabelas nem símbolos decorativos. O site deve manter navegação por teclado, foco visível, contraste WCAG AA, link de pular para o conteúdo e respeito a `prefers-reduced-motion`.
