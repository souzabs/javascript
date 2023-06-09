"strict use"

//Função Anônima 

/* Uma função anônima sempre deve ser declarada 
dentro de uma variável para que assim ela possa 
ser solicitada.*/
const f = function(...valores){
 let res = 0
 for(v of valores){
    res += v
 }
 return res
}

console.log(f(10, 5))



const f1 = new Function("v1", "v2", "return v1 + v2") //Função Construtor Anônima
   
   console.log(f(10, 5))