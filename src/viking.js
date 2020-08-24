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
    return;
  }
}

// Viking
class Viking {}
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    const alive = `${this.name} has received ${damage} points of damage`;
    const dead = `${this.name} has died in act of combat`;
    return this.health > 0 ? alive : dead;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon {}
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    const alive = `A Saxon has received ${damage} points of damage`;
    const dead = `A Saxon has died in combat`;
    return this.health > 0 ? alive : dead;
  }
}

// War
