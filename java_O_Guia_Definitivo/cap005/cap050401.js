var i = 1
var j = 1
var k = 2

console.log(`var i ${i}`)
console.log(`var j ${j}`)
console.log(`var k ${k}`)

if (i == j) {
    console.log("i equals j")
    if (j == k) {
        console.log("i equals k")
    } else {
        console.log("j doesn't equals k")
    }
} else {
    console.log("i equals k")
}
