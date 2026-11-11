//Array-----------------------------------------------------------------------------------------------------------------------
//fetching single indivual index
let StudentID:Array<number>=[10,20,30,40];//single data type
console.log(StudentID[2]);

//fetching length
let EmployeeName:Array<string>=["Jeevan", "mithun", "Dhanush", "chethan"];
console.log(EmployeeName[1]);
console.log("lenght of EmployeeName: ", EmployeeName.length);//it will give lenght not start from index (0 to n-1)

let car:Array<number | string | boolean>=[2709, "Thar", true];//multiple data type
console.log(car[2]);

let bike:Array<any>=[10,20,30,40,"Jeevan", "mithun", "Dhanush", "chethan", true, null, undefined];//all data type
console.log(bike[4]);

//fetching all data using diffrent loops
//1. standard for loop
for(let i=0;i<=EmployeeName.length-1;i++){
    console.log("fetching all data using standard loop: ", EmployeeName[i]);
}

//2. for in loop - based on index
for(let Empdetails in EmployeeName){
    //console.log("fetching all data using for in loop: ", Empdetails);
    console.log("fetching all data using for in loop: ", EmployeeName[Empdetails]);
}

//3. for of loop - based on value
for(let Empdata of EmployeeName){
    console.log("fetching all data using for of loop: ", Empdata);
}


//searching given number is present or not
function searchNumber(EnterNumber:number, findNumber:number[]):boolean{

    for(let j=0; j<=findNumber.length-1;j++){

        if(EnterNumber==findNumber[j]){
            return true;
        }
    }
    return false;
}
let found=searchNumber(70, [10, 20, 30, 40,50]);
console.log("Number found?: ",found);

//return string array
function Alphabets(EnterAlphabets:string[]):string[]{
    
    let store:string[]=[];

    for(let k=0;k<EnterAlphabets.length;k++){
            store[k]=EnterAlphabets[k].toUpperCase();
    }
    return store;
}
let alpha=Alphabets(["jeevan is a good boy"]);
console.log(alpha);


//tuple - fixed array -----------------------------------------------------------------------------------------------------------
let bus:[string, number]=["BMTC", 57];// only two data type
console.log(bus[1]);

let RoadStar:[string, number, null, boolean]=["Yezdi", 27, null, true];//multiple data type
console.log(RoadStar[0]);
console.log(RoadStar);

let combination:[string, number][]=[["Appu", 27], ["Jeevan", 9], ["Gowda", 1]];
console.log("group fetching",combination[1]);//group fetching
let single=combination[2];
console.log("Indivually 1st one: ",single[0]);
console.log("Indivually 2nd one:",single[1]);

for(let l=0;l<=RoadStar.length-1;l++){ //itarating using standard for loop
    console.log(RoadStar[l]);
}

