// Soldier
class Soldier {
  constructor(healtArg, strengthArg) {
    this.health = healtArg
    this.strength = strengthArg
  }
  attack() {
    return this.strength
  }
  receiveDamage(damageArg) {
    this.health -= damageArg
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, healthArg, strengthArg) {
    super(healthArg, strengthArg)
    this.name = name
    
  }
  receiveDamage(damage) {
    this.health -= damage
    return this.health >= 1 ? `${this.name} has received ${damage} points of damage` :
      `${this.name} has died in act of combat`
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg)
  }
  receiveDamage(damage) {
    this.health -= damage
    return this.health >= 1 ? `A Saxon has received ${damage} points of damage` :
      `A Saxon has died in combat`
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj)
  }

  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj)
  }

  _randomViking() {
    return this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  }

  _randomSaxon() {
    return this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
  }

  vikingAttack() {
    const randomSaxon = this._randomSaxon()
    const randomViking = this._randomViking()
    const attack = randomSaxon.receiveDamage(randomViking.attack())
    if (randomSaxon.health < 1) {
      this.saxonArmy = this.saxonArmy.filter(saxon => saxon !== randomSaxon)
    }
    return attack
  }

  saxonAttack() {
    const randomSaxon = this._randomSaxon()
    const randomViking = this._randomViking()
    const attack = randomViking.receiveDamage(randomSaxon.attack())
    if (randomViking.health < 1) {
      this.vikingArmy = this.vikingArmy.filter(viking => viking !== randomViking)
    }
    return attack
  }

  showStatus() {
    const saxonArmy = this.saxonArmy.length
    const vikingArmy = this.vikingArmy.length

    return (saxonArmy >= 1 && vikingArmy >= 1) ?
      `Vikings and Saxons are still in the thick of battle.` :
        saxonArmy === 0 ?
          `Vikings have won the war of the century!` :
            `Saxons have fought for their lives and survive another day...`
  }
}
