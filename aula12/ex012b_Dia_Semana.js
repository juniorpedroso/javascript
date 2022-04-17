var agora = new Date()
var hora = agora.getHours()


// Calcula dia da semana
function diaSemana() {
    var dia = new Date()
    var dnum = dia.getDay()

    if (dnum == 0) {
        var diasem = 'Domingo'
    } else if (dnum == 1) {
        var diasem = 'Segunda'
    } else if (dnum == 2) {
        var diasem = 'Terça'
    } else if (dnum == 3) {
        var diasem = 'Quarta'
    } else if (dnum == 4) {
        var diasem = 'Quinta'
    } else if (dnum == 5) {
        var diasem = 'Sexta'
    } else if (dnum == 6) {
        var diasem = 'Sábado'
    }

    return diasem
}


console.log(`Agora são ${hora} horas de ${diaSemana()}.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}