// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  } 
  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage (damage) {
    this.health -=damage
    if (this.health > damage) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
  receiveDamage(damage) {
    this.health -= damage

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.wikingArmy = []
    this.saxonArmy = []
  };

  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    let randViking = random(this.vikingArmy.length)
    let randSaxon =random(this.saxonArmy.length)
    let viking = this.vikingArmy[randViking]
    let saxon = this.saxonArmy[randSaxon]
    let result = viking.receiveDamage(saxon.strength)

    if (viking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter( (viking, index) => {
        index != randViking
      })
    }
    return result
  }
  saxonAttack() {
    let randViking = random(this.vikingArmy.length)
    let randSaxon = random(this.saxonArmy.length)
    let viking = this.vikingArmy[randViking]
    let saxon = this.saxonArmy[randSaxon]
    let result = viking.receiveDamage(saxon.strength)

    if (viking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter( (viking, index) => {
        index != randViking
      })
    }
    return result
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
