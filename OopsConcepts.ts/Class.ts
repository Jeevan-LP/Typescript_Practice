/*
Class
1. Read only properties - Can only be assigned once, inside the constructor
2. Optional properties - can be undefined
3. Static properties and methods
    a. static properties and methods are common/shared across all the the objects
    b. static properties and methods can be accessed throgh class name directly
    c. static properties and methods can be modified using class
    d. we cannot use for static properties, instead we can class name.
 */

class Bike{
    readonly bikeName:string;//Read only properties
    bikeVersion:number;//Normal properties
    bikeType?:string;//Optional properties
    static vehicle:string="Bike";

    constructor(bikeName:string, bikeVersion:number, bikeType?:string){
        this.bikeName=bikeName;
        this.bikeVersion=bikeVersion;
        this.bikeType=bikeType;
    }

    getBikeDetails():void{
        console.log("Bike name is: ",this.bikeName);
        console.log("Bike version is: ",this.bikeVersion);
        if(this.bikeType!=undefined){
        console.log("Bike type is: ",this.bikeType);
        }
        console.log("Type of vehicle is: ",Bike.vehicle);
    }

    static typeOfVehicle(vehicle:string){
        Bike.vehicle=vehicle;
    }
}

let Bike1=new Bike("Jawa Bobber 42", 2709, "EV");
Bike1.getBikeDetails();
//Bike1.bikeName="Royal Enfield"; Cannot assign to 'bikeName' because it is a read-only property.
Bike1.bikeVersion=2001;
Bike1.getBikeDetails();
Bike.typeOfVehicle("Bus");
Bike1.getBikeDetails();

let Bike2=new Bike("Jawa Bobber 42", 2709);
Bike2.getBikeDetails();