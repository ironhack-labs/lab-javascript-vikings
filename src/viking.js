// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health,strength);

    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage

    if (this.health <= 0 ) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage

    if (this.health <= 0 ) {
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {

  constructor() {

    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    let saxonRandom = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))];
    let vikingRandom = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))];

    // for (let i = 0; i < this.saxonArmy.length; i++) {

    //   if (this.saxonArmy[i].health <= 0) {

    //     this.saxonArmy.splice(i,1);
    //   }
    // }
    return saxonRandom.receiveDamage(vikingRandom.strength)
  }

  saxonAttack() {
    let saxonRandom = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))];
    let vikingRandom = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))];

    // for (let i = 0; i < this.saxonArmy.length; i++) {

    //   if (this.saxonArmy[i].health <= 0) {

    //     this.saxonArmy.splice(i,1);
    //   }
    // }
    return vikingRandom.receiveDamage(saxonRandom.strength)
  }

  showStatus() {

    if ((this.vikingArmy.length > 0) && (this.saxonArmy.length > 0)) {
      return `Vikings and Saxons are still in the thick of battle.`
    } else if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`;
    }
  }
  
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
