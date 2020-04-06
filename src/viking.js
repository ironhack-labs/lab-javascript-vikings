"use strict";
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
    return `${this.name} has died in act of combat`;
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
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// Bonus War
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
    return this.armyAttack(this.vikingArmy[0], this.saxonArmy[0]);
  }
  saxonAttack() {
    return this.armyAttack(this.saxonArmy[0], this.vikingArmy[0]);
  }
  armyAttack(attack, defense) {
    let message = defense.receiveDamage(attack.strength);

    defense instanceof Viking
      ? (this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0))
      : (this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0));
    return message;
  }
  // Super Bonus Status
  
  showStatus() {
    let status =
      this.saxonArmy.length === 0
        ? "Vikings have won the war of the century!"
        : this.vikingArmy.length === 0
        ? "Saxons have fought for their lives and survived another day..."
        : "Vikings and Saxons are still in the thick of battle.";

    return status;
  }
}