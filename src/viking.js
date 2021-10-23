// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){

  }
  battleCry() {

  }

}

// Saxon
class Saxon extends Soldier {
  constructor(health , strength){
    super(health , strength);
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health <= 0){
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${damage} points of damage` 
    }
  }
}
const Efren = new Saxon(50 , 1000);

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
