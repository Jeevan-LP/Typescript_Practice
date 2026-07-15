class Calculater{

    //Constuctor overloading
    constructor();// default constructor without parameterized
    constructor(a:number, b:number); //parameterized constructor
    constructor(a?:number, b?:number){
        if(a!=undefined && b!=undefined){
            console.log("sum of a and b: ",(a+b));
        }
        else{
            console.log("Default constructor without parameterized...");
        }
    }

    //Method overloading
    sum(x:number, y:number):number;
    sum(x:number, y:number, z:number):number;
    sum(x:number, y:number, z?:number):number{
        if(z!=undefined){
            x+y+z;
        }
        return x+y;
    }

}
//Constuctor overloading
let calc1=new Calculater();//default constructor without parameterized
let calc2=new Calculater(27,9);

//Method overloading
console.log("sum of x and y:",calc1.sum(10,20));
console.log("sum of x, y and z:",calc1.sum(30,40,50));
