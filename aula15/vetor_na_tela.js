var valores = [8, 1, 7, 4, 2, 9]

 /*console.log(valores[0])
console.log(valores[0])
console.log(valores[0])            //Método funcional, porém pouco usual e inteligente.
console.log(valores[0])
console.log(valores[0]) 


for(var pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)      //Método padrão
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)      //Método proeficiente
}
