let myArray = [
    {'ndia':     '1', 
     'sdia':     'dom',
     'delpol_d': 'Camila',
     'delapo_d': 'Jordana',
     'esctit_d': 'Ricardo',   
     'escsob_d': 'Adriana',
     'opetit_d': 'Raphael',
     'opesob_d': 'Alexsandre',

     'delpol_n': 'Omar',
     'delapo_n': '',
     'esctit_n': 'Mauricio',
     'escsob_n': 'Adriana',
     'ope1_n':   'Paranhos',
     'ope2_n':   'Luciano',
     'opesob_n': 'Raphael'
    },

    {'ndia':     '2', 
     'sdia':     'seg',
     'delpol_d': 'Fabiano',
     'delapo_d': '',
     'esctit_d': 'Flavio',   
     'escsob_d': 'Danilo',
     'opetit_d': 'Kudo',
     'opesob_d': 'Franzolin',
     
     'delpol_n': 'Camila',
     'delapo_n': 'Jordana',
     'esctit_n': 'Ricardo',
     'escsob_n': 'Danilo',
     'ope1_n':   'Raphael',
     'ope2_n':   '',
     'opesob_n': 'Kudo'
    },
    
    {'ndia':     '3', 
     'sdia':     'ter',
     'delpol_d': 'Levon',
     'delapo_d': '',
     'esctit_d': 'Isabel',   
     'escsob_d': 'Flávio',
     'opetit_d': 'Pedra',
     'opesob_d': 'Franzolin',

     'delpol_n': 'Fabiano',
     'delapo_n': '',
     'esctit_n': 'Luanderson',
     'escsob_n': 'Flávio',
     'ope1_n':   'Kudo',
     'ope2_n':   '',
     'opesob_n': 'Pedra'
    },

    {'ndia':     '4', 
     'sdia':     'qua',
     'delpol_d': 'Marco Aurélio',
     'delapo_d': '',
     'esctit_d': 'Rodrigo',   
     'escsob_d': 'Nathalia',
     'opetit_d': 'Junior',
     'opesob_d': 'Daniel',

     'delpol_n': 'Jordana',
     'delapo_n': 'Georges',
     'esctit_n': 'Isabel',
     'escsob_n': 'Nathalia',
     'ope1_n':   'Pedra',
     'ope2_n':   '',
     'opesob_n': 'Junior'
    },

    {'ndia':     '5', 
     'sdia':     'qui',
     'delpol_d': 'Osmar',
     'delapo_d': '',
     'esctit_d': 'Mauricio',   
     'escsob_d': 'Luanderson',
     'opetit_d': 'Paranhos',
     'opesob_d': 'Claudinei',

     'delpol_n': 'Goerges',
     'delapo_n': 'Jordana',
     'esctit_n': 'Rodrigo',
     'escsob_n': 'Luanderson',
     'ope1_n':   'Junior',
     'ope2_n':   '',
     'opesob_n': 'Paranhos'
    },

]

buildTable(myArray)

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