let num = [23,34,45,56,67,78,89,]
console.log("original array ")
console.log(num)
console.log(typeof num)

//converting array to string 
let x = num.toString() // x is now string 
console.log(x )
console.log(typeof x)

console.log("join method ")
let z = num.join(" and ")
let z1 = num.join("_")
console.log(z )
console.log(z1 )
console.log(typeof z)

//num.pop()  
//console.log(num)

console.log("pop operation")
//remove last element
let r = num.pop()
console.log("After pop array become " , num)

console.log("push operation")
let p = num.push(2)//add element to last 
console.log("After push opn array become " , num)
//return new array length 

console.log("Shift operation")
//removes an element from start of the array 
let p1 = num.shift()
console.log("After shift operation " )
console.log(num)


console.log("Unshift operation ")
//add element at start of array 
let p2= num.unshift(3) 
console.log("After unshift operation" )
console.log(num)



