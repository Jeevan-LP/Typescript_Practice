/* 
Call back function:
A function passed as an argument to another function and executed later.
*/

//Example 1

//call back function
function food(foodname:string){
    console.log(foodname);
}

//Passing call back function into the function
function wildAnimal(animalname:string, callback1:(foodname:string)=>void){
    console.log(animalname);
    callback1("meat");
    
}

//calling fuction
wildAnimal("Tiger", food);

//Example 2
//call back function
function displayNum(result:number){
    //
}

//Passing call back function into the function
function sumOfNum(q:number, r:number, callback2:(result:number)=>void){
   let result=q+r;
   console.log(result);
}

//calling fuction
sumOfNum(27, 9, displayNum);