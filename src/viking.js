// Soldier
//iteration 0, 1
class Soldier {
  constructor(health, strength) {
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

/* iteration 2
Modify Viking class, inheriting Soldier class, 
re-implementing receiveDamage() method from Viking, adding battleCry() method.
*/

// Viking
class Viking extends Soldier{
  
  constructor(name, health, strength){
    super(health,strength)
    this.name = name;
  
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength)
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {}

/*
iteration 0 
receives 2 arguments: health & strength

iterartion 1
modify "Soldier" to receive 2 added methods, attack() & receiveDamage()

*/
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
