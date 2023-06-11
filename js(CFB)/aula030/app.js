"strict use"

/* const dc1 = document.getElementById("c1") // ---> Chamada do elemento c1 do HTML
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)

dc1.innerHTML = "CFB Cursos" // ---> Mudança de elemento 
dc2.innerHTML = "CEV"
dc3.innerHTML = "Elementos" */


const dc1 = document.getElementById("c1") 
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

/* for(d of arrayElementos){
    d.innerHTML = ("CFB Cursos") // ---> Utilização de for para reescrever todos os elementos para CFB Cursos.
} */ 

arrayElementos.map((e) => {
  e.innerHTML = "CFB Cursos" // ---> Utilização do map para mesma função(reescrever elementos).
  console.log(e)
})

