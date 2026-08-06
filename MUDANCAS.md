# Registro de mudanças — Site Império Corretora

Este documento registra, em ordem cronológica inversa (mais recente primeiro), todas as alterações feitas no site.

Cada entrada responde a quatro perguntas: o que mudou, por que mudou, quais arquivos foram tocados e o que o visitante percebe na prática.

O texto foi escrito para ser lido em voz alta por leitor de tela. Não há tabelas, diagramas nem símbolos decorativos. Todas as informações estão em frases completas e listas simples.

---

## Alteração 5 — Rodapé padronizado em todo o site e cards de serviço reorganizados

Data: 5 de agosto de 2026.

### O que o visitante percebe

Dois ajustes nesta entrada.

Primeiro: até esta alteração, apenas a página inicial tinha o rodapé completo e bem organizado, com as informações divididas em colunas claras: marca, Soluções, Empresa, Grupo Império e Contato. Todas as outras dez páginas do site, incluindo a página Para Empresas, a página Para Você, e as oito páginas de produtos específicos, usavam um modelo de rodapé mais antigo, que não tinha o mesmo visual. O ano exibido no direito autoral, nessas páginas antigas, também estava escrito à mão e desatualizado, mostrando 2025. Agora todas as onze páginas do site compartilham exatamente o mesmo rodapé, com o mesmo visual, a mesma organização em colunas, e o ano atualizado automaticamente em todas elas.

Segundo: na seção de serviços da página Para Empresas e da página Para Você, os quatro cartões de serviço apareciam três numa fileira de cima e um sozinho embaixo, deixando um espaço vazio grande ao lado dele. Agora os quatro cartões aparecem organizados em duas fileiras de dois, como pedido.

### Por que cada mudança foi feita

O rodapé: o usuário percebeu que o rodapé de uma página de produto estava visualmente diferente do rodapé da página inicial e pediu para que todas seguissem o mesmo padrão. A investigação revelou a causa: aquele modelo de rodapé mais antigo usava um nome de classe de estilo que não tinha mais nenhuma regra correspondente na folha de estilos do site. Na prática, ele estava sendo exibido sem nenhuma formatação de colunas, espaçamento ou destaque — o oposto do rodapé moderno e organizado da página inicial. Ao mesmo tempo, foi encontrado que o campo do ano no rodapé novo (o da página inicial) também tinha um pequeno defeito: o código que deveria preencher o ano atual procurava por um nome de campo que não existia mais ali, então esse campo específico ficava sempre vazio. Os dois problemas foram corrigidos juntos.

Os cartões de serviço: pedido direto do usuário.

### Arquivos alterados

Dez páginas tiveram o rodapé inteiro substituído pelo modelo padrão, ajustando apenas os endereços dos links de acordo com a localização de cada página dentro das pastas do site: a página Para Empresas, a página Para Você, e as oito páginas de produtos específicos dentro das pastas de empresas e de pessoa física.

Arquivo "js/script.js": o trecho que preenche o ano no rodapé passou a reconhecer também o novo campo de ano, além do antigo, corrigindo o campo que ficava vazio.

Arquivo "css/style.css": a organização dos cartões de serviço passou de três colunas para duas colunas nas telas grandes, o que afeta igualmente a página Para Empresas e a página Para Você, já que as duas têm exatamente quatro cartões cada.

### Como foi verificado

O novo rodapé foi conferido numa das páginas de produto mais profundas do site, dentro da pasta de empresas: a imagem da marca carregou corretamente, o ano apareceu preenchido com o ano atual, e todos os links de navegação apontaram para os endereços corretos, considerando que a página está uma pasta abaixo da página inicial. As larguras das cinco colunas do rodapé, medidas nessa página de produto, ficaram idênticas às larguras já validadas na página inicial.

A reorganização dos cartões de serviço foi conferida tanto na página Para Empresas quanto na página Para Você: em ambas, os quatro cartões apareceram distribuídos em duas fileiras de dois, sem nenhum cartão sozinho.

### Um ponto que vale a atenção do cliente

