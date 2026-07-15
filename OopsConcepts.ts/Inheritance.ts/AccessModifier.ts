/*
 * public - properties and method can access any where both inside the class and outside the class
 * protected - properties and method can only accessible within class 'Parent' and its subclasses.
 * private - properties and method can only accessible within class
 */

class Parent{

    //properties
    public id:number=27;
    protected name:string="Jeevan";
    private role:string="QA";

    ParentEmpDetail(){
        console.log(this.id)
        console.log(this.name);
        console.log(this.role);
    }

    //methods
    public company(){
        console.log("In4 Velocity");
    }

    protected application(){
        console.log("In4 Suit");
    }

    private QA(){
        console.log("QA is Jeevan L P");
    }

}

class Child extends Parent{

    ChildEmpDetail(){
        console.log(this.id)
        console.log(this.name);
        //console.log(this.role);//error cause Property 'role' is private and only accessible within class 'Parent'.
    }

    ChildCMPDetail(){
        super.company();
        super.application();
        //super.QA();//error cause Property 'QA' is private and only accessible within class 'Parent'
    }

}

let child=new Child();
console.log(child.id)
//console.log(child.name);//Property 'name' is protected and only accessible within class 'Parent' and its subclasses.
//console.log(child.role);//Property 'role' is private and only accessible within class 'Parent'.
child.ChildCMPDetail();