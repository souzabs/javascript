"strict use"

//Operadores em BitWise


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

let res1 = n1 | n2
console.log(res)



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

let res2 = n1 ^ n2
console.log(res)