"strict use"

/* Operador ternário 
Estrutura básica ---> (Teste lógico ?  se verdadeiro : se falso) */


//Metodo padrão com if/else

let num1 = 11
let res1 = num1%2
if(res1 == 0){
    console.log('Par')
} else{
    console.log('Impar')
} 


//Metodo com operador ternário

let num = 10
let res = (!(num%2) ? "Par" : "Impar")
console.log(res)//Par


/* Ele é frequentemente utilizado como uma forma de substituição do 
if/else. Pois o operador ternário realiza a operação na primeira 
parte, se o resultado da operação for verdadeiro ele retorna o 
valor inserido na segunda parte(que no caso é "Par"), caso ele
seja falso, ele irá retornar a terceira parte da operação("Impar"). */ 