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
    super(health, strength);
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
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
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
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let num1 = Math.floor(Math.random() * this.saxonArmy.length);
    let num2 = Math.floor(Math.random() * this.vikingArmy.length);
    let attack = this.saxonArmy[num1].receiveDamage(
      this.vikingArmy[num2].strength
    );
    if (this.saxonArmy[num1].health <= 0) {
      this.saxonArmy.splice(num1);
    }
    return attack;
  }
  saxonAttack() {
    let num1 = Math.floor(Math.random() * this.vikingArmy.length);
    let num2 = Math.floor(Math.random() * this.saxonArmy.length);
    let attack = this.vikingArmy[num1].receiveDamage(
      this.saxonArmy[num2].strength
    );
    if (this.vikingArmy[num1].health <= 0) {
      this.vikingArmy.splice(num1);
    }
    return attack;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
