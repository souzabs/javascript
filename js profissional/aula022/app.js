"strict use"

//Funções parametrizadas

function soma(p1){
 console.log(p1)
}

soma("Bruno") // ---> Chamada e declaração do parâmetro



/* Soma dos parâmetros dem ser
declarados na mesma linha, como 
está sendo mostrado abaixo.*/
function soma(n1, n2){
    console.log(n1 * n2)
   }
   
soma(10, 5) // ---> Chamada e declaração do parâmetro
   
   

/*Nesse caso específico é possível perceber que 
lá no final do código, na parte da declaração, apenas 
o primeiro valor(n1) foi declarado. Normalmente o retorno 
seria de NaN(Not a Number), pois apenas o primeiro valor 
foi declaro e o segundo ficou como indefinido. Porém,
é possível assumir um valor padrão para n1 e n2 dentro da função,
que no caso específico é zero para ambos. */
function soma(n1=0, n2=0){
    console.log(n1 * n2)
   }
   
soma(10) // ---> Chamada e declaração do parâmetro
   