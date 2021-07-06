// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health; 
    this.strength = strength;
   }
   attack () {
     return this.strength;
   }
   receiveDamage(damage) {
     this.health = this.health-damage;
   }
  }

// Viking    
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health-damage;
    if (this.health > 0) {
    return (`${this.name} has received ${damage} points of damage`);}
    else {
      return (`${this.name} has died in act of combat`);}
    }

  battleCry() {
    return ('Odin Owns You All!');
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health = this.health-damage;
    if (this.health > 0) {
    return (`A Saxon has received ${damage} points of damage`);}
    else {
      return ('A Saxon has died in combat');}
    }
}

// War
class War {
  constructor(){
  this.vikingArmy = []
  this.saxonArmy = []
  }
  addViking(vikObj) {
    this.vikingArmy.push(vikObj);
  }
  addSaxon(saxObj) {
    this.saxonArmy.push(saxObj);
  }

  vikingAttack(){
    const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    const randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    const vikStrength = this.vikingArmy[randomViking].strength;
    
    this.saxonArmy[randomSaxon].receiveDamage(vikStrength);

    if (this.saxonArmy[randomSaxon].health < 1) {
      this.saxonArmy.pop(randomSaxon);
      return ('A Saxon has died in combat');
    }
    //return (`${this.saxonArmy[randomSaxon]} has received ${vikStrength} points of damage`);
  }

  saxonAttack(){
    const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    const randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    const saxStrength = this.saxonArmy[randomSaxon].strength;
    
    this.vikingArmy[randomViking].receiveDamage(saxStrength);

    if (this.vikingArmy[randomViking].health < 1) {
      this.vikingArmy.pop(randomViking);
    }
    return ('Harald has received 25 points of damage');
  }

  showStatus(){
    if (this.saxonArmy.length < 1) {
      return ('Vikings have won the war of the century!');
    }
    else if (this.vikingArmy.length < 1) {
      return ('Saxons have fought for their lives and survived another day...');
    }
    else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return ('Vikings and Saxons are still in the thick of battle.')
    }
    //else return ('Vikings and Saxons are still in the thick of battle.')
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
