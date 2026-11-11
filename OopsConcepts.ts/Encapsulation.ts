class A{
    private name="Jeevan L P";

    public getDetails(){
        return this.name;
    }
}

class B extends A{

    data(){
        console.log(this.getDetails());
    }

}

let ab=new B();
ab.data();