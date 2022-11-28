// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength; 
    }
    receiveDamage(damage){
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }

    receiveDamage(damage){

        this.health-=damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
        
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        
        this.health-=damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
        
    }
    
    

}
class Aztec extends Soldier{ // class for iteraton 5

    receiveDamage(damage){
        
        this.health-=damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
        
    }
   

}

// War
class War {
    constructor(){
        this.vikingArmy =[];
        this.saxonArmy =[];
        this.aztecsArmy =[];// this line is only for the iteration 5 method

        this.allTheArmies=[[],[],[]];// this line is only for the iteration 5 method, i guess there is a better way to create an empty matrix
        

      

    }
    addViking(viking){

        this.vikingArmy.push(viking)

        this.allTheArmies[0].push(viking) // this line is only for the iteration 5 method

    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)

        this.allTheArmies[1].push(saxon) // this line is only for the iteration 5 method
    }
    addAztecs(aztec){// this method is only for the iteration 5 method
         this.allTheArmies[2].push(aztec)

        
    }
   
    
    vikingAttack(){
        // //we need a random number from 0 to saxonArmy.lenght = indexSaxRan
        // let indexSaxRan = Math.floor(Math.random()*this.saxonArmy.length)
        // // we need a random number from 0 to vikingArmy.lenght = indexVikRan
        // let indexVikRan = Math.floor(Math.random()*this.vikingArmy.length)

        // //  the attack begin
        // let attack = this.saxonArmy[indexSaxRan].receiveDamage(this.vikingArmy[indexVikRan].strength);

        // //cheaking for deads
        // if (this.saxonArmy[indexSaxRan].health <= 0){
        //     this.saxonArmy.splice(indexSaxRan,1)
        // }

        // return attack
             
        let attack = this.Attacking(`viking`,`saxon`);
        this.saxonArmy = this.allTheArmies[1]
        return attack

    }
    saxonAttack(){

        //we need a random number from 0 to saxonArmy.lenght = indexSaxRan
        let indexSaxRan = Math.floor(Math.random()*this.saxonArmy.length)
        // we need a random number from 0 to vikingArmy.lenght = indexVikRan
        let indexVikRan = Math.floor(Math.random()*this.vikingArmy.length)
        //  the attack begin
        let attack = this.vikingArmy[indexVikRan].receiveDamage(this.saxonArmy[indexSaxRan].strength); 
        
        if (this.vikingArmy[indexVikRan].health<=0){
            this.vikingArmy.splice(indexVikRan,1)
        }

        return attack;
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!` 
        }if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

    
    Attacking(attacker,defender){ 

    //     the idea is to create a method that allows one faction to attack another one
    //     I am using this aproach in case i want to add  more armies into the game in the future

    //     if we are using this method we need to create a new array with all the armies in the constructor...line 79
        
       let armyAtt,armyDef;


        switch(attacker){
            case `viking`:
                armyAtt = 0
                break;
            case `saxon`:
                armyAtt = 1
               break;
            case `aztecs`:
                armyAtt = 2
                break;
        }
        switch(defender){
            case `viking`:
                armyDef = 0
                break;
            case `saxon`:
                armyDef = 1
               break;
            case `aztecs`:
                armyDef = 2
                break;
        }
           

      
         //we need a random number from 0 to the attackers army (this.allTheArmies[armyAtt]) = indexAttackerRan
         let indexAttackerRan = Math.floor(Math.random()*this.allTheArmies[armyAtt].length)
         //we need a random number from 0 to the defenders army (this.allTheArmies[armydef]) = indexDefenderRan
         let indexDefenderRan = Math.floor(Math.random()*this.allTheArmies[armyDef].length)

          //  the attack begin
        let attack = this.allTheArmies[armyDef][indexAttackerRan].receiveDamage(this.allTheArmies[armyAtt][indexDefenderRan].strength);

       // cheaking for deads
        if (this.allTheArmies[armyDef][indexDefenderRan].health <= 0){
            
            this.allTheArmies[armyDef].splice(indexDefenderRan,1)
        }

        return attack


    }
}
