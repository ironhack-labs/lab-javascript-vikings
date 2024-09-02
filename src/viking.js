// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
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

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else if(this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else if(this.health <= 0) {
      return `A Saxon has died in combat`
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
    let recibido

    for (let i = 0; i < this.saxonArmy.length; i++) {
      for (let j= 0; j < this.vikingArmy.length; j++ ) {
        recibido = this.saxonArmy[i].receiveDamage(this.vikingArmy[j].strength)

        if (this.saxonArmy[i].health <= 0) {
          this.saxonArmy.shift(this.saxonArmy[i])
        }
      }
      return recibido
    }
  }

  saxonAttack() {
    let recibido

    for (let i = 0; i < this.vikingArmy.length; i++) {
      for (let j= 0; j < this.saxonArmy.length; j++ ) {
        recibido = this.vikingArmy[i].receiveDamage(this.saxonArmy[j].strength)

        if (this.vikingArmy[i].health <= 0) {
          this.vikingArmy.shift(this.vikingArmy[i])
        }
      }
      return recibido
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
