/*1. forEach() - execute a function once for each array elements
a. It takes function as a parameter
b. syntax: array.forEach(function(currentValue, index, array){})
c. currentValue: The current element being processed in the array
d. index(optional): The index of the current element being processed in the array
e. array(optional): The array current element belongs to.
*/

//Ex: get index of all fruits along with value
let fruits:string[]=["Mango", "Pappaya", "Banana", "Graps", "Amla"];
/*for(let i in fruits){
    console.log(i, fruits[i]);
}*/
/*function
fruits.forEach(function(element, index){
    console.log(`${index} ${element}`);
})*/
//arrow function
fruits.forEach((ele,ind)=>{
    console.log(`${ind} ${ele}`);
})

/*2. map() - Creates a new array with the result of calling the function on every element of an array
a. It takes functions as a parameter
b. Return the same number of elements that like a original array
c. syntax: array.map(function(currentValue, index, array){})
*/

//Ex: Get square of all the number in an array [1, 2, 3] then result is [1, 4, 9]
let mapNum:number[]=[1, 2, 3, 4, 5];
console.log("original map array: ", mapNum);// [ 1, 2, 3, 4, 5 ]
let map=mapNum.map((mapEle, mapInd):number=>{
    return mapEle*mapEle;
})
console.log("result map array: ",map);// [ 1, 4, 9, 16, 25 ]

/*3. filter() - Creates a new array with the all elements that pass/satisfy the function
a. It takes functions as a parameter
b. Return either same or fewer number of the elements compared to a original array
c. syntax: array.filter(function(currentValue, index, array){})
*/

//Ex: Get only even numbers from array
let evenNum:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("original filter array: ", evenNum);// [1, 2, 3, 4, 5, 6, 7, 8, 9]
let filter=evenNum.filter((evenEle)=>{
    return evenEle%2==0;
})
console.log("result filter array: ",filter);// [2, 4, 6, 8]

/*4. reduce() - Applies a function on every element of an array and returns a single value
a. Syntax: array.reduce(function(accumulator, currentValue, index, array){})
b. accumulator: the accumulator value is from previous iteration
c. currentValue: the current element being processed
*/

//Ex: get the total of all the elements in an array
let totalReduce:number[]=[1, 2, 3, 4, 5];
/*let sum=0;
for(let i=0; i<totalReduce.length; i++){
    sum=sum+totalReduce[i];
}
console.log("Sum of totalReduce: ", sum);*/
let reduce=totalReduce.reduce((sum, reduceEle)=>{
    return sum+reduceEle;
})
console.log("Sum of totalReduce: ", reduce); //15

/*5. some() - checks if any elements satisfies a conditions 
a. Syntax: array.some(function(currentValue, index, array){})
b. Return true if at least one element passes the condition, else false
*/
let someNum:number[]=[-27 ,1, 2, 3, 4, 5];
let some=someNum.some((someEle)=>{
    return someEle<0;
})
console.log("Value found? ", some); //true

/*6. every() - checks if all elements satisfies a conditions 
a. Syntax: array.reduce(function(currentValue, index, array){})
b. Return true if all element passes the condition, else false
*/
let everyNum:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9];
let every=everyNum.every((evenEle)=>{
    return evenEle%2==0;
})
console.log("Is every number is even number? ", every); //false