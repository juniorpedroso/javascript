let num = [5, 8 , 2, 9, 3]
num.push(1)
num.sort() 
console.log(`Nosso vetor é o ${num} e seu comprimento é ${num.length}`)

let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(pos)
}