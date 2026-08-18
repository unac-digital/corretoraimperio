# Registro de mudanças — Site Império Corretora

Este documento registra, em ordem cronológica inversa (mais recente primeiro), todas as alterações feitas no site.

Cada entrada responde a quatro perguntas: o que mudou, por que mudou, quais arquivos foram tocados e o que o visitante percebe na prática.

O texto foi escrito para ser lido em voz alta por leitor de tela. Não há tabelas, diagramas nem símbolos decorativos. Todas as informações estão em frases completas e listas simples.

---

## Alteração 12 — Logo do cabeçalho bem maior, com o arquivo recortado

Data: 5 de agosto de 2026.

### O que o visitante percebe

A imagem da marca no cabeçalho ficou consideravelmente maior. A parte visível dela passou de trinta e seis para setenta e seis pontos de altura, ou seja, mais que dobrou de tamanho. O cabeçalho ficou um pouco mais alto para acomodá-la.

### A causa real do problema

Nas duas tentativas anteriores de ajustar essa logo, o valor da altura foi aumentado e diminuído, mas o problema de fundo passou despercebido: o arquivo de imagem tinha uma enorme margem transparente em volta do desenho.

O arquivo media mil trezentos e sessenta e seis por setecentos e vinte e cinco pontos, mas o desenho da marca ocupava apenas oitocentos e onze por quatrocentos e nove no meio dele. Ou seja, cerca de dois terços do arquivo era espaço vazio.

Como a altura definida no estilo se aplica ao arquivo inteiro, e não ao desenho, o efeito era este: com a altura configurada em sessenta e quatro pontos, o desenho visível tinha apenas trinta e seis. O resto era margem invisível ocupando espaço. Era impossível deixar a logo grande mexendo só no número da altura, porque boa parte do espaço reservado estava sendo gasto com transparência.

### Como foi resolvido

O arquivo da logo foi recortado exatamente nos limites do desenho, passando de mil trezentos e sessenta e seis por setecentos e vinte e cinco para oitocentos e onze por quatrocentos e nove pontos. Nenhuma parte do desenho foi perdida — apenas a margem transparente foi removida. A partir de agora, a altura definida no estilo corresponde à altura real do que aparece na tela.

Só esse recorte já tornou a logo setenta e sete por cento maior, sem alterar nada no layout.

Além disso, a altura do cabeçalho passou de setenta e dois para oitenta e quatro pontos, e a altura da logo foi definida em setenta e seis pontos, deixando quatro pontos de folga acima e abaixo. Somando o recorte e o aumento, a parte visível da marca ficou cerca de cento e onze por cento maior que antes.

### Dois efeitos colaterais que precisaram de ajuste

O primeiro: a mesma imagem é usada no rodapé. Com o recorte, ela também ficaria maior lá. A altura da logo do rodapé foi reduzida de cento e trinta para oitenta e oito pontos, o que deixa o desenho visível ligeiramente maior do que era antes, sem estourar a coluna onde fica.

O segundo: a primeira seção de cada página calcula sua altura descontando a altura do cabeçalho, para ocupar exatamente uma tela. Como o cabeçalho cresceu doze pontos, esse valor de referência foi atualizado junto, de setenta e três para oitenta e cinco pontos.

### Arquivos alterados

Arquivo de imagem "images/logo-imperio/logo-imperio.png": recortado nos limites do desenho.

Arquivo "css/style.css": a altura do cabeçalho, a altura da logo do cabeçalho, a altura da logo do rodapé e o valor de referência da altura do cabeçalho.

Nenhum arquivo de página foi alterado — as onze páginas usam a mesma imagem e os mesmos estilos.

### Como foi verificado

Foi confirmado que o arquivo recortado tem o desenho ocupando cem por cento da sua área, sem nenhuma margem transparente sobrando.

A logo do cabeçalho foi medida em cento e cinquenta e um por setenta e seis pontos, cabendo inteira dentro do cabeçalho, com quatro pontos de folga iguais acima e abaixo.

Foi confirmado que os cinco links de navegação continuam em uma linha cada, sem quebrar, e que não se sobrepõem ao botão do WhatsApp — testado em telas de mil duzentos e oitenta e de novecentos e vinte pontos de largura, esta última já bem perto do ponto em que o menu vira o botão de sanduíche.

No celular, foi confirmado que a logo não encosta no botão do menu, com cento e cinquenta e três pontos de folga entre eles, e que a página não passou a ter rolagem horizontal.

