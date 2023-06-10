"strict use"

/* While e Do While

Existe uma diferença clara no uso entre eles. Primeiro que no while, 
o primeiro a se fazer é o teste lógico e depois os comandos são
executados. No Do While, primeiro se executa os comandos e depois 
o teste lógico é executado. */

 let n = 10
 /* while(n < 10){
    console.log('É menor que 10!')
    n++                                   ----> Método While
}
console.log('Fim do programa!') */

do{
    console.log('É menor que 10!')
    n++                                 // ----> Método Do While
}while(n < 10){
    console.log('Fim do programa!')
}

/* O loop foi iterado ao menos uma vez no caso do while*/