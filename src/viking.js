// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
  }
  attack() {
    return 150;
  }
  receiveDamage(damage) {
    this.health = 250;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = "Harald";
  }
  receiveDamage(damage) {
    if (this.health > 0) {
      this.health = 250;
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      this.health = 0;
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon {}

// War
class War {}