Foi confirmado que a primeira seção continua fechando exatamente uma tela, com o novo valor de altura do cabeçalho, e que a seção seguinte continua não aparecendo na primeira tela.

A logo do rodapé foi medida em cento e setenta e quatro por oitenta e oito pontos, cabendo dentro da sua coluna.

Tudo foi verificado também numa página de produto, dentro de uma pasta, confirmando que o caminho da imagem com "dois pontos e barra" continua carregando corretamente.

---

## Alteração 11 — Logo do cabeçalho maior

Data: 5 de agosto de 2026.

### O que o visitante percebe

A imagem da marca no cabeçalho, que havia sido reduzida numa alteração anterior para parar de aparecer cortada, ficou pequena demais. Ela foi aumentada, ganhando mais presença, sem voltar a ser cortada.

### Por que a mudança foi feita

O usuário apontou que, depois do ajuste anterior, a logo ficou muito pequena.

### Como foi resolvido

A altura da logo passou de cinquenta e dois para sessenta e quatro pontos — um aumento de cerca de vinte e três por cento. Isso deixa apenas quatro pontos de folga acima e abaixo dela dentro do cabeçalho, que tem setenta e dois pontos de altura. É essencialmente o maior tamanho possível sem a logo tocar as bordas do cabeçalho.

### Arquivos alterados

Arquivo "css/style.css": a altura da logo do cabeçalho foi ajustada.

### Como foi verificado

Foi confirmado que a logo, agora com cento e vinte e um por sessenta e quatro pontos, continua cabendo inteira dentro do cabeçalho, com quatro pontos de folga iguais acima e abaixo.

---

## Alteração 10 — Contorno dourado no cartão escuro "Para Empresas"

Data: 5 de agosto de 2026.

### O que o visitante percebe

Na página inicial, o cartão escuro "Para Empresas" — irmão do cartão claro "Para Você" ajustado na alteração anterior — ganhou um contorno dourado sutil, visível o tempo todo, e não apenas quando o cursor passa por cima dele.

### Por que a mudança foi feita

Pedido direto do usuário: aplicar nesse cartão o mesmo tipo de contorno colorido que havia sido aplicado ao cartão claro ao lado.

A investigação mostrou que o cartão escuro já tinha uma regra de contorno, mas ela definia a cor do contorno como sendo exatamente a mesma cor do próprio fundo do cartão. Na prática, isso equivale a não ter contorno nenhum em repouso — as duas cores se sobrepõem e o traço desaparece. Só ao passar o cursor por cima é que um contorno dourado aparecia rapidamente, herdado de uma regra genérica compartilhada com o cartão claro.

### Como foi resolvido

A cor do contorno em repouso foi trocada para o mesmo tom dourado usado no cartão claro vizinho, calibrado numa intensidade um pouco mais forte — de vinte e dois para trinta e cinco por cento de opacidade — porque uma cor clara como o dourado precisa de mais intensidade para se destacar sobre um fundo escuro do que sobre um fundo claro.

### Arquivos alterados

Arquivo "css/style.css": uma regra de estilo ajustada, referente à cor do contorno do cartão escuro em repouso.

Nenhum arquivo de página foi alterado.

### Como foi verificado

Foi confirmado que a cor do contorno do cartão escuro agora é diferente da cor do fundo dele, o que significa que o contorno passou a ser visível de fato, e não apenas sobreposto ao fundo.

---

## Alteração 9 — Sombra e contorno dourado no cartão "Para Você"

Data: 5 de agosto de 2026.

### O que o visitante percebe

Na página inicial, o cartão claro "Para Você" — que fica ao lado do cartão escuro "Para Empresas" — ganhou uma sombra suave e um contorno com um leve tom dourado, em vez do contorno cinza neutro que tinha antes. Os pequenos blocos de serviço dentro dele ("Seguro Auto", "Seguro Saúde Individual e Familiar", "Seguro de Vida e Consórcio") também ganharam esse mesmo tom dourado sutil no fundo e na borda.

### Por que a mudança foi feita

O usuário apontou que as cores daquele cartão não estavam boas e sugeriu experimentar uma sombra ou uma troca de cores.

