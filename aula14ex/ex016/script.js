function contar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var tpass = document.getElementById('txtpass')
    var res = document.getElementsByTagName('div')[1]
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tpass.value)
    var msg = ''
    for(var c = n1; c <= n2; c + n3) {
        msg = `${msg} -> ${n1}`
        res.innerHTML = msg
    }
}