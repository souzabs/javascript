let amigo = {nome: 'José',
sexo: 'M',
peso: '85.8',
engordar(p=0){
    console.log(`Engordou`)
    this.peso += p
}

}
 amigo.engordar(1)
 console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)