"strict use"

/* function aluno(nome, nota){
 this.nome = nome
 this.nota = nota

 console.log(nome)
 console.log(nota)
}

aluno("Bruno", 10) */ 


function aluno(nome, nota){
    this.nome = nome
    this.nota = nota
   
    this.dados_arrow = function(){
        setTimeout(() => {
          console.log(this.nome)
          console.log(this.nota)
        }, 2000)
    }
 }
   
 const al1 = new aluno("Bruno", 10)
  al1.dados_arrow()