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
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damageArg) {
    this.health -= damageArg;
    if (this.health > 0) {
      return `${this.name} has received ${damageArg} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    };
  };
  battleCry() {
    return `Odin Owns You All!`;
  }
};

// Saxon
class Saxon {}

// War
class War {}