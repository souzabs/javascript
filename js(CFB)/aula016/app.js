"strict use"

let num=[10, 20, 30, 40, 50]

//Utilizado para coletar as POSIÇÕES DOS ELEMENTOS
for(n in num){
console.log(num[n])
}

//Utilizado para coletar os ELEMENTOS.
for(n of num){
    console.log(n)
}