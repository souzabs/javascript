"strict use"

/*O While é um loop indefinido. Utilizado quando
não se tem certeza da quantidade de vezes que é 
necessário executar os comandos desse loop */

let n = 0
while(n < 10){
    n+=1
    console.log(n)
    
}


//Calculadora de Fatorial

n = 5
fat = 1 

while(n >= 1){
    fat*=n
    n--
}
console.log(fat)