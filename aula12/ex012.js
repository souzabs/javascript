var agora = new Date()      // Utilizar as duas primeiras linhas para pegar a hora atual da máquina
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas!`)
if(hora < 12){
    console.log('Bom dia!')
}
else if(hora <= 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}