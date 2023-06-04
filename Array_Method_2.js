let num = [98,87,76,65,54,43]
console.log(num.length)

console.log("Delete Operation ")
delete num[0]
console.log(num) // [ <1 empty item>, 87, 76, 65, 54, 43 ]
console.log("length of array after delete operation " , num.length)
//length value not change 


console.log("concat Operation ")
let num1 = [ 1,2,3,4,5]

let new_array = num.concat(num1)
console.log(new_array)

console.log("concat Operation for more that 2 array ")
//lets create 3rd array 
num2 = [ 12,23,34, 45,56]

let new_array1 = num.concat(num1, num2)
console.log(new_array1)
 
console.log("Sort method ")
//modifies  original array

let sam = [ 67, 456, 563, 2, 123, 9]
sam.sort()
console.log("only sorting method ")
console.log(sam)
//sorted in alphabetical order 
//that means only check for first digit of number...123 (becoz start with 1), 2, 456...
//we use comapre function is sort method
//lets see compare method 

console.log("sorting using compare function")
let compare = (a,b)=>
{
    return a - b//for ascending order 
}
console.log("sort method with comapre function")
sam.sort(compare)
console.log(sam)

let compare1 = (a,b)=>
{
    return b-a
}
console.log("sort method with comapre function in descending order ")
sam.sort(compare1)
console.log(sam)

console.log("Reverse method ")
let Ram = [ 10,20,30,40,50]
console.log("original array : " , Ram)

Ram.reverse()
console.log("after reverse method " , Ram)

console.log("Splice method")
//splice..used to add new items to an array 
//..we have to give 3 parameters in this
//1st..where to add 
//2nd..how many elemets you want to remove 
//3rd..which element you have to add 
let Sham = [ 23, 43, 56, 43, 12 ]
console.log("original array ")
Sham.splice(2,3,1021,1022,1023,1024)
console.log("Array after splice method " , Sham)
//2..start with index 2
//3..remove 3 elements fron  that given index
//add mention elements 


console.log("Slice method")
//it create new array not modified original one 
let Raj = [ 10,20,30,40,50]
let newRaj = Raj.slice(3,5)
console.log(Raj)
console.log(newRaj)




