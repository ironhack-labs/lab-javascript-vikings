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
    //     if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
    // if the Viking dies, it should return "NAME has died in act of combat"

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }

    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon {}

// War
class War {}
