"strict use"

//Pré incremento
let n = 10 
console.log(++n)

/* O pré incremento, como o próprio nome sugere, 
declara o sinal de incremento(++ ou --), antes da váriavel,
para que assim ela possa carregar antes da mesma e já
apresentar o resultado alterado. */


//Pós incremento
let n1 = 10 
console.log(n1++)
/* Se utilizarmos o pós incremento da mesma maneira do pré incremento,
será possível perceber que ele não irá incrementar a váriavel,
afinal, ele primeiro recebe a váriavel e só depois adiciona o valor.*/


let n2 = 10 
console.log(n2++)

console.log(n2)
/* Dessa maneira, ele consegue encrementar e só depois trazer a váriavel,
trazendo assim o resultado com valor 11. */