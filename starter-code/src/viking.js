// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      console.log(`${this.name} has received `)
    } else {
      console.log(`${this.name} has died in an act of combat`)
    }

  }

  battleCry() {

  }
}

// Saxon
class Saxon { }

// War
class War { }