Ao replicar o rodapé padrão, três links de navegação foram copiados exatamente como estavam na página inicial: "Sobre nós", "Contato" e "Perguntas frequentes", que apontam para pontos específicos dentro da página inicial. Durante a verificação, foi constatado que a página inicial, na sua versão atual, não tem mais nenhuma seção marcada com esses três nomes internos — ela foi reestruturada em algum momento anterior e essas marcações de destino não foram recriadas. Isso significa que, ao clicar nesses três links específicos em qualquer página do site, incluindo a própria página inicial, o visitante é levado para o topo da página inicial, em vez de ser levado direto até a seção correspondente. Essa falha já existia antes desta alteração e não foi criada por ela; ela apenas se tornou visível em mais lugares porque o rodapé padrão, que já tinha essa falha, passou a ser usado em todo o site. Como não foi pedido para corrigir esse ponto, ele foi deixado como estava, apenas registrado aqui para conhecimento.

---

## Alteração 4 — Cabeçalho com cor fixa, ícone corrigido, botão do WhatsApp removido, rodapé reequilibrado e textos justificados

Data: 5 de agosto de 2026.

### O que o visitante percebe

Seis ajustes independentes nesta entrada.

Primeiro: o cabeçalho do site, que antes nascia branco no topo da página e virava preto de repente assim que o visitante rolava cinquenta pixels, agora tem uma única cor fixa, o mesmo preto usado no rodapé. Não existe mais essa troca abrupta de cor durante a rolagem.

Segundo: um pequeno ícone que aparecia quebrado (faltando partes do desenho) ao lado do texto "Para Empresas", na página inicial, foi corrigido para ficar completo, igual ao ícone maior usado no card ao lado.

Terceiro: a seção "Em números", que mostra a contagem de clientes, empresas, seguradoras e anos de experiência, tinha exatamente a mesma cor de fundo do rodapé, o que fazia as duas parecerem uma coisa só. Agora ela tem um tom de cinza mais claro, diferente do rodapé, mas ainda dentro da paleta de cores do site.

Quarto: o botão redondo do WhatsApp que ficava sempre visível, flutuando no canto inferior direito da tela em todas as páginas, foi removido. Os outros botões de WhatsApp do site, os que ficam dentro do conteúdo normal da página, continuam no lugar e funcionando.

Quinto: a organização das informações no rodapé ficou mais equilibrada. Antes, a coluna "Grupo Império", que tem só dois links, ocupava a mesma largura que a coluna "Soluções", que tem cinco links — sobrava muito espaço vazio de um lado. Ao mesmo tempo, o endereço de e-mail no bloco de contato, por ser um texto sem espaços, empurrava aquela coluna para ficar mais larga do que deveria, espremendo as colunas do meio. Em telas de notebook comum, isso chegava a quebrar o texto "Perguntas frequentes" de um jeito feio. Agora cada coluna tem uma largura proporcional à quantidade real de informação que ela carrega, e o e-mail quebra em duas linhas de forma organizada dentro do espaço da própria coluna, em vez de empurrar as colunas vizinhas.

Sexto: quatro tipos de texto do site passaram a ficar alinhados nas duas margens, esquerda e direita, em vez de só na esquerda. São eles: os parágrafos de apresentação para empresas e para pessoas físicas na página inicial, a descrição dos cards de serviço, o texto dos depoimentos de clientes, e as respostas do "Perguntas frequentes".

### Por que cada mudança foi feita

O cabeçalho: o usuário relatou que a cor branca do topo destoava da identidade visual escura do restante do site, e que a troca súbita para preto ao rolar também incomodava. A solução foi fixar uma única cor, eliminando as duas reclamações de uma vez.

O ícone: ele estava com apenas dois traços do desenho original de cinco, resultando numa forma incompleta.

A cor da seção "Em números": o usuário identificou que ela estava com a mesma cor do rodapé logo abaixo.

O botão flutuante do WhatsApp: pedido direto do usuário para removê-lo do site inteiro.

O rodapé: pedido direto do usuário para reorganizar as informações de forma mais harmoniosa. A investigação encontrou a causa técnica exata do desequilíbrio, descrita no parágrafo anterior.

Os textos justificados: pedido direto do usuário.

### Uma observação sobre acessibilidade

Alinhar texto nas duas margens pode, em alguns casos, criar espaçamentos irregulares entre palavras, o que dificulta um pouco a leitura para pessoas com dislexia. É uma prática desaconselhada pelas diretrizes de acessibilidade no nível mais rigoroso, mas não constitui uma falha grave, e a mudança foi aplicada exatamente como solicitada. Se o usuário perceber espaçamento estranho em algum parágrafo curto específico, é possível reverter só aquele trecho sem afetar os demais.

