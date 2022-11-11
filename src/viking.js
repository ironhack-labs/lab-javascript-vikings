// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
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

  receiveDamage(theDamage) {
    this.health -= theDamage;
    return this.health > 0
      ? `${this.name} has received ${theDamage} points of damage`
      : `${this.name} has died in act of combat`;
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

  receiveDamage(theDamage) {
    this.health -= theDamage;
    return this.health > 0
      ? `A Saxon has received ${theDamage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {}
