// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
  }

  attack() {
    return this.soldier.strength;
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
}

// Saxon
class Saxon {}

// War
class War {}
