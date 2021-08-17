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
    this.health = this.health -damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  //Bonus
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    // choose random saxon
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const result = saxon.receiveDamage(viking.strength)
    this.saxonArmy = this.saxonArmy.filter(function (saxon) {
      return saxon.health > 0
    });
    return result
  }
  saxonAttack() {
    // choose random saxon
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const result = viking.receiveDamage(saxon.strength)
    this.vikingArmy = this.vikingArmy.filter(function (viking) {
      return viking.health > 0
    });
    return result
  }
  //Super Bonus
  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length !== 0) {
      return "Vikings have won the war of the century!"
    }
    if (this.vikingArmy.length === 0 && this.saxonArmy.length !== 0) {
      return "Saxons have fought for their lives and survived another day..."
    }
    if (this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0) {
      return "Vikings and Saxons are still in the thick of battle."
    } 
    
  }
  }




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
