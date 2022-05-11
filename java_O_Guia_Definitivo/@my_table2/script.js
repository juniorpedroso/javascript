// Mostra a tabela
function buildTable(data) {
    var table = document.getElementById('myTable')
    
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
        <td>${data[i].ndia}</td>
        <td>${data[i].sdia}</td>
        <td>${data[i].delpol_d}</td>
        <td>${data[i].delapo_d}</td>
        <td>${data[i].esctit_d}</td>
        <td>${data[i].escsob_d}</td>
        <td>${data[i].opetit_d}</td>
        <td>${data[i].opesob_d}</td>
        
        <td>${data[i].delpol_n}</td>
        <td>${data[i].delapo_n}</td>
        <td>${data[i].esctit_n}</td>
        <td>${data[i].escsob_n}</td>
        <td>${data[i].ope1_n}</td>
        <td>${data[i].ope2_n}</td>
        <td>${data[i].opesob_n}</td>
        </tr>`
        table.innerHTML += row
    }
}

// Obtém os dados
function getDados() {
    let xhttp = new XMLHttpRequest()
    let url = "data.json"
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText)
            buildTable(myArr)
        }
    }
    xhttp.open("GET", url, true)
    xhttp.send()
}

getDados()
