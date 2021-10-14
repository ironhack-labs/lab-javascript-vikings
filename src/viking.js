// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength
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
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 1 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 1 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
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
    const aViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    const aSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    
    const saxonStatus = aSaxon.receiveDamage(aViking.strength);

    this.saxonArmy.forEach((saxon, index) => {
      if (saxon.health < 1) this.saxonArmy.splice(index, 1);
    });

    return saxonStatus;
  }
  saxonAttack() {
    const aViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    const aSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];

    const vickingStatus = aViking.receiveDamage(aSaxon.strength);

    this.vikingArmy.forEach((viking, index) => {
      if (viking.health < 1) this.vikingArmy.splice(index, 1);
    });

    return vickingStatus;

  }
  showStatus() {

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
