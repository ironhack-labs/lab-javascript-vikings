// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`
    else return `${this.name} has died in act of combat`
  }
  battleCry() {
    return 'Odin Owns You All!'
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`
    else { return 'A Saxon has died in combat' }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []
  }
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj)
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj)
  }
  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const randomSaxonStatus = randomSaxon.receiveDamage(randomViking.attack())
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
    }
    return randomSaxonStatus
  }
  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    const randomVikingStatus = randomViking.receiveDamage(randomSaxon.attack())
    console.log(randomVikingStatus)
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)
    }
    return randomVikingStatus;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!'
    if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...'
    if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) return 'Vikings and Saxons are still in the thick of battle.'
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
