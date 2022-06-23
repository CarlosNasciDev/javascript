function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if (fsex[0].checked) {
            
            if ( idade >= 0 && idade <= 12){
                genero = 'um <strong>menino</strong>'
                img.setAttribute('src', 'menino.png')
                document.body.style.background = 'rgb(173, 216, 230)'
            } else if (idade < 21){
               genero = 'um <strong>adolescente</strong>'
               img.setAttribute('src', 'rapaz.png')
               document.body.style.background = 'blue'
            } else if (idade < 60){
                genero = 'um <strong>homem adulto</strong>'
                img.setAttribute('src', 'homem.png')
                document.body.style.background = 'grey'
            } else {
                genero = 'um <strong>homem idoso</strong>'
                img.setAttribute('src', 'idoso.png')
                document.body.style.background = 'brown'
            } 
            
            }else if (fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >= 0 && idade <= 12){
                genero = 'uma <strong>menina</strong>'
                img.setAttribute('src', 'menina.png')
                document.body.style.background = 'rgb(255, 192, 203)'
            } else if (idade < 21){
                genero = 'uma <strong>adolescente</strong>'
                img.setAttribute('src', 'moça.png')
                document.body.style.background = 'pink'
            } else if (idade < 60){
                genero = 'uma <strong>mulher adulta</strong>'
                img.setAttribute('src', 'mulher.png')
                document.body.style.background = 'yellow'
            } else {
                genero = 'uma <strong>mulher idosa</strong>'
                img.setAttribute('src', 'idosa.png')
                document.body.style.background = 'purple'
            }
        }
    
        res.innerHTML = `Você é ${genero} e já fez ou fará ${idade} anos de idade nesse ano em que estamos.`
        res.appendChild(img)
    }
}
