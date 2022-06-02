// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;

  }
  attack() {
    return this.strength
  }
  receiveDamage(damage){
     this.health -= damage 
  }
}


// Viking
class Viking extends Soldier {
 constructor(name, health, strength){
  super(name, strength, health);
    this.name = name; 
    this.health = health;
 }
 receiveDamage(thedamage){
   this.health = this.health - thedamage; 
    if (this.health > 0){
      return(`${this.name} has received ${thedamage} points of damage`)
    }
    else {
      return(`${this.name} has died in act of combat`)
    }
   }
   battleCry() {
     return "Odin Owns You All!"
   }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(thedamage){
    this.health = this.health - thedamage;
    if(this.health > 0){
      return(`A Saxon has received ${thedamage} points of damage`)
    }
    return "A Saxon has died in combat"
  }
  }


// War
class War {

  addViking(Viking){}
  
  addSaxon(Saxon){}

  vikingAttack(){}

  saxonAttack(){}

  showStatus(){}
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
