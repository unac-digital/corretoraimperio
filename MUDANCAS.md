# Registro de mudanças — Site Império Corretora

Este documento registra, em ordem cronológica inversa (mais recente primeiro), todas as alterações feitas no site.

Cada entrada responde a quatro perguntas: o que mudou, por que mudou, quais arquivos foram tocados e o que o visitante percebe na prática.

O texto foi escrito para ser lido em voz alta por leitor de tela. Não há tabelas, diagramas nem símbolos decorativos. Todas as informações estão em frases completas e listas simples.

---

## Alteração 2 — Faixas de logos giram de forma realmente infinita

Data: 5 de agosto de 2026.

### O que o visitante percebe

As duas faixas de logos que rolam na tela — a de seguradoras parceiras e a de operadoras de saúde parceiras — passaram a girar continuamente, sem nenhum tranco, pulo ou trecho vazio no momento em que a sequência recomeça.

Três comportamentos foram mantidos exatamente como estavam:

1. A velocidade continua a mesma de antes: onze pixels por segundo.
2. A faixa continua parando quando o visitante posiciona o cursor do mouse sobre ela.
3. Os logos continuam mudando de cinza para colorido quando o cursor passa sobre eles.

### Por que a mudança foi necessária

A faixa dava saltos visíveis durante a navegação, dando a impressão de que a sequência tinha acabado e recomeçado do zero.

A investigação mostrou que a emenda entre o fim e o começo da sequência sempre esteve matematicamente perfeita, com erro de zero pixel. O problema não era a emenda. O problema era que a faixa estava sendo remontada várias vezes enquanto já estava em movimento.

Foram encontradas quatro causas independentes, todas corrigidas.

#### Causa um: a animação começava antes da medição

A folha de estilo mandava a animação começar imediatamente, com uma duração provisória de quarenta segundos. Só depois o código JavaScript media a faixa e gravava a duração correta.

Trocar a duração de uma animação que já está rodando faz o navegador recalcular em que ponto ela deveria estar naquele instante. O resultado é a faixa pular de posição.

Correção: a animação agora nasce pausada e só é liberada depois que a medição termina. Assim ela começa já com a duração definitiva e nunca mais muda enquanto roda.

#### Causa dois: os logos eram medidos com largura zero

As imagens dos logos estavam marcadas com carregamento adiado, o atributo chamado "loading igual a lazy". Como as faixas ficam abaixo da primeira tela, as imagens só começavam a carregar quando o visitante rolava a página até elas.

Consequência: no momento em que o código media a largura dos logos para calcular a velocidade, as imagens ainda não existiam e mediam zero pixel de largura. A conta saía errada e o navegador chegava a criar cento e trinta e seis cópias de logo em vez das trinta e seis necessárias.

Correção: o carregamento adiado foi removido das imagens das faixas. São imagens pequenas, a maioria em formato vetorial, e o layout da página depende delas para ser calculado corretamente.

#### Causa três: as cópias viravam originais

A cada remontagem, o código lia a lista de logos antes de apagar as cópias antigas. As cópias entravam na lista como se fossem logos originais e eram copiadas de novo. A faixa crescia sem parar a cada remontagem.

Correção: as cópias passaram a ser apagadas antes da leitura da lista. A contagem de logos originais agora permanece estável, não importa quantas vezes a faixa seja remontada.

#### Causa quatro: a largura era medida logo depois de copiar

O código media a largura final da faixa imediatamente após criar as cópias. Acontece que uma imagem copiada é uma imagem nova para o navegador: ela precisa carregar de novo, ainda que instantaneamente a partir da memória. No instante da medição as cópias tinham largura zero, e só a margem entre elas era contabilizada.

Isso fazia a faixa andar a dezenove pixels por segundo em vez de onze.

Correção: a largura passou a ser calculada por aritmética, multiplicando a largura dos logos originais já carregados pelo número de cópias, em vez de reler o documento. Como toda cópia é idêntica ao conjunto original, a conta é exata.

### Correções adicionais de robustez

Durante os testes, dois problemas menores apareceram e também foram corrigidos.

O primeiro: quando a página abre em uma aba de segundo plano, o navegador congela temporizadores e adia eventos. A faixa ficava parada para sempre. Agora o código também tenta montar a faixa quando a aba se torna visível e quando a página termina de carregar.

O segundo: se a tentativa de montagem falhasse por falta de layout, o código marcava aquela tentativa como concluída e nunca mais tentava. Agora ele só registra a montagem depois que ela dá certo, e um observador de redimensionamento reage assim que a faixa ganha largura.

