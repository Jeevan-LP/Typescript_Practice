//if statement
let bus:string = "KSRTC";
if(bus == "KSRTC"){
    console.log("Bus is KSRTC");
}

//if else statement
let age:number = 15;
if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote");
}

//if else if statement
let j:number = 10, k:number = 50, l:number = 30;
if(j>k && j>l){
    console.log("j is greater than k");
}
else if(k>j && k>l){
    console.log("k is greater than j");
}
else{
    console.log("l is greater than j and k");
}

//nested if statement
let marks:number = 85;  
if(marks >= 90){
    if(true){
    console.log("Grade: A");
    }
}
else{
    console.log("Grade: B");
}

//switch statement
let day:string = "Thursday";
switch(day){
    case "Monday": console.log("1"); break;
    case "Tuesday": console.log("2"); break;
    case "Wednesday": console.log("3"); break;
    case "Thursday": console.log("4"); break;
    case "Friday": console.log("5"); break;
    case "Saturday": console.log("6"); break;
    case "Sunday": console.log("7"); break;
    default: console.log("Invalid day number");
}