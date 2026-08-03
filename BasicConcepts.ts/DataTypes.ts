/*
Premetive data type
a. number
b. string
c. boolean
d. any
e. void
f. union
g. null
h. undefined

Non-Premetive data type
a. array
b. class
c. object
d. function
e. interface
f. touple
*/

/* Why type script is type safety????
//type script
let student="Jeevan L P";
student=10;

//java script
let student="Jeevan L P";// it will work if we use .js file
student=10;

Once if we declare any veriable into to the data type, again can't defined any/other data type into 
the same veriable in type script that why its call'd type safety. but same is possible in java script.
*/ 

/* Type script syntax
Keyword veriable:data type=data;
let role:string="Software Test Engineer";

let = Keyword
veriable = role
data type = string
data = Software Test Engineer

let num:number=10; //':number' explicitly defining a data type into the veriable - Annotation
let num=10; //'num=10' implicitly defining a data type into the veriable - type inference 

✅ const → Value never changes.
✅ let → Value can change.
❌ var → Avoid in modern TypeScript.
✅ Outside class → let, const, var are allowed.
✅ Inside methods/functions → let, const, var are allowed.
❌ Inside class properties → Don't use let, const, or var; declare the property directly.

Important
a. in side the class we can use all access modifier
b. in side the methods we call use let, const and var

*/

//Premetive data type-----------------------------------------------------------------------------
//a. number
let num:number=10;
console.log("Number: ",typeof(num),num);
let dec:number=27.09;
console.log("Decimal : ",typeof(dec),dec);
let lon:number=15042024;
console.log("Long : ",typeof(lon),lon);

//b. string
let company:string="In4 Velocity";
console.log("Company: ",company);
let app:string='Arrow PS';
console.log("App: ",app);
let url:string=`in4suite QA`;
console.log("URL: ",url);
let overview:string=`Software $(company) $(url)`;// to print all in one
console.log("Company overview: ",overview);

//c. boolean
let iscorrcet:boolean=true;
console.log("iscorrcet? ",iscorrcet);
let iswrong:boolean=false;
console.log("iswrong? ",iswrong);

//d. any
//in realtime/actually will not preffered 'any' data type because it breaks the type safety
let employee:any="Jeevan L P";
console.log("Employee name: ", employee);
employee=2709;
console.log("Employee ID: ", employee);
employee=true;
console.log("Employee Good?: ", employee);
employee=null;
console.log("Employee native: ", employee);

//e. void
function greeting():void{
    console.log("Hi jeevan..");
}
greeting();

function sum(x:number, y:number):number{
    return(x+y);
}
let value=sum(10,20);
console.log("Sum of x and y: ",value);

//f. union
let all:number | string | boolean;
all=18;
all="Appu";
all=true;
console.log("union: ",all);

//g. null
let zero:null=null;
console.log("zero: ",zero);

//h. undefined
let un:number;
//console.log("undefined: ",un);