// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength = Soldier;
  }
  recieveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  } 
  attack() {
    return this.strength = Viking;
  }
  recieveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  recieveDamage(damage) {
    super.recieveDamage(damage);
    if(this.health > 0) {
      return `a Saxon has recieved ${damage} points of damage`
    } else {
      return `a Saxon has died in combat`
    }
  }
}


// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking){
  this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
  this.saxonArmy.push(Saxon);
  }
vikingAttack() {
  const saxon = this.saxonArmy;
  }
saxonAttack() {
  const viking = this.vikingArmy;
  } 
  showStatus() {

  } 
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
