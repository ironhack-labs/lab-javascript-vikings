// Soldier

// class

// should receive 2 arguments (health & strength)
// should receive the health property as its 1st argument
// should receive the strength property as its 2nd argument

// attack() method
// should be a function
// should receive 0 arguments
// should return the strength property of the Soldier

// receiveDamage() method
// should be a function
// should receive 1 argument (the damage)
// should remove the received damage from the health property
// shouldn't return anything

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
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
