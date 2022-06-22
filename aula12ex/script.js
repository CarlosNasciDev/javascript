function carregar(){
    var saudacao = document.getElementById('saudação')
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas. `)

    if(hora < 12){
       saudacao.innerHTML = 'Bom Dia!'
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18) {
        saudacao.innerHTML = 'Boa Tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'

    } else {
        saudacao.innerHTML = 'Boa Noite!'
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }

}