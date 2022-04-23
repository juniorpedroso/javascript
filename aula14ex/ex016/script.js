function contar() {
    var tini = document.getElementById('txt_ini')
    var tfim = document.getElementById('txt_fim')
    var tpass = document.getElementById('txt_pass')
    var res = document.getElementById('res')

    if (tini.value.length == 0 || tfim.value.length == 0 || tpass.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var n_ini = Number(tini.value)
        var n_fim = Number(tfim.value)
        var n_pass = Number(tpass.value)
        if (n_pass <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            n_pass = 1
        }

        /* Usando o while
        
        var cont = n_ini
        if (n_ini < n_fim) {
            while (cont <= n_fim) {
               res.innerHTML += `${cont} 👉 `
               cont += n_pass
            }
        } else {
            while (cont >= n_fim) {
                res.innerHTML += `${cont} 👉 `
                cont -= n_pass 
            }
        }
        */

        // Usando o for
        if (n_ini < n_fim) {
            for (var cont = n_ini; cont <= n_fim; cont += n_pass) {
                res.innerHTML += ` ${cont} 👉`
            }
        } else {
            for (var cont = n_ini; cont >= n_fim; cont -= n_pass) {
                res.innerHTML += ` ${cont} 👉`
            }
        }

        res.innerHTML += ` 🏁`
    }
}