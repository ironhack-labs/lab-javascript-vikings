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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    
      
}}}
// Viking
class Viking {constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }  battle() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon {}

// War
class War {constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
}
