"strict use"

//Teste um número
let num = 1

if(num > 10){
    console.log("Número maior que 10")
    if(num > 50){ //---> Aninhamento
        console.log('Numeral maior que 50')
    } 
}
else if(num > 5){
console.log('Número está entre 6 e 10')
}
else{
    console.log("Numeral menor ou igual a 5")
}

console.log('Fim do programa!')
