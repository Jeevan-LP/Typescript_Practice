/**
 * Inheritance is a fundamental object-oriented programming (OOP) concept that allows a new class (called a child or subclass) 
 to inherit properties and behaviors (fields and methods) from an existing class (called a parent or superclass). 
 * In TypeScript, inheritance is implemented using the `extends` keyword. 
 * A class can use the properties and methods of the another class by using the 'extends' keyword.
 * Inheritance is a mechanism where one class (child class) can inherit the properties and methods of another class (parent class). 
 * The child class can also have its own properties and methods, and it can override the methods of the parent class to provide specific implementations. 
 * This promotes code reusability and establishes a natural hierarchical relationship between classes.
 * Inheritance allows us to reuse the fucntcionity of an existing class without rewriting the code. 
 */

// Parent class
class Car{
    
    carName:string;
    carModel:number;
    carType:string;
    carNumber:number;

    constructor(carName:string, carModel:number, carType:string, carNumber:number){
        this.carName = carName;
        this.carModel = carModel;
        this.carType = carType;
        this.carNumber = carNumber;
    }

    carStart(){
        console.log("Car has started....");
    }

    carStop(){
        console.log("Car has stopped....");
    }

    carDetails(){
    console.log(`Car Name: ${this.carName}, Model: ${this.carModel}, Type: ${this.carType}, Number: ${this.carNumber}`);
    }

}
// Car class usage
/*let carBE6 = new Car("BE6", 2023, "EV", 1234);
console.log(carBE6.carName);
carBE6.carStart();
carBE6.carStop();
carBE6.carDetails();
*/

// Child class - Thar
class Thar extends Car{
    
    carManifuctureYear:number;

    constructor(carName:string, carModel:number, carType:string, carNumber:number, carManifuctureYear:number){
        super(carName, carModel, carType, carNumber);/*super keyword is used to call the constructor of the parent class 
        and super keyword must be called before accessing the properties and methods of the parent class in the child class constructor*/
        this.carManifuctureYear = carManifuctureYear;//class level calling - this is used to initialize the properties of the class
        }

    /*method overriding - when child class has the same method as parent class then it will override the parent class method then 
    it will execute the child class method*/    
    carStart(){
        console.log("Thar Car has started....");
    }

    carManifuctureDetails(){
        console.log(`Car Manifucture Year: ${this.carManifuctureYear}`);
    }

}
// Thar class usage
let tharCar= new Thar("Thar", 2025, "SUV", 2709, 2025);
console.log(tharCar.carName);//from parent class
tharCar.carStop();//from parent class
tharCar.carDetails();//from parent class
tharCar.carStart();//from child class - this will override the parent class method then it will execute the child class method  
tharCar.carManifuctureDetails();//from child class


// Child class - Tata
class Tata extends Car{
    
    carManifuctureYear:number;

    constructor(carName:string, carModel:number, carType:string, carNumber:number, carManifuctureYear:number){
        super(carName, carModel, carType, carNumber);
        this.carManifuctureYear = carManifuctureYear;
    }

    carStart(){
        console.log("Tata Car has started....");
    }

    carManifuctureDetails(){
        console.log(`Car Manifucture Year: ${this.carManifuctureYear}`);
    }

}
// Tata class usage
/*let tataCar = new Tata("Tata", 2024, "Sedan", 1234, 2024);
console.log(tataCar.carName);//from parent class
tataCar.carStop();//from parent class
tataCar.carDetails();//from parent class
tataCar.carStart();//from child class - this will override the parent class method then it will execute the child class method  
tataCar.carManifuctureDetails();//from child class
*/

//Casting usage
/*Only common properties and methods of the parent class can be accessed using the parent class reference variable, 
but the child class specific properties and methods cannot be accessed using the parent class reference variable.*/
let car1: Car = new Thar("XUV 700", 2024, "XUV", 2001, 2023);
console.log(car1.carName);//from parent class
car1.carStart();//from child class - this will override the parent class method then it will execute the child class method
car1.carStop();//from parent class
car1.carDetails();//from parent class 
//car1.carManifuctureDetails();//error: Property 'carManifuctureDetails' does not exist on type 'Car'. Did you mean 'carDetails'?
//car1.carManifuctureYear;//error: Property 'carManifuctureYear' does not exist on type 'Car'. Did you mean 'carModel'?

//Approach 1 - taking parent object reference with casting usage
// Type assertion to access child class specific properties and methods
/*let tharCar1 = car1 as Thar;
tharCar1.carManifuctureDetails();//from child class
console.log(tharCar1.carManifuctureYear);//from child class
*/

//Approach 2 - taking directly parent object reference
/*let TataCar1 =carBE6 as Tata;
TataCar1.carManifuctureDetails();//from child class
console.log(TataCar1.carManifuctureYear);//from child class
*/