// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
    attack() {
      return this.strength

    }
    receiveDamage(thedamage){
      this.health -= thedamage
      
    }
  
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
  super(health, strength);
  this.name = name;
  }
  battleCry() {
    return "Odin Owns You All!"
  }
  receiveDamage(thedamage) {
    super.receiveDamage(thedamage)
    if (this.health>0){
      return `${this.name} has received ${thedamage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return 'A Saxon has died in combat'
    
    }
  }
}

// War
class War {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
