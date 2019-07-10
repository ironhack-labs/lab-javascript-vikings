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
    this.health = this.health - damage;
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
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(object) {
    this.vikingArmy.push(object);
  }
  addSaxon(object) {
    this.saxonArmy.push(object);
  }
  vikingAttack() {
    this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
    if (this.saxonArmy[0].health < 0) {
      this.saxonArmy.shift();
      return "A Saxon has died in combat";
    } else {
      `A Saxon has received ${this.vikingArmy[0].strength} points of damage`;
    }
  }
  saxonAttack() {
    this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.shift();
    } else {
      return `${this.vikingArmy[0].name} has received ${
        this.saxonArmy[0].strength
      } points of damage`;
    }
  }
  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length <= 0) {
      return `Saxons have fought for their lives and survive another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
