// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (damage) => {
    this.health -= damage;
  };
}

// Viking
class Viking {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (damage) => {
    this.health -= damage;
    switch (this.health > 0) {
      case true:
        return `${this.name} has received ${damage} points of damage`;
      default:
        return `${this.name} has died in act of combat`;
    }
  };
}

// Saxon
class Saxon {}

// War
class War {}
