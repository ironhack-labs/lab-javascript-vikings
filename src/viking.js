// Soldier
class Soldier {

  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };
  
  attack() {
    return this.strength;
  };

  receiveDamage(receivedDamage) {
    this.health = this.health - receivedDamage;
  };
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super (health, strength)
    this.name = name;
  };

  receiveDamage(receivedDamage) {
    this.health = this.health - receivedDamage;
    if (this.health > 0) {
      return `${this.name} has received ${receivedDamage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  };

  battleCry() {
    return `Odin Owns You All!`
  };
}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength) {
    super(health,strength);
  };

  receiveDamage(receivedDamage) {
    this.health = this.health - receivedDamage;
    if (this.health > 0) {
      return `A Saxon has received ${receivedDamage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  };
}

// War
class War {

  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  };

  addViking(aViking) {
    this.vikingArmy.push(aViking)
  };

  addSaxon(aSaxon) {
    this.saxonArmy.push(aSaxon)
  };

  vikingAttack() {
    const oneRandomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const oneRandomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; 
    const result = oneRandomSaxon.receiveDamage(oneRandomViking.strength);
   
    this.saxonArmy = this.saxonArmy.filter(function (aSaxon) {
      return aSaxon.health > 0
    })
    return result;
  };

  saxonAttack() {
    const oneRandomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const oneRandomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; 
    const result = oneRandomViking.receiveDamage(oneRandomSaxon.strength);
   
    this.vikingArmy = this.vikingArmy.filter(function (aViking) {
      return aViking.health > 0
    });
    return result
  };

  showStatus() {

    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }

  };
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
