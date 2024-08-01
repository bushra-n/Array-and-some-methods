let items:string[] = ["paper","pencil","eraser"]
items[0] = "sharpner"
console.log(items)
// push and pop
items.push("paper")
items.push("scale")
console.log(items)
items.pop()
console.log(items)
// unshift and shift
items.unshift("highlighter")
items.unshift("markers")
console.log(items)
items.shift()
console.log(items)
// slice : first argument will include but second arg. will b excluded
let slicedarray = items.slice(1,4)
console.log(slicedarray)
console.log(items)                         // original array remain unchaged ,editing occur in copied array
// splice
items.splice(1,3)
// start deleting at index no.1 and delete total three elements
console.log(items)
items.splice(0,2 ,"kiwi","apricot")
console.log(items)
// 
items.splice(2,0, "watermelon","plum","apple")
console.log(items)