### Arquivos alterados

Arquivo "css/style.css": nove blocos de estilo alterados. A cor do cabeçalho passou a ser fixa e as regras que trocavam essa cor durante a rolagem foram removidas por não fazerem mais efeito nenhum. A cor de fundo da seção "Em números" foi trocada. O bloco inteiro de estilo do botão flutuante do WhatsApp foi apagado, por não ter mais utilidade. As larguras das colunas do rodapé foram recalculadas, e foi adicionada uma regra que permite ao endereço de e-mail quebrar linha dentro da própria coluna. Foi adicionado alinhamento justificado em quatro tipos de texto.

Arquivo "index.html": o ícone quebrado foi completado com as partes que faltavam.

Onze páginas tiveram o botão flutuante do WhatsApp removido: a página inicial, a página Para Empresas, a página Para Você, e as oito páginas de produtos específicos dentro das pastas de empresas e de pessoa física.

### Como foi verificado

O cabeçalho foi conferido antes e depois de simular a rolagem da página: a cor de fundo permaneceu idêntica nos dois momentos, confirmando que a troca de cor não acontece mais. Foi conferido também que o link da página em que o visitante está aparece destacado em dourado, tanto na página inicial quanto nas páginas internas.

O ícone corrigido foi conferido: agora ele tem os cinco traços completos, os mesmos do ícone maior ao lado.

A ausência do botão flutuante do WhatsApp foi conferida nas onze páginas. Nenhum estilo órfão relacionado a ele restou na folha de estilos.

O rodapé foi conferido em três larguras de tela diferentes, simulando um monitor grande, um notebook comum, e a largura logo antes de a página reorganizar as colunas em duas linhas. Em nenhuma dessas larguras algum link de navegação quebrou linha de forma inesperada, e o endereço de e-mail passou a quebrar corretamente dentro do espaço da própria coluna.

Os quatro tipos de texto justificado foram conferidos visualmente, mostrando as margens retas dos dois lados dos parágrafos.

---

## Alteração 3 — Troca de seis logos e novo padrão de tamanho das faixas

Data: 5 de agosto de 2026.

### O que o visitante percebe

Seis logos das faixas foram substituídos por versões novas, enviadas pelo cliente. Além disso, todos os logos das faixas ficaram maiores e passaram a ter tamanhos visualmente equivalentes entre si.

Antes, alguns logos apareciam muito grandes e outros quase ilegíveis. Agora todos ocupam aproximadamente o mesmo peso visual na tela.

### Os seis logos trocados

O logo da Mapfre passou a ser um arquivo em formato WebP.

O logo da Porto Seguro passou a ser a versão vertical, com o símbolo em cima e o nome embaixo. Essa troca vale tanto onde o logo aparece identificado como Porto Seguro quanto onde aparece como Porto Saúde, já que é a mesma marca e o site sempre usou o mesmo arquivo nos dois lugares.

O logo da Suhai passou de imagem PNG para vetor SVG.

O logo da Hapvida passou de imagem PNG para vetor SVG.

O logo do Bradesco Saúde passou a ser um vetor novo. Vale tanto onde aparece como Bradesco Seguros quanto como Bradesco Saúde.

O logo da Yelum passou a ser um vetor novo.

Na página Para Empresas, o logo da SulAmérica passou de imagem PNG para o vetor SVG que as outras páginas já usavam.

### Problemas encontrados nos arquivos recebidos

Três arquivos chegaram com defeitos que os deixavam praticamente invisíveis nas faixas. Todos foram corrigidos.

O arquivo da Suhai tinha uma área de desenho quadrada de setecentos por setecentos unidades, mas a arte ocupava apenas dezessete por cento desse espaço. O restante era margem vazia. Como a faixa dimensiona pelo tamanho declarado do arquivo, o logo aparecia reduzido a quase nada. A área de desenho foi recortada até os limites reais da arte.

O arquivo do Bradesco tinha um problema mais grave: a arte se estendia por mais de duas mil unidades de largura, mas a área de desenho declarada cortava em setecentas. O arquivo continha duas versões do logo lado a lado, e a área declarada exibia apenas parte da primeira. A área foi recortada para enquadrar exatamente uma versão completa.

O arquivo da Yelum tinha cerca de trinta e sete por cento de margem vazia em volta da arte. Também foi recortado.

