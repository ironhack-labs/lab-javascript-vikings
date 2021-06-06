// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
// attack method
attack () {
return this.strength
}

//damage received method
receiveDamage (theDamage) {
this.health -= theDamage
}

}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  //battle cry method
battleCry() {
  return "Odin Owns You All!"
}
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength, name) {
    super(name, health, strength);
    this.health = health;
    this.strength = strength;
}
receiveDamage(theDamage) {
  this.health -= theDamage
  if (this.health > 0) {
    return `A Saxon has received ${theDamage} points of damage`
  } else {
    return `A Saxon has died in combat`;
  }
}
}

// War
class War {
constructor() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
  addViking(newViking) {
    this.vikingArmy.unshift(newViking)
  }
  addSaxon(newSaxon) {
    this.saxonArmy.unshift(newSaxon);
  }
  vikingAttack(){

  }
  saxonAttack(){}
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


// how to create a class in another class