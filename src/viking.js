// Soldier
class Soldier {
constructor (health, strength) {
    this.health = health;
    this.strength = strength;
}
attack() {
    return this.strength;
}
receiveDamage(damage) {
 this.health = this.health - damage
}

}

// Viking
class Viking extends Soldier{
    constructor ( name, health , strength){
        super ( health, strength)
        this.name = name
    }
   receiveDamage (damage){
    super.receiveDamage (damage) 
    return this.health !== 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
   }

   battleCry() {
    return "Odin Owns You All!"
   }
}
    

// Saxon
class Saxon extends Soldier {
    
    receiveDamage (damage){
        super.receiveDamage (damage) 
        return this.health !== 0 ? `A Saxon has received ${damage} points of damage`: `A Saxon has died in combat`   
}
}


// War
class War {
    constructor () {
     this.vikingArmy = [];
    this.saxonArmy = [];   
    }   
    addViking( vikingObject) {
        this.vikingArmy.push (vikingObject)
    }
    addSaxon( saxonObject) {
        this.saxonArmy.push (saxonObject)
    }
    vikingAttack(){
        let randomViking = this.vikingArmy [Math.floor (Math.random () * this.vikingArmy.length) ];
        let randomSaxon = this.saxonArmy [Math.floor (Math.random () * this.saxonArmy.length) ] ;
       
        randomSaxon.receiveDamage (randomViking.strength)
    }
    saxonAttack (){
        let randomViking = this.vikingArmy [Math.floor (Math.random () * this.vikingArmy.length) ];
        let randomSaxon = this.saxonArmy [Math.floor (Math.random () * this.saxonArmy.length) ] ;
        
        randomViking.receiveDamage (randomSaxon.strength)
    }
    }

