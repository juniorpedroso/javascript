function tabuada() {
    var tnum = document.getElementById('txt_num')
    var stab = document.getElementById('sel_tab')
    if (tnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let num = Number(tnum.value)
        mult = 1
        stab.innerHTML = ''
        while (mult <= 10) {
            let item = document.createElement('option')
            item.text = `${num} X ${mult} = ${mult * num}`
            item.value = `stab${mult}`
            stab.appendChild(item)
            mult++
        }
    }

}