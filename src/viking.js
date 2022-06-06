// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }

  receiveDamage(damage) {
      this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) {
      return (`${this.name} has received ${damage} points of damage`)
    } else if (this.health <= 0) {
      return (`${this.name} has died in act of combat`)
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return (`A Saxon has received ${damage} points of damage`)
    }else if (this.health <= 0) {
      return (`A Saxon has died in combat`)
    }
  }
}

// War
class War {
  constructor (){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  randomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  vikingAttack() {
    let randomViking = this.vikingArmy[this.randomIndex(this.vikingArmy)]
    let randomSaxon = this.saxonArmy[this.randomIndex(this.saxonArmy)]
    
    randomSaxon.receiveDamage(randomViking.strength)
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon)
      return "A Saxon has died in combat"
    }
  }
  saxonAttack() {
    let randomViking = this.vikingArmy[this.randomIndex(this.vikingArmy)]
    let randomSaxon = this.saxonArmy[this.randomIndex(this.saxonArmy)]

    randomViking.receiveDamage(randomSaxon.strength)
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomViking)
      return `${randomViking.name} has received ${randomSaxon.strength} points of damage`
    }
  }
  showStatus() {
    if (this.saxonArmy.length <= 0) {
    return `Vikings have won the war of the century!`
  }else if (this.vikingArmy.length <= 0) {
    return `Saxons have fought for their lives and survived another day...`
  }else {
    return `Vikings and Saxons are still in the thick of battle.`
  }
}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
