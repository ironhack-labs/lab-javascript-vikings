// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = this.strength;
  }

  attack (){
   return this.strength
  }

  receiveDamage(damage){
    //logic without return
  }
}

// Viking
class Viking extends Soldier {}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
