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
    // this.damage = damage;
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    super.attack();
    return this.strength;
  }
  receiveDamage(damage) {
    this.damage = damage;
    this.health = this.health - this.damage;
    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
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
  attack() {
    super.attack();
    return this.strength;
  }
  receiveDamage(damage) {
    this.damage = damage;
    this.health = this.health - this.damage;
    this.health > 0;
    if (this.health > 0)
      return `A Saxon has received ${this.damage} points of damage`;
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let saxon = Math.floor(Math.random() * saxonArmy);
    this.saxonArmy[saxon];
    receiveDamage(atack());
    return;
  }

  saxonAttack() {}
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
