// Soldier
class Soldier {

  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    if(this.health < damage){
      this.health = 0
    }
    this.health -= damage
  }

}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage){
    if(this.health <= damage){
      this.health = 0
      return `${this.name} has died in act of combat`
    }
    this.health -= damage
    return `${this.name} has received ${damage} points of damage`
  }

  battleCry(){
    return 'Odin Owns You All!'
  }

}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
