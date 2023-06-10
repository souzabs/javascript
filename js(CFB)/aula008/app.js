"strict use"

//Operadores em Bitwise


/* Operador &:
10 em binary code -> 00001010 
11 em binary code -> 00001011
Retorno  --->        00001010
Quando utilizado(&), ele vai retornar o que for equivalente
entre os números binários. No exemplo acima retorna 10.*/

let n1 = 10 
let n2 = 11

let res = n1 & n2
console.log(res)



/* Operador |:
10 em binary code -> 00001010 
11 em binary code -> 00001011
Retorno  --->        00001011 
Isso ocorre porque diferentemente do primeiro caso, onde era
necessário a equivalencia entre ambos os códigos binários, 
nesse caso especificamente, basta ter o número 1 em uma
das colunas que ele já vai retornar o valor, como mostrado acima.*/

let n3 = 10 
let n4 = 11

let res1 = n3 | n4
console.log(res1)



/* Operador ^:
10 em binary code -> 00001010 
11 em binary code -> 00001011
Retorno  --->        00000001 
Nesse caso específico, ocorre da equivalência ser anulada sempre a 0
independente se vai ser 0 a 0 ou 1 a 1. Ele só vai reportar 1 na 
comparação binária, quando só tiver no seguinte caso: 0 a 1 ou 1 a 1,
como mostrado no exemplo acima. */

let n5 = 10 
let n6 = 11

let res2 = n5 ^ n6
console.log(res2)



/* Operador <<:
10 em binary code -> 00001010 
Retorno  --->        00010100
Esse tipo de operador se chama de deslocamento, nesse caso em específico, 
seria um deslocamento para esquerda. Esse deslocamento para esquerda, 
desloca um bit para esquerda. Ele é muito utilizado para dobrar valores.  */

let n7 = 10 
let res3 = n7 << 1

console.log(res3)//20



/* Operador >>:
10 em binary code -> 00001010 
Retorno  --->        00000101
Esse tipo de operador se chama de deslocamento, nesse caso em específico, 
seria um deslocamento para direita. Esse deslocamento para direita
desloca um bit para o mesmo sentido. Ele é muito utilizado para quebrar valores ao meio,
reduzir os valores pela metade.  */


let n8 = 10 
let res4 = n8 << 1

console.log(res3)//5