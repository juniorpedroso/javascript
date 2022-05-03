let a1 = [1,2,3]
let a2 = []
let a3 = a2
for(c = 0; c < a1.length; c++) {
    a2.push(a1[c])
}
console.log(a1)
console.log(a2)
a2.push(4)
console.log(`Array a1 ${a1}`)
console.log(`Array a2 ${a2}`)
console.log(`Array a3 ${a3}`)