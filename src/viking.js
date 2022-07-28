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

  attack() {
    return this.strength
  }

  strength() {
   if (this.receiveDamage(i)) { 
    return (`${this.name} has received `)
  }
}

// Saxon
class Saxon {}

// War
class War {}