O arquivo da Porto Seguro, que eu mesmo havia separado anteriormente, teve a margem residual removida para ficar no mesmo padrão dos demais.

### O novo padrão de tamanho

A altura de cada logo subiu de quarenta e dois para cinquenta e oito pontos, e a altura da célula que o contém subiu de cinquenta e dois para oitenta pontos. Os logos ficaram visivelmente maiores.

Logos com formatos muito diferentes não podem ser dimensionados apenas pela altura. Um logo alto e estreito, dimensionado pela altura, fica com uma área minúscula; um logo largo e baixo fica enorme. Medindo a área que cada logo ocupava na tela, a diferença entre o menor e o maior era de cinco vezes.

Foram criados três ajustes, aplicados conforme o formato de cada logo. O primeiro, para logos em formato retrato, permite altura maior. O segundo, para logos muito horizontais, permite largura maior. O terceiro, para logos que ficavam pesados demais, reduz a largura máxima.

Com esses três ajustes, a diferença entre o menor e o maior logo caiu de cinco vezes para uma vez e meia.

### Correção no efeito de cor cinza

As faixas exibem os logos em cinza e revelam a cor original quando o cursor passa por cima. O efeito de cinza usava um aumento forte de brilho.

Esse aumento de brilho destruía logos formados por arte branca vazada sobre fundo colorido. O caso mais visível era o da Porto Seguro: o símbolo, que é uma onda branca sobre um quadrado azul, virava um quadrado cinza completamente liso, sem nenhum desenho reconhecível.

O aumento de brilho foi reduzido e o contraste ajustado. Agora a onda da Porto Seguro aparece normalmente, e os demais logos mantêm o mesmo aspecto suave de antes.

### Correção de dois logos antigos que sumiram

Ao aplicar o novo dimensionamento, os logos da Tokio Marine e da Unimed passaram a não aparecer.

O motivo: esses dois arquivos não declaram largura nem altura próprios, apenas a área de desenho. Quando o dimensionamento depende inteiramente do tamanho natural do arquivo, esses dois colapsam para tamanho zero.

A solução foi manter uma altura definida na folha de estilo, em vez de deixá-la automática. Assim o navegador tem sempre uma dimensão concreta de onde partir, e nenhum logo depende do arquivo declarar seu próprio tamanho.

### Página Para Empresas equiparada às demais

A faixa da página Para Empresas exibe quatro logos: SulAmérica, Bradesco Saúde, Porto Seguro e Hapvida. Ela recebeu exatamente o mesmo tratamento das outras páginas — os mesmos arquivos novos, o mesmo tamanho, o mesmo espaçamento e os mesmos ajustes de equilíbrio. Nenhum logo foi acrescentado a essa faixa.

### Correção de texto para leitor de tela

Na página Para Você, o parágrafo oculto que descreve as seguradoras parceiras não mencionava o Bradesco, embora o logo estivesse na faixa. O nome foi acrescentado para a descrição corresponder ao que é exibido.

### Arquivos alterados

Arquivo "css/style.css": novo tamanho das células e dos logos, três ajustes de equilíbrio por formato, e correção do efeito de cinza.

Arquivo "index.html": trocas de Mapfre, Suhai e Hapvida, e ajustes de equilíbrio aplicados aos logos das duas faixas.

Arquivo "para-voce.html": as mesmas trocas e ajustes, mais a correção do texto para leitor de tela.

Arquivo "empresas.html": troca de SulAmérica e Hapvida, e ajustes de equilíbrio nos quatro logos.

Foram adicionados os arquivos de imagem novos e recortados nas pastas "images/logos-seguradoras" e "images/logos-operadoras-saude".

### Como foi verificado

As três páginas foram medidas diretamente no navegador.

Nenhuma imagem falhou ao carregar. Nenhum logo ficou com tamanho zero. A diferença de área entre o menor e o maior logo ficou em uma vez e meia.

As faixas continuam girando de forma infinita: erro na emenda do ciclo igual a zero pixel, velocidade de onze pixels por segundo, e a primeira metade sempre mais larga que a área visível.

O efeito de revelar a cor ao passar o cursor foi confirmado visualmente desta vez, e não apenas por análise das regras de estilo.

Em largura de tela de trezentos e setenta e cinco pontos, confirmou-se que as faixas maiores não provocam rolagem horizontal na página.

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
