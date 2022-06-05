// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    // Assigning the health to a variable
    let live = this.health;
    live -= theDamage;
    // Assuming the threshold zero for the conditional
    if (live <= 0) {
      return `${this.name} has died in act of combat`;
    } else if (live > 0) {
      // Have to return this.health status for the next iteration
      this.health = this.health - theDamage;
      return `${this.name} has received ${theDamage} points of damage`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    let live = this.health;
    live -= theDamage;
    // Assuming the threshold zero for the conditional
    if (live <= 0) {
      return `A Saxon has died in combat`;
    } else if (live > 0) {
      // Have to return this.health status for the next iteration
      this.health = this.health - theDamage;
      return `A Saxon has received ${theDamage} points of damage`;
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
    // Selects a random saxon and a position and assigns it to a variable
    let saxonRandomPosition = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonRandom = this.saxonArmy[saxonRandomPosition];
    // Selects a random viking and assigns it to a variable
    let vikingRandomPosition = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    let vikingRandom = this.saxonArmy[vikingRandomPosition];
    // If the health of this random saxon is then less or equal to zero
    // It makes a copy of the object and it returns the array without the index of the defeated soldier
    if (saxonRandom.live <= 0) {
      this.saxonArmy.splice(this.saxonRandomPosition, 1);
    } else {
      // Retrieves the method receive damage, passes the vikingRandom.strength as the argument
      // And applies it to the health of the randomSaxon
      return saxonRandom.receiveDamage(vikingRandom.strength);
    }
  }

  saxonAttack() {}
  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
