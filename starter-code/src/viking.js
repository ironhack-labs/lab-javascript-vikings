// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damageArg) {
    this.health -= damageArg;
  }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}