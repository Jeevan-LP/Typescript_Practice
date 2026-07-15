/* 
Anonymous Function (Unnamed function/Nameless function)

An Anonymous function is a function that which does not have a name
instance, it is assigned to a variable, which acts as a its name

syntax of function
let variable name = function(parameter):return type{
    //statement
}
variable name(parameter); 
*/

//Anonymous function no parameters and no return type
let greeting = function():void{
    console.log("Hi Appu....");
}
greeting();

//Anonymous function with parameters and with return type
let multi = function(a:number, b:number):number{
    return a*b;
}
console.log("Multiplaying a and b: ", multi(27,9));