A causa raiz: o cartão tem fundo branco, e a página ao redor dele tem fundo cinza muito claro. A diferença entre os dois tons é pequena. O contorno do cartão, por sua vez, era um cinza ainda mais próximo do fundo da página do que do próprio branco do cartão. Sem nenhuma sombra em repouso — só ao passar o cursor — o resultado era um cartão que quase não se distinguia da página, especialmente ao lado do cartão escuro vizinho, que tem muita presença visual por si só. Os blocos de serviço dentro do cartão tinham o mesmo problema: um cinza muito parecido com o fundo da página, deixando-os com pouca definição.

### Como foi resolvido

Foi adicionada uma sombra leve ao cartão, presente o tempo todo e não apenas ao passar o cursor, para que ele se destaque do fundo da página desde o primeiro momento.

O contorno cinza foi trocado por um contorno com um toque sutil da cor dourada que já era usada em outros elementos daquele mesmo cartão: a etiqueta "Para Você" e os ícones da lista de serviços. Isso cria uma conexão visual entre as partes do cartão, em vez de introduzir uma cor nova que não existisse já na paleta do site.

Os pequenos blocos de serviço dentro do cartão receberam o mesmo tratamento: um toque de dourado no fundo e na borda, no lugar do cinza neutro anterior.

O cartão escuro "Para Empresas", ao lado, não foi alterado.

### Arquivos alterados

Arquivo "css/style.css": três regras de estilo ajustadas — a aparência do cartão claro em repouso e ao passar o cursor, e a aparência dos pequenos blocos de serviço dentro dele.

Nenhum arquivo de página foi alterado.

### Como foi verificado

Foi confirmado que a cor de fundo do cartão (branco) e a cor de fundo da página ao redor (cinza muito claro) são, agora, visivelmente diferentes.

Foi confirmado que o cartão tem sombra mesmo sem o cursor em cima, e que uma sombra mais forte continua aparecendo ao passar o cursor, como já acontecia antes.

Foi confirmado que o cartão escuro "Para Empresas" manteve exatamente a mesma aparência de antes, sem nenhuma alteração.

Foi confirmado que essas duas classes de estilo alteradas só existem na página inicial, então nenhuma outra página do site foi afetada.

---

## Alteração 8 — Título da seção "Proteção sob medida para cada perfil" em uma linha só

Data: 5 de agosto de 2026.

### O que o visitante percebe

Na página inicial, o título "Proteção sob medida para cada perfil" era exibido em duas linhas, com a palavra "perfil" sozinha na segunda linha. Agora ele aparece inteiro em uma única linha.

### Por que acontecia

O bloco que agrupa o título e o parágrafo abaixo dele tinha largura máxima de seiscentos e oitenta pontos. Esse título, no tamanho de fonte usado em telas grandes, precisa de seiscentos e noventa e quatro pontos para caber em uma linha.

Ou seja: faltavam apenas catorze pontos, cerca de dois por cento. Como o texto não cabia por essa margem mínima, a última palavra era empurrada para a linha seguinte.

### Como foi resolvido

A largura máxima daquele bloco passou de seiscentos e oitenta para setecentos e sessenta pontos, o que dá folga suficiente para o título.

O parágrafo que fica logo abaixo do título, porém, foi mantido na largura anterior de seiscentos e oitenta pontos, e continua centralizado. Isso é importante porque seiscentos e oitenta pontos é uma boa largura de leitura para um texto corrido: linhas muito longas cansam a vista. Em outras palavras, só o título ganhou espaço; o parágrafo continua exatamente como estava.

Também foi acrescentada uma regra que, quando um título realmente não couber em uma linha (em telas menores, por exemplo), reparte o texto em linhas de tamanho parecido, em vez de deixar uma palavra solta na última linha. É o mesmo tipo de problema visual que motivou este ajuste, resolvido de forma geral. Navegadores que ainda não entendem essa regra simplesmente a ignoram, sem quebrar nada.

### Arquivos alterados

Arquivo "css/style.css": três regras ajustadas — a largura máxima do bloco de cabeçalho de seção, o equilíbrio de quebra de linha dos títulos de seção, e a largura máxima do parágrafo descritivo.

Nenhum arquivo de página foi alterado.

### Como foi verificado

Foi medido que o título ocupa seiscentos e noventa e quatro pontos em uma linha, contra os seiscentos e oitenta pontos disponíveis antes — confirmando a diferença de catorze pontos como causa exata.

Depois do ajuste, confirmou-se que o título passou a ocupar uma linha só, e que o parágrafo abaixo dele continua com exatamente seiscentos e oitenta pontos de largura e o mesmo número de linhas de antes.

