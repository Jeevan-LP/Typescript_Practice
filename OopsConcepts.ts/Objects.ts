//Objects
/*
* Objects contains propeties and behaviours
* Objects contains variable and methods
* object is collection of key and value pair

Ex:1
employee propeties-- name, role, salary
employee behaviours-- bonus(), getdetails(), setdetails()

Ex:2
student propeties-- name, class, grad
student behaviours-- getdetails(), setdetails()

Diffrent way to create objects in Js/Ts
1. using 'object' type - directly define the value for variable(Js/Ts)
2. Inline type object - we also defined the datatype of the keys(Ts)
3. using type aliases(Ts)
4. using intersection types(Ts)
5. using the clasess(Js/Ts)
 */

//------------------------------------------------------------------------------------------------------
//1. using 'object' type - directly define the value for variable(Js/Ts)
//The typescript 'object' type represents all value that are not in primitive types
//Example
let companyEMP={
    name:"Jeevan",
    age:20,
    city:"Bangalore",
    salary:50000,
    role:"Software Test Engineer",

    bonus: function() {
        return this.salary*25/100;
    },

    getdetails:function():string{
        return `Mr. ${this.name} is a ${this.role} earning ${this.salary} in ${this.city} at the age of ${this.age}`;
        //console.log("Mr.",this.name, "is a",this.role,"earning", this.salary,"in" ,this.city, "at the age of", this.age);
    }

}

console.log(typeof companyEMP)
console.log("////Fetching the values from the object");
console.log(companyEMP.role);
console.log(companyEMP["city"]);
console.log(companyEMP.bonus());

console.log("////Fetching the all values from the object");
for(let empDetails in companyEMP){
    console.log(empDetails);///property names
    //console.log(employee[empDetails]);//property values
    //console.log(empDetails+" : "+companyEMP[empDetails]);//property name and value
}

console.log("////Updating the values from the object");
console.log(companyEMP.salary=75000);
console.log(companyEMP.age=25);

//companyEMP.getdetails();
console.log(companyEMP.getdetails());

//------------------------------------------------------------------------------------------------------
//2. Inline type object - we also defined the datatype of the keys(Ts)
//Example 1
let studentData01:{//declared
    sname:string,
    sgrade:string,
    sage:number,
    getstudentsummary:()=>string

}=
{
    sname:"Jeevan",//assigned
    sgrade:"A",
    sage:20,
    getstudentsummary:function(){
        return `${this.sname} is got ${this.sgrade} garde at the age of ${this.sage}`
    }
} 
//Example 2
let studentData02:{//declared
    sname:string,
    sgrade:string,
    sage:number,
    getstudentsummary:()=>string

}=
{
    sname:"Appu",//assigned
    sgrade:"A",
    sage:21,
    getstudentsummary:function(){
        return `${this.sname} is got ${this.sgrade} garde at the age of ${this.sage}`
    }
} 
//Example 3
let studentData03:{//declared
    sname:string,
    sgrade:string,
    sage:number,
    getstudentsummary:()=>string

}=
{
    sname:"Gowda",//assigned
    sgrade:"C",
    sage:22,
    getstudentsummary:function(){
        return `${this.sname} is got ${this.sgrade} garde at the age of ${this.sage}`
    }
} 
console.log(studentData01.getstudentsummary());
console.log(studentData02.getstudentsummary());
console.log(studentData03.getstudentsummary());


//------------------------------------------------------------------------------------------------------
//3. using type aliases(Ts)
/*using 'Inline type object - we also defined the datatype of the keys(Ts)'it repetative task multiple time 
declare and initilized so to over comw this drawback will go for type aliases(Js/Ts) like 
studentData01, studentData02 and studentData03
*/

type car={         //one time declaration
    carName:string,
    carType:string,
    carPrice:number,
    getcarDetails:()=>string;
};
//Example 1
let Benz:car={
    carName:"Benz",
    carType:"Fuel",
    carPrice:1000000,
    getcarDetails: function(){ 
        return `${this.carName} car with ${this.carType} price of ${this.carPrice}`;
    }
        
}
//Example 2
let BE6:car={
    carName:"BE6",
    carType:"Elecric",
    carPrice:1500000,
    getcarDetails: function(){ 
        return `${this.carName} car with ${this.carType} price of ${this.carPrice}`;
    }

}
//Example 3
let Thar:car={
    carName:"Thar",
    carType:"Petrol",
    carPrice:1200000,
    getcarDetails: function(){ 
        return `${this.carName} car with ${this.carType} price of ${this.carPrice}`;
    }

}

console.log(Benz.getcarDetails());
console.log(BE6.getcarDetails());
console.log(Thar.getcarDetails());

//4. using intersection types(Ts)

type Nothing={
    MobileName:string;
}

type MobilePrice={
    MobilePrice:number;
}

type Mobile=Nothing & MobilePrice &{
    getNothingDetails:()=>string;
    getMobilePrice:()=>string;        
    
}

let MobileDetails:Mobile={
    MobileName:"Nothing",
    MobilePrice:30000,
    getNothingDetails:function(){
        return `Mobile name ${this.MobileName}`;
    },
    getMobilePrice:function(){
        return `${this.MobileName} with price of ${this.MobilePrice}`;
    }
    
}

console.log(MobileDetails.getNothingDetails());
console.log(MobileDetails.getMobilePrice());

//5. using the clasess(Js/Ts) best for automation

class Kia{
     cName:string;
     fuelType:string;
     cprice:number;

     constructor(cName:string,fuelType:string,cprice:number){
        this.cName=cName;
        this.fuelType=fuelType;
        this.cprice=cprice;
     }

     //getCarDetails():string{
    getCarDetails =():string=>{//with arrow fucntion
        return `Car name ${this.cName} with ${this.fuelType} price of ${this.cprice}`
     }
}

let kia1=new Kia("Seltos", "EV",1500000);
console.log(kia1.getCarDetails());

let kia2=new Kia("Sonet", "Petrol",1800000);
console.log(kia2.getCarDetails());