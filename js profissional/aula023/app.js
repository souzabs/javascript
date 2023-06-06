"strict use"

//Parâmetros REST

/*Os parâmetros REST são funções criadas sem um
número específico de valores. No caso, acima de 
dois.*/ 
function soma(...valores){ // ---> Parâmetro REST
    res = 0
    for(let v of valores){
        res += v
    }
    return res
}
 console.log(soma(10, 5, 7)) // ---> Retornou a quantidade dos valores.