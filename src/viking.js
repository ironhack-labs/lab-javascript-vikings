// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health-damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    this.name = name;
    super(health, strength)
  }
  receiveDamage(damage){
    let damageReceived = super.receiveDamage()
    if (this.health > 0){
      console.log(`${name} has received ${damage} points of damage`)
    }
    else{
      console.log(`${name} has died in combat`)
    }
  }
  battleCries(){
    return "Odin Owns you all!"
  }
}

// Saxon
class Saxon extends Soldier{}
  0
// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
