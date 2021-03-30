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
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
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
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : "A Saxon has died in combat";
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

  vikingAttack() {}

  saxonAttack() {}

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `${Vikings} have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `${this.Saxons} have fought for their lives and survived another day...`;
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
