// Soldier


class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
      }
    
    attack() {
      return `${this.strength}`;
        }
    receiveDamage(theDamage) {
      if (theDamage > 0) {
      this.health -= theDamage)
        }
      }
   } 


// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
    super (health, strength); // esto no deberia estar?
    this.name = name;
    }
    
    receiveDamage(theDamage){
    if (theDamage >= 0) {
    this.health -= theDamage)
    }
    if (this.health - theDamage >= 0) {
        console.log(`${name} has received ${theDamage} points of damage`);      
    } else {
        console.log (`${name} has died in act of combat`);
    }

    }
    
    battleCry() {
        console.log ("Odin owns you all");
    }

    
}

// Saxon
class Saxon extends Soldier {
    constructor (health,strength){
        super(health,strength);
    }

    receiveDamage(theDamage){
        if (theDamage >= 0) {
        this.health -= theDamage)
        }
        if (this.health - theDamage >= 0) {
            console.log(`A Saxon has received ${theDamage} points of damage`);      
        } else {
            console.log (`A Saxon has died in combat`);
        }
    
        }


}

// War
class War {}
