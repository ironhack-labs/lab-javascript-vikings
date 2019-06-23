//attack funtion removed b/c no changes and inherited from 1st call above
//super. means inherit (copying) from parent function then rest of argumenrts are new
// extends mean copying function, super. is calling a function from the parent
//super with no .(dot) copiny constructor ex.super(health, strength) 

//reimplement --super take from parent then new return is the reimplemented arguments



// Soldier
class Soldier {
    constructor (health, strength){
    this.health= health ;
    this.strength= strength;  
}

attack (){
    return this.strength;
}


receiveDamage(damage){
  this.health = this.health - damage;
}
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)  //calling function from parent and passing parameters necessary
         this.name= name;    
     }


   receiveDamage(damage){
       super.receiveDamage(damage)
       
       if (this.health <= 0){ 
           return `${this.name} has died in act of combat`
        } else { return `${this.name} has received ${damage} points of damage`
    }
}     
    battleCry(){
        return "Odin Owns You All!";   
    }

}


// Saxon
class Saxon extends Soldier{
    constructor (health, strength){
        super(health, strength);
    }
  //would never do this in real life wasting keystrokes
  //if you simply dont define it this method will inherit perfectly from parents
  //but since we redefine it, we must call super in order to inherit from parents  
    receiveDamage(damage){
    super.receiveDamage(damage)
    if(this.health <= 0){ 
        return "A Saxon has died in combat";
     } else { 
         return `A Saxon has received ${damage} points of damage`;
 }
}
}




// War 
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(aVikingObject){
        this.vikingArmy.push(aVikingObject);
    }

    addSaxon(aSaxonObject){
        this.saxonArmy.push(aSaxonObject);
    }


    vikingAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        let theAmount = randomViking.attack()

       let result = randomSaxon.receiveDamage(theAmount);

        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return result;
    }

    saxonAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        let theAmount = randomSaxon.attack()

       let result = randomViking.receiveDamage(theAmount);

        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return result;
    }


    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }

        if(this.vikingArmy.length ===0){
            return "Saxons have fought for their lives and survive another day..."
        }

        return "Vikings and Saxons are still in the thick of battle."
    }

}