Em uma tela estreita, de celular, confirmou-se que o título se reparte em duas linhas de tamanhos próximos (duzentos e oitenta e quatro e duzentos e quinze pontos), em vez de deixar uma palavra órfã, e que a página não passou a ter rolagem horizontal.

Confirmou-se ainda que esse bloco de cabeçalho de seção só é usado na página inicial, então a alteração não afeta nenhuma outra página do site. O outro título que usa o mesmo estilo, "Resultados que falam por si", continua em uma linha como antes.

---

## Alteração 7 — Primeira seção ocupando a tela inteira em todas as páginas

Data: 5 de agosto de 2026.

### O que o visitante percebe

Ao abrir qualquer página do site, a primeira seção agora ocupa exatamente toda a altura da tela, do fim do cabeçalho até a borda de baixo. Antes, sobrava uma faixa da seção seguinte aparecendo no rodapé da primeira tela, que era clara e destoava do fundo escuro. Essa faixa não aparece mais.

O comportamento vale para as onze páginas do site e para qualquer tamanho de tela, incluindo celulares. As demais seções da página continuam como estavam.

### Por que a mudança foi feita

Pedido direto do usuário, que descreveu a faixa clara da seção seguinte aparecendo no fim da primeira tela.

A causa era simples: a primeira seção estava configurada para ocupar oitenta e oito por cento da altura da tela na página inicial, e setenta e dois por cento nas páginas internas. Os doze por cento (ou vinte e oito por cento) restantes eram justamente a faixa da seção seguinte que aparecia.

### Como foi resolvido

A altura passou a ser calculada como a altura total da tela menos a altura do cabeçalho. Como o cabeçalho acompanha a rolagem mas ocupa espaço no fluxo da página, descontá-lo faz cabeçalho e primeira seção somarem exatamente uma tela cheia.

Três detalhes cuidaram dos casos difíceis:

Primeiro, a altura da tela é medida com uma unidade que desconta as barras do navegador no celular. Navegadores antigos, que não entendem essa unidade, continuam usando a medida tradicional, sem quebrar nada.

Segundo, havia uma regra específica para telas de até quatrocentos e oitenta pontos de largura que desativava completamente a altura mínima da primeira seção. Era exatamente ela que impedia o comportamento nos aparelhos menores. Foi removida.

Terceiro, o espaçamento interno da primeira seção era fixo em noventa e seis pontos em cima e embaixo. Em monitores de pouca altura, esse valor sozinho já estourava a tela. Ele passou a ser proporcional à altura da tela, variando entre trinta e dois e noventa e seis pontos.

### Uma observação sobre telas muito baixas

Em telas de altura bem reduzida, o conteúdo da primeira seção pode, naturalmente, ser mais alto do que a tela disponível. Nesses casos a seção cresce para caber o conteúdo, em vez de cortá-lo. Mesmo aí, o objetivo principal continua garantido: a seção seguinte não aparece na primeira tela.

### Arquivos alterados

Arquivo "css/style.css": foi criada uma variável guardando a altura do cabeçalho; a altura da primeira seção passou a ser calculada a partir dela; o espaçamento interno virou proporcional; o limite de setenta e dois por cento das páginas internas foi removido; e a regra que desativava a altura mínima nos celulares menores foi removida.

Nenhum arquivo de página precisou ser alterado, porque todas as onze páginas já usavam a mesma classe de estilo na primeira seção.

### Como foi verificado

Foi confirmado que as onze páginas usam a mesma classe na primeira seção, o que faz a regra valer para todas.

As medições foram feitas em cinco tamanhos de tela: um monitor grande, um notebook comum, um monitor de pouca altura, uma tela intermediária e um celular.

Em monitores de proporção comum, a soma da altura do cabeçalho com a da primeira seção fechou exatamente a altura da tela, com diferença menor que dois pontos.

Em todos os tamanhos testados, sem exceção, e tanto na página inicial quanto numa página interna e numa página de produto, confirmou-se que a seção seguinte não aparece na primeira tela.

No celular, confirmou-se ainda que a página não passou a ter rolagem horizontal.

---

## Alteração 6 — Link de início no cabeçalho, logo redimensionada, linha divisória e e-mail do rodapé em uma linha

Data: 5 de agosto de 2026.

### O que o visitante percebe

Quatro ajustes nesta entrada.

