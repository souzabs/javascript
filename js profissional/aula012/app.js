"strict use"

//Spread(Espalhamento) 
const jogador1 = {nome: 'Bruno', energia: 100, vidas: 3, magia: 150 }
const jogador2 = {nome: 'Bruce', energia: 100, vidas: 5, velocidade: 80 }
const jogador3 = {...jogador1, ...jogador2 }

console.log(jogador3)

/* O spread, ou espalhamento, é utilizado para espalhar os dados de variaveis.
Ao reproduzir o caso acima, é possível perceber que ele "espalhou" os dados
do objeto 1 e 2 no jogador 3. É importante destacar que ele sempre vai manter 
os as propriedades comuns a ambos e também as incomuns(específicas de um deles). */