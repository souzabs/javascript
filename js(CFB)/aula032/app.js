"strict use"

/* const cursosTodos = [...document.getElementsByClassName("curso")] 

 --> Nesse caso, utiliza-se do spread (...) para transformar o HTMLCollections em um array

e assim poder trabalhar com suas características. 

console.log(cursosTodos) */


const cursosTodos = [...document.getElementsByClassName("curso")] 
const cursosC1 = [...document.getElementsByClassName("c1")] 
const cursosC2 = [...document.getElementsByClassName("c2")] 

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)

/* cursosTodos.map((el) => {
  el.classList.add("destaque")
}) */

 cursosC1.map((el) => {
    el.classList.add("destaque")
  }) 

  /* cursosC2.map((el) => {
    el.classList.add("destaque")
  }) */ 