//typescript is static type language, 
/*
a. Typescript will check the data type of variable at compile time.
b. and it will check the error during compile time only, not at run time.
c. so we need to declare the data type of variable while declaring the variable.
let nama:string="appu";
nama="Jeevan";
nama=10;//error Type 'number' is not assignable to type 'string'
*/

//typescript is annotation language, 
/*
a. defining the data type explicitly into the variable also known as annotation
let birth:number=27;
*/

//typescript is type inference, 
/*
a. if we don't assigned any data type into the variable, 
then typescript will auto assigned the data type based on the data during compile time
let dMonth='Sep';
*/

/*
var, let and const
a. scope - var is function scope, let and const are blocked scope
b. declare - declare is possible for var, let without initialize and const must be initialize
c. initialize - initialize is possible for var, let and const
d. redeclare - redeclare is only possible for var and let and const are not possible
e. reinitialize - reinitialize is possible for var, let and const must be initialize
f. hosting - hosting only for var

| Concept              | Java                      | TypeScript                     |
| -------------------- | ------------------------- | ------------------------------ |
| Variable declaration | `String name = "Jeevan";` | `let name: string = "Jeevan";` |
| Data type position   | Before variable name      | After variable name            |
| String type          | `String` (capital S)      | `string` (lowercase s)         |
| Variable keyword     | Not required              | `let`, `const`, or `var`       |
*/

//var, let and const - scope------------------------------------------------------

//var is function scope
/* function varFuction(){
    if(true){   
        var vname="Jeevan";
        console.log(vname);
    }
    console.log(vname);
}
varFuction(); */

//let is block scope
/* function letFuction(){
    if(true){   
        let lname="Jeevan";
        //console.log(lname);
    }
    console.log(lname);
}
letFuction(); */

//const is block scope
/* function constFuction(){
    if(true){   
        let cname="Jeevan";
        //console.log(cname);
    }
    console.log(cname);
}
constFuction(); */

//var, let and const - declare--------------------------------------------------------

/* //var
var vx;
console.log(vx);//declare is possible without initialize

//let
let lx;
console.log(lx);//declare is possible without initialize

//const
const cx=10;
console.log(cx);//declare is not possible without initialize 
*/

//var, let and const - initialize -------------------------------------------------------

/* //var
var vx=10;
console.log(vx);//initialize is possible

//let
let lx=20;
console.log(lx);//initialize is possible

//const
const cx=30;
console.log(cx);//initialize is possible
 */

//var, let and const - redeclare -------------------------------------------------------

/* var vx=10;
var vx=20
console.log(vx);//redeclare is possible

//let
let lx=20;
let lx=30;
console.log(lx);//redeclare is not possible

//const
const cx=30;
const cx=30;
console.log(cx);//redeclare is not possible */

//var, let and const - reinitialize -------------------------------------------------------

/* var vx=10;
vx=20
console.log(vx);//reinitialize is possible

//let
let lx=30;
lx=40;
console.log(lx);//reinitialize is possible

//const
const cx=50;
cx=60;
console.log(cx);//reinitialize is not possible */

//var, let and const - hosting -------------------------------------------------------

/* //var
console.log(va);//undefined
var va=10;
console.log(va);//10

//let
console.log(la);//error
let la=10;
console.log(la);

//const
console.log(ca);//error
const ca=30;
console.log(ca); */