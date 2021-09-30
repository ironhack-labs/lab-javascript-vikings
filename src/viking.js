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
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  // call parent class to create the object
  constructor (name, health, strength) {
    super (health, strength); // pass the parent class the arguments
    this.name = name; // assign the new attribute
  }

  receiveDamage (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry () {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor () { // 0 arguments
    // arrays to store the viking and saxon objects created
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking (vikingObject) {
    // add the viking object to the array of vikings
    this.vikingArmy.push(vikingObject);
  }

  addSaxon (saxonObject) {
    // add the saxon object to the array of vikings
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack () {
    // select a random saxon/viking object based on a random index of the array
    const saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const vikingRandom= this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // random saxon receives damage, based on saxon strength
    const saxonDamage = saxonRandom.receiveDamage(vikingRandom.strength);

    // filter --> remove dead saxons from saxon army --> filter health > 0
    // reassign to this.saxonArmy
    this.saxonArmy = this.saxonArmy.filter( item => item.health > 0 );

    // return result of calling receive damage
    return saxonDamage;
  }

  saxonAttack () {
    // select a random saxon/viking object based on a random index of the array
    const saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)] 
    
    // random viking receives damage, based on saxon strength
    const vikingDamage = vikingRandom.receiveDamage(saxonRandom.strength);
    
    // filter --> remove dead vikings from viking army --> filter health > 0
    // reassing the new array to the viking army
    this.vikingArmy = this.vikingArmy.filter( item => item.health > 0 );

    // return result of calling receive damage
    return vikingDamage;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
