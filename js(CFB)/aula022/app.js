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
que no caso específico é um para ambos. */
function soma(n1 = 1, n2 = 1){
    console.log(n1 * n2)
   }
   
soma(10) // ---> Chamada e declaração do parâmetro
   


/* Também é possível ter o mesmo resultado acima
definindo uma váriavel, como no exemplo abaixo e em seguida,
declarar a váriavel dentro de n1 e n2(outras váriaveis) */
const VALOR_PADRAO = 1
function soma(n1 = VALOR_PADRAO, n2 = VALOR_PADRAO){
    console.log(n1 * n2)
   }
   
soma(10) // ---> Chamada e declaração do parâmetro
   