// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    };

    attack(){
        return this.strength
    };

    receiveDamage(damage){
        this.health = this.health - damage
    };
}
// Viking
class Viking extends Soldier {
    constructor(name,health, strength){
        super(health, strength);
        this.name=name;
    }


    receiveDamage(damage) {
        this.health = this.health - damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else { 
            return `${this.name} has died in act of combat`
        }

    }

    battleCry(){
        return "Odin Owns You All!"
    }



}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health = this.health - damage

        if(this.health > 0){
            
            return `A Saxon has received ${damage} points of damage`
        } else { 
            return `A Saxon has died in combat`
        }
}
}
// Bonus War
 class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
       // super(health,strength)
        //super.receiveDamage();
        //this.strength=this.strength
    } 
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

     vikingAttack(){
       

        // call the saxon damage
        
         let saxonMan = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vikingMan = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        
        //saxon attacks viking
        let attackedSaxonMan = saxonMan.receiveDamage(vikingMan.strength);
        if (saxonMan.health <= 0 ){
            this.saxonArmy.splice(saxonMan, 1)
        }
      
        console.log(this.saxonArmy);
        return attackedSaxonMan;
    
     

        
    }  
} 

//
 
    




