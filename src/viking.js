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
  constructor(vikingName, health, strenght) {
    super(health, strenght);
    this.name = vikingName;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      let messageAlive = `${this.name} has received ${damage} points of damage`;
      return messageAlive;
    } else {
      let messageDead = `${this.name} has died in act of combat`;
      return messageDead;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strenght) {
    super(health, strenght);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      let messageAlive = `A Saxon has received ${damage} points of damage`;
      return messageAlive;
    } else {
      let messageDead = `A Saxon has died in combat`;
      return messageDead;
    }
  }
}

// War
