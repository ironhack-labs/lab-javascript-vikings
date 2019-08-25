// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
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
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
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
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// War
class War {
  constructor() {
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
    let saxonAttacked = randomInt(0, this.saxonArmy.length);
    let vikingAttacker = randomInt(0, this.vikingArmy.length);
    this.saxonArmy[saxonAttacked].receiveDamage(this.vikingArmy[vikingAttacker].strength);
    if (saxonAttacked.health < 0) {
      this.saxonArmy.slice(saxonAttacked, 1);
    }
  }
  // saxonAttack() {
  //   this.vikingArmy[randomInt(0, this.vikingArmy.length)].

  // }
}
