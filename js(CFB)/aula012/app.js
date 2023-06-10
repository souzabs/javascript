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


const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 5, 4]

console.log(soma(...valores))



/* Verificar que ao utilizar o 'objs2.' que está 
com espalhamento, ele dá a possibilidade de operar 
com javascript diversas funções e métodos, afinal
ele é um array. Diferentemente  de quando utilizamos 
o 'objs1', pois ele é um HTML Collection. Dessa forma, 
é possível aumentar o leque de possibilidades ao trabalhar 
com esse tipo de estrutura. */
const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

objs2.

console.log(objs1)
console.log(objs2)





