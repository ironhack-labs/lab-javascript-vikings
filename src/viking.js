// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health-=damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health-=damage
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
    else {
      return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health-=damage
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
    else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(vikingWarrior) {
    this.vikingArmy.push(vikingWarrior)
  }
  addSaxon(saxonWarrior) {
    this.saxonArmy.push(saxonWarrior)
  }
  vikingAttack() {
    let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    let randomViking = Math.floor(Math.random()*this.vikingArmy.length)

    // Attacks an random Saxon Warrior with an random Viking Warrior
    let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())
    // checks if he died in the process. If dead, the soldier will be spliced out of the Army Array
    if (result.includes("died"))
    {
      this.saxonArmy.splice(randomSaxon, 1)
    }
    return result
  }
  saxonAttack() {
    // same as in vikingAttack() with switched roles
    let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    let randomViking = Math.floor(Math.random()*this.vikingArmy.length)

    let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())
    if (result.includes("died"))
    {
      this.vikingArmy.splice(randomViking, 1)
    }
    return result
  }
  showStatus() {
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    }
    if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

//update with private account

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
