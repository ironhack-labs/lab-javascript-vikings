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
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health !== 0) {
      return `${name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${name} has died in act of combat`;
    }

  }

  battleCry() {
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health !== 0) {
      return `A Saxon has received ${damage} points of damage`;

    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }

  }
}


// War
class War {

  constructor() {
    let arr1 = [];
    let arr2 = [];
    this.vikingArmy = arr1;
    this.saxonArmy = arr2;
    this.Saxon = new Saxon();
    this.Viking = new Viking();
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    // return this.Saxon.receiveDamage(this.Viking.strength);
  }

  saxonAttack() { }

  showStatus() { }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
