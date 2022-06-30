function contar () {
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if(inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('[ERRO] Faltam dados para a execução do programa.')
    } else {
        res.innerHTML = ' Contando: '
        let ini = Number (inicio.value)
        let oFim = Number (fim.value)
        let pas = Number (passo.value)

        if (ini < oFim){
            for (let contador = ini; contador <= oFim; contador += pas) {
                res.innerHTML += ` ${contador} \u{1F449}  `
               
            }
        } else {
            for(let contador = ini; contador >= oFim; contador -= pas){
                res.innerHTML += ` ${contador} \u{1F449}  `
            }
        } 
        
        res.innerHTML += `\u{1F3C1}`
    }
}