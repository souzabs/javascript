function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/criança-M.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/adolescente-M.png')
            }
           else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'imagens/adulto-M.png')
           }
           else{
            //Idoso
            img.setAttribute('src', 'imagens/idoso-M.png')
           }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/criança-F.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/adolescente-F.png')
            }
           else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'imagens/adulto-F.png')
           }
           else{
            //Idoso
            img.setAttribute('src', 'imagens/idoso-F.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 

}