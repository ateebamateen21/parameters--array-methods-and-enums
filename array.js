"use strict";
const myArray1 = [3, 4, 8, 6, 7, 8, 9];
const myArray2 = [21, 22, 23, 24, 25];
//console.log(typeof(myArray1))
//1- indexOf
// console.log(myArray1.indexOf(6))
// let index = myArray1.indexOf(6);
// console.log(index)
//2- lastIndexOf()
// console.log(myArray1.lastIndexOf(8))
//3- array1.concat(array2)
// let myArray3 = myArray1.concat(myArray2)
// console.log(myArray3)
// console.log(myArray1.concat([123,105]))
//copy of array
// let myArray = Array.from(myArray2)
// console.log(myArray)
// let myArray = [...myArray1]
// console.log(myArray)
//4- Join with operator
// console.log(myArray1.join('-'))
// console.log(typeof(myArray1.join()))
// console.log(myArray1.join())
// "3-4-8-6-7-8-9"
// 5- push() -- returns length of Array
// let outPut = myArray1.push(500,600,700) //Might look similar with concat but remember concat returns copy of array.
// let arr1 = [1,2,3,4]
// let pushedarr1 = arr1.push(5);
// console.log(arr1)
// console.log(pushedarr1)
// console.log(outPut)
// console.log(myArray1)
// console.log(myArray1.push(200))
//6- unshift() -- returns length of Array
// let outPut = myArray1.unshift(500,600,700) //Might looks similar with concat but remember concat returns copy of array.
// console.log(outPut)
// console.log(myArray1)
// console.log(myArray1.push(200))
//7- pop() -- returns value of removed item - Removes last element of Array
// console.log(myArray1.pop())
// console.log(myArray1)
//8- shift() -- returns value of removed item - Removes first element of Array
// console.log(myArray1.shift())
// console.log(myArray1)
//9- reverse() -- reverse the order in orginal Array
// console.log(myArray1.reverse())
// console.log(myArray1)
// let myArray = [...myArray2].reverse()
// console.log(myArray)
// console.log(myArray2)
//10- slice()  Syntax: array.slice(start_index, end_index)
// let myArray = myArray1.slice(-5,4)
// console.log(myArray) //returns sliced elements
// console.log(myArray1) //unaltered
//11- splice () Syntax: array.splice(index(inclusive), end index (exclusive), number of elements to be replaced, element1,..,elementN) 
//-- Returns removed elements and modifies original
// console.log(`myArray1 = [3, 4, 8, 6, 7, 8, 9]`)
// let outPut = myArray1.splice(0,2,300,400) // Replacing Items
// // let outPut = myArray1.splice(2,0,5)  //Added Item
// // let outPut = myArray1.splice(2,1)    //Removed Item
// console.log(outPut)
// console.log(myArray1)
//12- toString()  -- 
// let outPut = myArray1.toString()
// console.log(outPut)
// console.log(typeof outPut)
// console.log(myArray1)
//13- filter() -- filtering items
// let outPut = myArray1.filter ( item => item % 2 === 0  )
// console.log(outPut)
// console.log(myArray1)
//14- map() -- performs operation
let outPut = myArray1.map(item => item ** 2);
console.log(outPut);
console.log(myArray1);
// const words = ['apple', 'banana', 'cherry'];
// const wordInfo = words.map((element, index, array) => {
//     return {word: element, length: element.length, position: index, totalWords: array.length};});
// console.log(wordInfo);
//15- every() -- validation // Returns boolean
// let outPut = myArray1.every ( item => item % 2 == 0  )
// console.log(outPut)
// console.log(myArray1)
// const myStrings = ['Red', 'Yellow', 'Blue', 'Orange']
// let outPut = myStrings.every ( item => item.length  !== 8  )
// console.log(outPut)
//16- some() -- validation // Returns boolean
// let outPut = myArray1.some ( item => item % 2 == 0  )
// console.log(outPut)
// console.log(myArray1)
// const myStrings = ['Red', 'Yellow', 'Blue', 'Orange']
// let outPut = myStrings.some ( item => item.length  !== 8  )
// console.log(outPut)
//17- reduce() --
// let outPut = myArray1.reduce ( (total,item) => total + item,0)
// console.log(outPut)
// console.log(myArray1)
// const myStrings = ['Red', 'Yellow', 'Blue', 'Orange']
// let outPut = myStrings.reduce ( (acc,item) => {
//     console.log("acc",acc)
//     console.log("item",item)
//     return acc + "," + item
// })
// console.log("my output",outPut)
// console.log(myStrings)
//18- reduceRight() 
// let outPut = myArray1.reduceRight ( (acc,item) => acc + item,5)
// console.log(outPut)
// console.log(myArray1)
// const myStrings = ['Red', 'Yellow', 'Blue', 'Orange']
// let outPut = myStrings.reduceRight ( (acc,item) => {
//     console.log("acc",acc)
//     console.log("item",item)
//     return acc + "," + item
// })
// console.log("my output",outPut)
// console.log(myStrings)
//19- sort()
//20- fill() // fills the value with single value and mutates the original array
// const myStrings = ['Red', 'Yellow', 'Blue', 'Orange']
// let outPut = myStrings.fill("White",0,2)
// console.log(outPut)
// console.log(myStrings)
