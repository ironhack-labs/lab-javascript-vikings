// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
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
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    //adds a random saxon the damage equals a random viking and keep the return from .receiveDamage in result -start
    const result = this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );
    //adds a random saxon the damage equals a random viking and keep the return from .receiveDamage in result - end
    //removes dead saxons - start
    this.saxonArmy.forEach((saxon, index) => {
      if (saxon.health <= 0) {
        this.saxonArmy.splice(index, 1);
      }
    }); //removes dead saxons - end
    return result;
  }

  saxonAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const result = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );
    this.vikingArmy.forEach((viking, index) => {
      if (viking.health <= 0) {
        this.vikingArmy.splice(index, 1);
      }
    });
    return result;
  }

  //GENERIC METHOD
  attack(attacked) {
    if (typeof attacked !== 'string') {
      return 'You should attack Saxons or Vikings!';
    }
    let attackedArmy;
    let armyAttacking;

    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    let firstRandom;
    let secondRandom;

    if (attacked.match(/.*viking.*/gi)) {
      attackedArmy = 'vikingArmy';
      armyAttacking = 'saxonArmy';
      firstRandom = randomViking;
      secondRandom = randomSaxon;
    } else if (attacked.match(/.*saxon.*/gi)) {
      attackedArmy = 'saxonArmy';
      armyAttacking = 'vikingArmy';
      firstRandom = randomSaxon;
      secondRandom = randomViking;
    } else {
      return 'Invalid Army!';
    }

    const result = this[attackedArmy][firstRandom].receiveDamage(
      this[armyAttacking][secondRandom].strength
    );

    this[attackedArmy].forEach((soldier, index) => {
      if (soldier.health <= 0) {
        this[attackedArmy].splice(index, 1);
      }
    });
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
