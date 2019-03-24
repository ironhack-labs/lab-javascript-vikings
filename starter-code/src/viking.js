// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength;
  }

  receiveDamage (damage) {
    this.health -=  damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -=  damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
      return `${this.name} has died in act of combat`; 
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super (health, strength);
  }

  receiveDamage(damage) {
    this.health -=  damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
      return `A Saxon has died in combat`;
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
    console.log('estoy dentro viking attack');
    var saxon = new Saxon(40,40);
    var viking = new Viking('',20,40);

    var oldHealth = saxon[0].health;
    saxon.health = oldHealth - viking.strength;
    
    
  }
  saxonAttack() {

  }
  showStatus() {

  }
}
