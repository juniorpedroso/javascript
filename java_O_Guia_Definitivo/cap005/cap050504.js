/*

let a = ['fusca', 'gol', 'kombi', 'parati']
 for(var i = 0; i < a.length; i++)
     console.log(`veículo ${a[i]}`)

o = {"modelo": "fusca", "ano": "1974", "cor": "marrom"}
for(var p in o){
    console.log(o[p])
}

*/

let cars = [
{"modelo": "fusca", "ano": "1974", "cor": "marrom"},
{"modelo": "fusca", "ano": "1979", "cor": "branco"},
{"modelo": "gol", "ano": "1996", "cor": "prata"},
{"modelo": "corsa", "ano": "2005", "cor": "bege"},
{"modelo": "corsa", "ano": "2005", "cor": "bege"},
{"modelo": "ecosport", "ano": "2008", "cor": "vermelho"},
{"modelo": "corolla", "ano": "2014", "cor": "branco"},
{"modelo": "renegade", "ano": "2019", "cor": "prata"},
]

for(var i = 0; i < cars.length; i++){
    listaObj(cars[i])
    console.log(`------------`)
}

function listaObj(o){
    for(var p in o){
        console.log(`${p} = ${o[p]}`)
    }
}