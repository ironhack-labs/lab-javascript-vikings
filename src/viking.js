// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {}
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    return `${this.name} has received ${damage} points of damage`;
    this.health -= 1;
    
  }

  dies(died) {
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    return `"A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {}
