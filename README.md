
Desafios do projeto
O projeto em si não possui nenhuma funcionalidade muito complexa, mas sim testa conhecimentos basicos do CSS, algo que eu não possuo muito conhecimento sobre.
A primeira dificuldade que eu encontrei foi como posicionar um elemento sobre o outro. 
Para fazer isso podemos usar a propriedade position, no elemnto pai que queremos que algo fique sobre ele usaremos o valore relative : position: relative;, já o elemento filho que queremos colocar sobre algo usaremos o valor absolute: position: absolute; e para mover o elemento filho usaremos as propriedades top, bottom, left e right

Também relembrei que é melhor usar a unidade rem para definir tamanho de fontes, já que ela é uma unidade responsiva
Outro ponto é como fazer para colocar elementos como background de outros.Por exemplo se eu tenho uma div e eu nela eu tenho uma texto, como que eu fasso para colocar uma imagem dentro da div, mas não coloca-la sobre o texto.
Para fazer isso usei a propriedade z-index, se eu quero colocar uma imagem atraz do texto o texto tem que ter um valor da propriedade z-index maior que o da imagem, se o texto tem z-index: 1; a imagem tem que ter z-index:-1;
É claro que a imagem tem que ter position:absolute e a div pai tem que ter position:relative.

Como eu fiz o carrossel  de imagens
Está foi a parte mais dificil do projeto, pois eu acabei complicando muito como o carrossel  deveria funcionar, de primeira eu imaginei o carrossel  como algo circular onde quando chegase no ultimo elemento do carrossel  o primeiro apareceria, mas isso não parece ser possivel ao menos não como eu imaginava,então eu dei um passo para tras e tentei imaginar a maneira mais simples de fazer o movimento do carrossel  e a conclução foi de simplismente usar a propriedade transitionX da propriedade transform do CSS. Usando valores possitivos para ir para frente e negativos para ir para tras em porcentagem eu fui capaz de fazer o carrossel .
O carrossel no mobile

Aqui eu fiz algo não muito limpo e reusavel, eu simplismente criei 4 tags li e coloque um evento de click e a cada li clicado mudaria a classe do carrocel, assim no CSS eu usei transition em cada classe li para mover o corrossel

A validação do input de Email
Aqui não houve nenhuma complicação, eu simplismente usei patrão irregular no valor string do input. Como a validação de emails é muito complexa eu simplismente peguei um comparador do google.


Pontos relevantes
Depois desse projeto eu percebir que se eu quiser perder menos tempo tornando o site responsivo é melhor criar primeiro a parte mobile e depois a de desktop.
O uso de outras unidades é muito importante para manter a responsividade, ao inves de apenas usar as unidade viewpoint e px talvez seja melhor usar unidades como rem, em e porcentagem



Como eu vou fazer o carrossel


Eu imagino o carrossel como um circulo onde quando eu aperto para ir para frente a caixa mais distante do botão some e a que fica mais proxima do botão que não estava sento mostrada agora aparece no lugar da que estava mais proxima do botão
Porque não fazer com que o usuário só possar ir uma caixa para frente e uma para tras 
