
// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
  }

  attack() {
    return this.strength
  }

  receiveDamage(dmg) {
    this.health -= dmg
  }

}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {

    this.health -= dmg
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!!!`
  }

}


// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg)
  }
  receiveDamage(dmg) {
    this.health -= dmg
    if (this.health > 0) {
      return 'Saxon has received ${dmg} points of damage'
    } else {
      return 'Saxon has died in combat'
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    // console.log(viking.strength)
    // const damage = vikingArmy[0].strength
    // saxonArmy[0].receiveDamage(damage)
  }
  saxonAttack() {

  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
