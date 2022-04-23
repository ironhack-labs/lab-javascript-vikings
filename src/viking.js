const setupMethods = require("solc/wrapper");

// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
    attack(){
      return this.strength;
    }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name 
  }

  attack(){
    return Viking.strength
  }

  receiveDamage(damage){
    this.health -= damage;
    if (Viking.health > 0){
    console.log(`${this.name} has received ${this.damage} points of damage`)
    } else {
    console.log(`${this.name} has died in act of combat`)
    }

  battleCry(){
    console.log("Odin Owns You All!")
  }
    

  }
}

// Saxon
class Saxon extends Soldier {

  attack(){
    return Saxon.strength
  }

  receiveDamage(damage){
    this.health -= damage;
    if (Saxon.health >= 0) {
      console.log(`A Saxon has received ${this.damage} points of damage`)
    } else {
      console.log(`A Saxon has died in combat`)
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
