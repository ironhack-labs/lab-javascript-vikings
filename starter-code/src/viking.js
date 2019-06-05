// Soldier
class Soldier {
  constructor(health,strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
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
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {  
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {  
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let i = Math.floor(Math.random()*this.saxonArmy.length);
    let currentSaxon = this.saxonArmy[i];
    let currentViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    this.saxonArmy.splice(i, 1);
    return currentSaxon.receiveDamage(currentViking.strength)
  }
  saxonAttack() {
    let j = Math.floor(Math.random()*this.vikingArmy.length);
    let currentViking = this.vikingArmy[j];
    let currentSaxon = this.saxonArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    this.vikingArmy.splice(j, 1);
    return currentViking.receiveDamage(currentSaxon.strength)
  }
  showStatus() {
    if (!this.saxonArmy) {
      return "Vikings have won the war of the century!"
    };
    if (!this.vikingArmy) {
      return "Saxons have fought for their lives and survive another day..."
    };
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >=1) {
      return "Vikings and Saxons are still in the thick of battle."
    };
  }
}