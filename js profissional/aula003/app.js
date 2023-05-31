"strict use"

//Exemplo var
/* */


//Exemplo let
/* No caso abaixo, o let restringe a utilização da variável, apenas podendo "puxar" a que se encontra dentro
do escopo/bloco IF. Qualquer uma outra tentativa de referenciar a variável não irá funcionar*/
function test(){
    if(true){
        let nome = "Bruno"
        console.log('Dentro do IF do teste' + nome)
    } 
    console.log('Dentro da function test' + nome)
}
console.log('Fora da function' + nome)


