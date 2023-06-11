"strict use"

/* Selecionar um elemento por Id mantém suas propriedades, diferentemente
de quando se faz isso com "getElementsByTagName, nesse caso vai se tratar 
de um HTMLCollection. A diferença prática disso é que um HTMLCollection é 
bem mais limitado no que se diz respeito a alterações." */

const dc1 = document.getElementById("c1") 
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

const colecaoHTML = [...document.getElementsByTagName("div")]

console.log(colecaoHTML)

colecaoHTML.map((e) => {
  console.log(e)
})

/* O caso acima se trata da conversão de um HTMLCollection em uma array com 
o uso do spread(...), o que dá a liberdade de alteração bem maior em comparação
a anterior. */