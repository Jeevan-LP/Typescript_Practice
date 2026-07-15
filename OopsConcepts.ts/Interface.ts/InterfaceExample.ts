//Only Interface
interface Employee{

    name:string;
    ID:number;
    /*empDetails()//implimention wont allow in interface
    {
    }*/

    empDetails(name:string, ID:number):void;

}

let data:Employee={

    name:"John",
    ID:123,
    empDetails(name:string, ID:number):void{
        this.name=name;
        this.ID=ID;
        console.log(this.name, this.ID);
    }
};

console.log(data.name);
console.log(data.ID);
data.empDetails("Jeevan", 27);

//Interface to Interface
interface ParentStudent{
     Sname:string;
     
     parent():void;

}

interface childStudent extends ParentStudent{

    Sid:number;

    child():void;
}

let details:childStudent={

    Sname:"Appu",
    Sid:2709,
    parent() {
        console.log("parent interface", this.Sname);
    },
    child() {
        console.log("child interface", this.Sid);
    }
};

details.parent();
details.child();

//Interface to class
interface Car {

    cName:string;

    carParent():void;
}

class Thar implements Car{

    cName="Thar";
    cType:string;
    cModel:number=2001;

    constructor(cType:string){
        this.cType=cType;
    }

    carParent(): void {
        console.log(this.cName, this.cType, this.cModel);
    }

}

let thar=new Thar("Automatic");
thar.carParent();

//Multiple Interface to class

interface Benz{

    BenzModel:number;
    BenzDetails():void;
}

interface Audi{

    AudiModel:number;
    AudiDetails():void;
}

class allCar implements Benz, Audi{

    BenzModel=2001;
    BenzCarType:string="Petrol";
    BenzDetails(){
        console.log(this.BenzModel, this.BenzCarType);
    }

    AudiModel=2002;
    AudiCarType:string="Disel";
    AudiDetails(){
        console.log(this.AudiModel, this.AudiCarType);
    }

}

let car=new allCar();
car.BenzDetails();
car.AudiDetails();