Primeiro: o cabeçalho ganhou um link chamado "Início", que leva à página inicial. Antes, a única forma de voltar ao começo do site era clicar na imagem da marca no canto superior esquerdo, o que não é evidente para todo mundo. O link aparece em todas as onze páginas do site, e na própria página inicial ele fica destacado em dourado, indicando ao visitante onde ele está.

Segundo: a imagem da marca no cabeçalho estava grande demais e aparecia cortada. Ela foi reduzida para caber por inteiro, com uma folga equilibrada em cima e embaixo.

Terceiro: foi acrescentada uma linha vertical fina e discreta separando a imagem da marca das opções de navegação. Além disso, as opções de navegação passaram a ficar alinhadas à esquerda, logo depois dessa linha, em vez de ficarem agrupadas do lado direito. O botão verde do WhatsApp continua exatamente onde estava, no canto direito.

Quarto: no rodapé, o endereço de e-mail estava sendo exibido quebrado em duas linhas, o que ficava desalinhado. Agora ele aparece sempre em uma linha só.

### Por que cada mudança foi feita

O link "Início": pedido direto do usuário, que apontou que depender apenas da imagem da marca para voltar ao começo é ruim.

A imagem da marca: ela estava definida com cento e trinta pontos de altura dentro de um cabeçalho de setenta e dois pontos. Ou seja, era quase o dobro do espaço disponível, e por isso aparecia cortada. Foi reduzida para cinquenta e dois pontos, o que deixa cerca de dez pontos de folga acima e abaixo.

A linha divisória e o alinhamento à esquerda: pedido direto do usuário.

O e-mail em uma linha: na alteração anterior, o e-mail havia sido configurado para quebrar linha dentro da própria coluna, como forma de impedir que ele empurrasse e espremesse as colunas vizinhas do rodapé. A solução resolvia o problema do espremimento, mas criava o problema da quebra, que o usuário apontou agora. A nova solução resolve os dois ao mesmo tempo: a coluna de contato passou a ser dimensionada pelo tamanho do próprio conteúdo, garantindo espaço para o e-mail inteiro, e as demais colunas dividem o que sobra.

### Um ajuste adicional que essa correção exigiu

Como a coluna de contato agora reserva uma largura fixa para o e-mail, em telas de tamanho intermediário sobrava pouco espaço para as outras quatro colunas, e alguns links de navegação voltavam a quebrar linha. Por isso, o ponto em que o rodapé se reorganiza de cinco colunas para duas colunas foi antecipado: antes isso acontecia em telas menores que novecentos pontos, agora acontece em telas menores que mil e oitenta pontos. Na prática, em notebooks de tela menor o rodapé passa a exibir duas colunas largas e confortáveis em vez de cinco colunas apertadas.

### Arquivos alterados

Arquivo "css/style.css": a altura da imagem da marca no cabeçalho foi reduzida; a área de navegação passou a ocupar o espaço restante com os links alinhados à esquerda e o botão do WhatsApp empurrado para a direita; foi criada a linha divisória, que fica escondida quando o menu do celular está aberto, já que ali a navegação vira uma lista vertical; o e-mail do rodapé voltou a ficar em linha única e a coluna de contato passou a ser dimensionada pelo conteúdo; o ponto de reorganização do rodapé foi antecipado.

Onze páginas receberam o novo link "Início" no cabeçalho, com o endereço ajustado conforme a localização de cada página dentro das pastas do site.

### Como foi verificado

No cabeçalho: a imagem da marca foi medida e confirmou-se que ela cabe inteira dentro da altura do cabeçalho, com folga igual em cima e embaixo. A linha divisória foi confirmada com um ponto de largura e vinte e quatro pontos de altura. Confirmou-se que os links começam logo após a linha divisória, à esquerda, e que o botão do WhatsApp permanece encostado na margem direita. Na página inicial, o link "Início" aparece destacado em dourado; nas páginas internas, quem fica destacada é a página correspondente, como antes.

O menu do celular foi aberto e fechado: o link "Início" aparece na lista, e a linha divisória fica corretamente escondida.

No rodapé: o e-mail foi medido em quatro larguras de tela diferentes, de um monitor grande até a largura de um celular, e em todas ele apareceu em uma linha só. Nenhum link de navegação do rodapé quebrou linha, e em nenhuma das larguras a página passou a ter rolagem horizontal.

Numa página de produto, dentro de uma pasta, confirmou-se que o link "Início" aponta corretamente para a página inicial um nível acima.

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
