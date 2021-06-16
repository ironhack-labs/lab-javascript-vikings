// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength
  }
  receiveDamage = (damage) => {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    this.name = name
    super(health, strength)
  }
  receiveDamage(damage) {
    this.health -= damage
    if (health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else if (health <= 0) {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
//constructor(name, strength){} //Not needed since will inherit
receiveDamage(damage){
  this.health -= damage
  if (health > 0) {
    return `A Saxon has received ${damage} points of damage`
  } else if (health <= 0) {
    return `A Saxon has died in act of combat`
  }
}
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    Soldier,
    Viking,
    Saxon,
    War
  };
}