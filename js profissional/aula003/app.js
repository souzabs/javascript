"strict use"

//Exemplo var
/* As variaveis escritas com var tem escopo global, ou seja, independente de onde ela seja declarada, é possível
solicita-la em qualquer bloco ou escopo. */

function test(){
    if(true){
        let nome = "Bruno"
        console.log('Dentro do IF do teste' + nome)    //C
    } 
    console.log('Dentro da function test' + nome)     //C
}
console.log('Fora da function' + nome)                //C


//Exemplo let
/* No caso abaixo, o let restringe a utilização da variável, apenas podendo "puxar" a que se encontra dentro
do escopo/bloco IF. Qualquer uma outra tentativa de referenciar a variável não irá funcionar*/
function test(){
    if(true){
        let nome = "Bruno"
        console.log('Dentro do IF do teste' + nome)    //C
    } 
    console.log('Dentro da function test' + nome)     //E
}
console.log('Fora da function' + nome)                //E


//Exemplo const
/* A variável que não varia. As constantes são um tipo de váriavel que, ao receberem um valor, não podem mais
ser mudadas ao longo do programa */

const curso = "Javascript" 
curso = "PHP" //Isso vai gerar um erro devido a propriedade não-váriavel das const.