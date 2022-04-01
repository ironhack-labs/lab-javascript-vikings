// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;
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
  constructor(name, vikingHealth, vikingStrength) {
    super(vikingHealth, vikingStrength)
    this.name = name
  }

  battleCry() {
    return ("Odin Owns You All!")
  }

  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return (`${this.name} has received ${this.health} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`)
    }
  }
}

const viking = new Viking('Harald', 300, 150)
viking.battleCry()
viking.attack()
viking.receiveDamage()

// Saxon
class Saxon extends Soldier {
  constructor(saxonHealth, saxonStrength) {
    super(saxonHealth, saxonStrength)
  }

  battleCry() {
    console.log("Odin Owns You All!")
  }

  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return (`A Saxon has received ${this.health} points of damage`)
    } else {
      return ("A Saxon has died in act of combat")
    }

  }
}

const saxon = new Saxon(60, 25)
saxon.battleCry()
saxon.attack()
saxon.receiveDamage()

// War
class War {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