### Correção na página Para Empresas

A página Para Empresas tinha uma faixa de logos antiga, montada à mão, com quatro logos originais e quatro duplicatas escritas manualmente no arquivo. Ela não usava o mecanismo automático.

Como a nova regra de estilo exige a liberação pelo JavaScript, essa faixa teria ficado permanentemente parada. Ela foi convertida para o mesmo mecanismo das outras: as duplicatas manuais foram removidas e a marcação "data-marquee" foi adicionada. Agora ela gira com a mesma velocidade e a mesma continuidade das demais.

### Arquivos alterados

Arquivo "js/script.js": o bloco do carrossel foi reescrito.

Arquivo "css/style.css": a animação passou a nascer pausada; foi adicionada a regra que a libera quando a seção está pronta; a regra de pausa no cursor foi ajustada para continuar tendo prioridade; a regra morta que controlava o antigo botão de pausar foi removida.

Arquivo "index.html": o carregamento adiado foi removido de dezessete imagens de logo.

Arquivo "para-voce.html": o carregamento adiado foi removido de dezessete imagens de logo.

Arquivo "empresas.html": o carregamento adiado foi removido de oito imagens de logo; as quatro duplicatas manuais foram removidas; a marcação "data-marquee" foi adicionada.

### Como foi verificado

Todas as cinco faixas do site foram medidas diretamente no navegador, nas três páginas que as contêm.

Resultados obtidos em todas elas:

- Erro na emenda do ciclo: zero pixel.
- Velocidade: onze pixels por segundo.
- A primeira metade da faixa é sempre mais larga que a área visível, portanto nunca aparece espaço vazio.
- A segunda faixa de cada página continua girando no sentido contrário, como no desenho original.
- Todas as cópias de logo continuam marcadas como decorativas, com o atributo "aria-hidden", de modo que o leitor de tela lê a lista de parceiros uma única vez, no parágrafo oculto que existe para esse fim.

Testes de estresse realizados:

- Dez eventos de redimensionamento seguidos: a quantidade de logos e a velocidade não mudaram, confirmando que a remontagem descontrolada foi eliminada.
- Larguras de tela testadas: mil duzentos e oitenta pixels, novecentos pixels e trezentos e setenta e cinco pixels. Em todas, a emenda permaneceu exata e a velocidade constante.
- Em trezentos e setenta e cinco pixels, confirmou-se que a faixa não provoca rolagem horizontal na página.
- Página aberta em aba oculta: a faixa monta corretamente assim que ganha condições, cenário que antes a deixava travada.

A regra de movimento reduzido, que desliga a animação para quem configurou o sistema para reduzir animações, foi verificada e continua funcionando.

A pausa ao passar o cursor e a revelação de cor foram verificadas por análise de prioridade das regras de estilo, e não por um teste com ponteiro real, porque o ambiente de pré-visualização usado não desenha a tela. A regra de pausa no cursor tem prioridade maior que a regra que mantém a animação rodando, e a regra de cor no cursor tem prioridade maior que a regra que deixa os logos em cinza.

---

## Alteração 1 — Remoção dos botões de pausar animação

Data: 5 de agosto de 2026.

### O que o visitante percebe

Os botões escritos "Pausar", que apareciam logo abaixo de cada faixa de logos, deixaram de existir. O espaço vazio que eles ocupavam foi eliminado, e os logos ficaram melhor enquadrados na seção.

### Por que a mudança foi necessária

Os botões poluíam visualmente a página, criavam um espaço vazio desnecessário abaixo das faixas e não eram usados pelos visitantes.

### Arquivos alterados

Arquivo "index.html": dois botões removidos, um na seção de seguradoras e outro na seção de operadoras de saúde.

Arquivo "para-voce.html": dois botões removidos, nas mesmas duas seções.

Arquivo "css/style.css": trinta e uma linhas de estilo removidas, referentes à aparência do botão, ao seu estado de foco e à troca entre os ícones de pausar e continuar.

Arquivo "js/script.js": removido o trecho que reagia ao clique no botão e alternava o estado de pausa da faixa.

### Observação sobre o espaçamento

Nenhum ajuste de espaçamento foi necessário. A seção já tinha um recuo simétrico em cima e embaixo, definido pela variável de espaço número oito. Com o botão fora, esse recuo passou a enquadrar os logos de forma equilibrada por si só.

### Como foi verificado

Foi confirmado no navegador que nenhum elemento de botão de pausa permanece nas páginas e que o console não apresenta erros.
