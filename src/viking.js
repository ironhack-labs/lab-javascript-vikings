// Soldier
// iteration 0
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  atack() {
    return this.strength;
  }

  receiveDamage(damage) {
    console.log(this.health - receiveDamage);
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  atack() {
    return this.strength;
  }

  receiveDamage(damage) {
    console.log(this.health - receiveDamage);
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  atack() {
    return this.strength;
  }

  receiveDamage(damage) {
    console.log(this.health - receiveDamage);
  }
}

// War
class War {}
