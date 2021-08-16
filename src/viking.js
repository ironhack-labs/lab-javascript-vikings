// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;

  }

  battleCry() {
    return "Odin Owns You All!"
  }
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return "A Saxon has died in combat"
    }
  }
}


// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    const randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length)
    const randomViking = this.vikingArmy[randomIndexViking]
    const randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const randomSaxon = this.saxonArmy[randomIndexSaxon]
    const result = randomSaxon.receiveDamage(randomViking.attack())
    this.saxonArmy.splice(randomIndexSaxon, 1)
    return result
  }
  saxonAttack() {
    const randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length)
    const randomViking = this.vikingArmy[randomIndexViking]
    const randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const randomSaxon = this.saxonArmy[randomIndexSaxon]
    const result = randomViking.receiveDamage(randomSaxon.attack())
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomIndexViking, 1)
    }
    return result
  }


  // Iteration 5
  // trying to have a generic method
  // takes in arguments two booleans
  attacks(vikingAttack, saxonAttack) {
    const randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length)
    const randomViking = this.vikingArmy[randomIndexViking]
    const randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const randomSaxon = this.saxonArmy[randomIndexSaxon]
    if (vikingAttack === "true") {
      const randomSaxon = this.saxonArmy[randomIndexSaxon]
      const result = randomSaxon.receiveDamage(randomViking.attack())
      this.saxonArmy.splice(randomIndexSaxon, 1)
      return result
    } else {
      const result = randomViking.receiveDamage(randomSaxon.attack())
      if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomIndexViking, 1)
      }
      return result
    }

  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



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