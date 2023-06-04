let score_maths = [34, 54, 98, 89, 76, 67 , false, "not present"]
console.log(score_maths)
console.log(score_maths[0])
console.log(score_maths[1])
console.log(score_maths[2])
console.log("The length of score_marks is : " , score_maths.length)
console.log(score_maths[9]) //will be undefined because length is 8 
score_maths[9] = 56 //adding new element to array
console.log(score_maths[9])
score_maths[0]=35
console.log(score_maths.length)
console.log(score_maths)
console.log(typeof score_maths)//type of array in JS is object 
