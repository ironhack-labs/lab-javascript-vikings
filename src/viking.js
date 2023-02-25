// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.damage;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    damage;
    this.health = this.health - damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super("viking");
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    damage;
    this.health = this.health - damage;
    if (this.health <= 0) {
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
class Saxon extends Soldier {
  receiveDamage(damage) {
    damage;
    this.health = this.health - damage;
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy = this.vikingArmy + viking;
  }
  addSaxon(saxon){

  }
    
}
