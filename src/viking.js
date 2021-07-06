// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack () {
    return this.strength
  }

  receiveDamage (damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage){
    this.health -= damage

    if(this.health > 0) return `A Saxon has received ${damage} points of damage`
  }
}

// War
class War {

  saxonAttack() {
    let randomAttack = Math.floor(Math.random() * this.vikingArmy.length)
    this.vikingArmy[randomAttack].receiveDamage(this.saxonArmy[0].strength)
    
    if (this.vikingArmy[randomAttack].health <= 0) {
      this.vikingArmy[randomAttack].splice(randomAttack, 1)
    }
    
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
