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
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = "Harald";
    this.strength = 150;
    this.health = 300;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    // console.log("damage", damage);
    this.health -= damage;
    // console.log("health", this.health);
    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon

// attack() method
// (This method should be inherited from Soldier, no need to re-implement it.)

// should be a function
// should receive 0 arguments
// should return the strength property of the Saxon
// receiveDamage() method

// (This method needs to be re-implemented for Saxon because the Saxon version needs to have different return values.)

// should be a function
// should receive 1 argument (the damage)
// should remove the received damage from the health property
// if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
// if the Saxon dies, it should return "A Saxon has died in combat"
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {}
