"strict use"

let colocacao = 3

switch(colocacao){
    case 1:
        console.log('Primeiro lugar!')
    break

     case 2:
        console.log('Segundo lugar!')
    break

     case 3:
        console.log('Terceiro lugar!')
    break

    default:
        console.log("Não subiu ao pódio")
}

/* Switch Case
O funcionamento da estrutura switch é bastante simples. Inicialmente,
o valor da variável passada no switch é comparado com os valores fornecidos
em cada case. Se um desses valores for igual ao valor da variável, o bloco 
de código do case em questão será executado. Ao fim de casa switch case, é
necessário utilizar o break para pular para a próxima case. Ao fim dos
switchs cases, utilizar o deafult para um valor padrão.*/