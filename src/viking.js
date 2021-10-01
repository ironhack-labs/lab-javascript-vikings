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
    return this.health > 0 
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry () {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage (damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
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

  attack (warrior) {
    // console.log(warrior)
    // console.log(warrior instanceof Viking)
    // console.log(warrior instanceof Saxon)
    // select a random saxon/viking object based on a random index of the array
    const saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const vikingRandom= this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // check if the object is instanceof Viking or Saxon
    if(warrior instanceof Viking) {
      const saxonDamage = saxonRandom.receiveDamage(vikingRandom.strength);

      // filter --> remove dead saxons from saxon army --> filter health > 0
      // reassign to this.saxonArmy
      this.saxonArmy = this.saxonArmy.filter( item => item.health > 0 );
  
      // return result of calling receive damage
      return saxonDamage;
    } else if( warrior instanceof Saxon) {
      // random viking receives damage, based on saxon strength
      const vikingDamage = vikingRandom.receiveDamage(saxonRandom.strength);
      
      // filter --> remove dead vikings from viking army --> filter health > 0
      // reassing the new array to the viking army
      this.vikingArmy = this.vikingArmy.filter( item => item.health > 0 );

      // return result of calling receive damage
      return vikingDamage;
    }
  }

  vikingAttack () {
    // find the first alive warrior instance of viking
    const vikingWarrior = this.vikingArmy.find( item => item.health > 0);
    return this.attack(vikingWarrior);
    
    // // select a random saxon/viking object based on a random index of the array
    // const saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // const vikingRandom= this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // // random saxon receives damage, based on saxon strength
    // const saxonDamage = saxonRandom.receiveDamage(vikingRandom.strength);

    // // filter --> remove dead saxons from saxon army --> filter health > 0
    // // reassign to this.saxonArmy
    // this.saxonArmy = this.saxonArmy.filter( item => item.health > 0 );

    // // return result of calling receive damage
    // return saxonDamage;
  }

  saxonAttack () {
    // find the first alive warrior instance of viking
    const saxonWarrior = this.saxonArmy.find( item => item.health > 0);
    return this.attack(saxonWarrior);
    // // select a random saxon/viking object based on a random index of the array
    // const saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // const vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)] 
    
    // // random viking receives damage, based on saxon strength
    // const vikingDamage = vikingRandom.receiveDamage(saxonRandom.strength);
    
    // // filter --> remove dead vikings from viking army --> filter health > 0
    // // reassing the new array to the viking army
    // this.vikingArmy = this.vikingArmy.filter( item => item.health > 0 );

    // // return result of calling receive damage
    // return vikingDamage;
  }

  showStatus () {
    return this.saxonArmy.length === 0 ? `Vikings have won the war of the century!`
      : this.vikingArmy.length  === 0 ? `Saxons have fought for their lives and survived another day...`
      : this.vikingArmy.length  >= 1 && this.saxonArmy.length >= 1 ? `Vikings and Saxons are still in the thick of battle.`
      : `Ups!!! Somehing wrong!`
    }

    // showStatus () {
    //   if (this.saxonArmy.length === 0) {
    //     return `Vikings have won the war of the century!`;
    //   } else if (this.vikingArmy.length  === 0) {
    //     return `Saxons have fought for their lives and survived another day...`;
    //   } else if (this.vikingArmy.length  >= 1 && this.saxonArmy.length >= 1) {
    //     return `Vikings and Saxons are still in the thick of battle.`;
    //   }
    // }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
