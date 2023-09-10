//enums


// let arr = ["apple", "banana", "peach", "grapes"]
// console.log(arr[0])


const enum fruits {
    apple="app",
    banana=30,
    peach="pea",
    grapes=10
    //this is not a good practice to decalare indexes as mix of strings and numbers
}

console.log(fruits.apple)
console.log(fruits.banana)
console.log(fruits.peach)
console.log(fruits.grapes)


const fruits2 = {
    apple:"app",
    banana:30,
    peach:"pea",
    grapes:10
    //this is not a good practice to decalare indexes as mix of strings and numbers
}

console.log(fruits2.apple)
console.log(fruits2.banana)
console.log(fruits2.peach)
console.log(fruits2.grapes)
