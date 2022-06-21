var idade = 31
console.log (`Você tem ${idade} anos e `)
if (idade < 16) {
    console.log ('ainda não vota.')
} else if (idade < 18 || idade > 65) {
     
        console.log ('seu voto é opicional.')
    } else {
        console.log ('é obrigado a votar.')
}
