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

    if (this.health > 0) {

      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }

  }
  battleCry() {
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)

  } receiveDamage(damage) {

    this.health -= damage;

    if (this.health > 0) {

      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}



// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    const i = Math.floor(Math.random() * this.saxonArmy.length);
    if (this.saxonArmy[i].health - this.vikingArmy[0].strength <= 0) {
      this.saxonArmy.splice(i, 1)
    }
    return this.saxonArmy[i].receiveDamage(this.vikingArmy[0].strength)
  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
