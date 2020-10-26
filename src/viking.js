//Initial Pull Request

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
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
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
    this.vikingArmy.push(viking);
  }
  addSaxon(SaxonAdd) {
    this.saxonArmy.push(SaxonAdd);
  }
  vikingAttack() {
    const saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonAttacked = this.saxonArmy[saxonRandom];
    const vikingAttacking = this.vikingArmy[vikingRandom];
    const attackViking = saxonAttacked.receiveDamage(vikingAttacking.strength);
    if (saxonAttacked.health <= 0) {
      this.saxonArmy.splice(saxonRandom, 1);
    }
    return attackViking;
  }
  saxonAttack() {
    const saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonAttacking = this.saxonArmy[saxonRandom];
    const vikingAttacked = this.vikingArmy[vikingRandom];
    const attackSaxon = vikingAttacked.receiveDamage(saxonAttacking.strength);
    if (vikingAttacked.health <= 0) {
      this.vikingArmy.splice(vikingRandom, 1);
    }
    return attackSaxon;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}

/*
Modify the `Soldier` class and add 2 methods to it: `attack()`, and `receiveDamage()`.
*/
