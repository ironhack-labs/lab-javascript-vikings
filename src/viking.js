// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
   attack() {
    return this.strength
   }

   receiveDamage (theDamage) { 
    this.health -= theDamage;
}
   }
 


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    }
    battleCry() {
        return "Odin Owns You All!";
      }

      receiveDamage (damage) {
        this.health -= damage;
       
        if (this.health > 0) {
        return (`${this.name} has received ${damage} points of damage`) }
        
        else {
        return (`${this.name} has died in act of combat`) }
    }
      }

// Saxon
class Saxon extends Soldier{
        constructor(health, strength) {
        super(health, strength);
        }
        receiveDamage (damage) {
            this.health -= damage;
           
            if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`) }
            
            else {
            return (`A Saxon has died in combat`) }
        }
}


// War
class War {
   constructor () {
   this.vikingArmy = []
   this.saxonArmy = []
   }

addViking(viking) {
this.vikingArmy.push(viking)
}

addSaxon(saxon) {
this.saxonArmy.push(saxon)
}

vikingAttack() {
let vikingAt = Math.floor(Math).random(vikingAt) * this.vikingArmy ;
let saxonAt = Math.floor(Math).random(saxonAt) * this.saxonArmy ;

receiveDamage

}
saxonAttack() {}
showStatus() {}
}