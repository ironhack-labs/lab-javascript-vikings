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
    super( health, strength);
    this.name = name;
  }

  receiveDamage() {
    super.receiveDamage(damage);
    console.log(`${(this.name)} has received ${this.damage} points of damage`);
  }

}

// Saxon
class Saxon {}

// War
class War {}
