/*
* Overloding is for - constructor and methods
* Overriding is for - property and methods
* property does not override in typescript
*/

class RCB{

    playerName:string;
    playerNumber:number=27;//must initialize otherwise it will throw error in child class cause it is overridden property
    playerType:string;

    constructor(playerName:string, playerNumber:number, playerType:string){
        this.playerName=playerName;
        this.playerNumber=playerNumber;
        this.playerType=playerType;
    }

    playerDetails(){
        console.log(`Player name: ${this.playerName}, Player number: ${this.playerNumber}, Player type: ${this.playerType}`);
    }

    gameOn(){
        console.log("Game on........");
    }

    gameoff(){
        console.log("Game off........");
    }
}

class Virat extends RCB{
    playerBat:string;
    playerNumber:number=18;//overridden property from parent class

    constructor(playerName:string, playerNumber:number, playerType:string, playerBat:string){
        super(playerName, playerNumber, playerType);// to invoke parent class constructor inside the child class constructor using super keyword
        this.playerBat=playerBat;
    }

    batDetails(){
        console.log(`Bat name is : ${this.playerBat}`);
        super.playerDetails();// to invoke parent class method inside the child class method using super keyword
        //super.playerType;// cant invoke parent class property inside the child class using super keyword otherwise it will throw error
    }

    gameOn(){//overridden method from parent class
        console.log("Game on at Chinnaswamy stadium........");
    }

}

let RoyalTeam=new Virat("Virat Kohli", 9, "Batsman", "MRF");
console.log(RoyalTeam.playerNumber);//overridden property
RoyalTeam.batDetails();
RoyalTeam.gameOn();//overridden method