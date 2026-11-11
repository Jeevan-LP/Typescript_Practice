/* 
Named function: A function that which is declared with a name
syntax of function
function functionName(parameter):return type{
    //statement
}
functionName(parameter); 
*/

//Named function no parameters and no return type
function Greetings():void{
    console.log("Hi Jeevan....");
}
Greetings();

//Named function with parameters and with return type
function Add(a:number, b:number):number{
    return a+b;
}
console.log("Adding a and b: ", Add(27,9));

//Named function with same data type rest parameters
function sum(...num:number[]):number{

    let sum=0;
    for(let i=0;i<num.length;i++){
        sum=sum+num[i]
    }
    return sum;
}
let Sumnumber=sum(2,7,9);
console.log("Sum of all number: ", Sumnumber);

//Named function with diffrent data type rest
//function emp(...empdata:(number[] | string[])):void{ //only same data type
function emp(...empdata:(number | string | boolean)[]):void{//different same data type
    let noOf=empdata.length;
    console.log("Number of Named function with diffrent data type rest: ", noOf)
}
emp("Jeevan", "Appu", "Gowda", 27, 10, true);

//Named function with optional parameters
function data(sid:number, sname:string, sgeneder:boolean, semail?:string):void{
    console.log("Stundednt ID: ", sid);
    console.log("Stundednt Name: ", sname);
    console.log("Stundednt is Boy?: ", sgeneder);
    if(semail!=undefined){
    console.log("Stundednt Email: ", semail);
    }
}
//data(27, "Jeevan L P", true, "Jeevan@gmail.com");
data(27, "Jeevan L P", true);

//Named function with defult parameters
function market(rate:number, quantity:number=3.5):number{
    return rate*quantity;
}
let value=market(100);
//let value=market(100,4.5);
console.log("Total amount: ",value);