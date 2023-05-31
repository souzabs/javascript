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