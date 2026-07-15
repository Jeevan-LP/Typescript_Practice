/* 
Arrow Function (Lamda function)

*Lamda refers to anonymous functions in programming
*Thse functions also called as arrow functions

These are three part of lamda function
1. Parameters - a function may optionally have parameters
2. The fat arrow notation ()=>
3. Statment - represents the functions instruction set

syntax of function
let variable name = (parameter):return type =>{
    //statement
}
variable name(parameter); 
*/

//Arrow Function simple
let Hesaru=()=>{
    console.log("Jeevan Gowda");
}
Hesaru();

//Arrow Function no parameters and no return type
let WellcomeMsg = ():void=>{
    console.log("Hi well come to type script....");
}
WellcomeMsg();

//Arrow Function with parameters and with return type
let division = (a:number, b:number):number=>{
    return a/b;
}
console.log("division a and b: ", division(27,9));

//Arrow Function with optional parameters
let Edata = (eid:number, ename:string, egeneder:boolean, eemail?:string):void=>{
    console.log("Stundednt ID: ", eid);
    console.log("Stundednt Name: ", ename);
    console.log("Stundednt is Boy?: ", egeneder);
    if(eemail!=undefined){
    console.log("Stundednt Email: ", eemail);
    }
}
//Edata(27, "Jeevan L P", true, "Jeevan@gmail.com");
Edata(27, "Jeevan L P", true);