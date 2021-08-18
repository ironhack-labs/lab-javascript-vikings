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

    this.name = name;


  }


  receiveDamage(damage) {
    this.health -= damage

    if (this.health > 0) {

      return `${this.name} has received ${damage} points of damage`

    } else if (this.health === 0) {

      return `${this.name} has died in act of combat`
    }

  };

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
    } else if (this.health === 0) {
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


  addViking(obj) {

    // obj = new Viking('Hands', 100, 70)
    this.vikingArmy.push(obj)

  }
  addSaxon(obj) {

    this.saxonArmy.push(obj)

  }



  vikingAttack() {

    const randomSax = Math.floor(Math.random() * this.saxonArmy.length)
    const randomVik = Math.floor(Math.random() * this.vikingArmy.length)

    this.saxonArmy[randomSax].receiveDamage(this.vikingArmy[randomVik].strength)
    for (let soldier of this.saxonArmy) {
      if (soldier.health === 0) {
        soldier.pop()
      }

    }

    return res

  }

  saxonAttack() {}
  showStatus() {}

}

console.log('hello')

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
