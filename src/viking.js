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
    this.health -= theDamage;
    // Assuming the threshold zero for the conditional
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else if (this.health > 0) {
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
  receiveDamage(theDamage) {
    this.health -= theDamage;
    // Assuming the threshold zero for the conditional
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else if (this.health > 0) {
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
    // Selects a random saxon, from the array of saxons
    let saxonRandom =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // Selects a random viking from the array of vikings
    let vikingRandom =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // Creating a variable that stores the received damage and stores it as saxon health
    let saxonRandomHealth = saxonRandom.receiveDamage(vikingRandom.attack());
    // If the health of this random saxon is then less or equal to zero
    if (saxonRandom.health <= 0) {
      this.saxonArmy.splice(
        this.saxonArmy.indexOf(saxonRandom),
        this.saxonArmy.indexOf(saxonRandom) + 1
      );
    }
    return saxonRandomHealth;
  }

  saxonAttack() {
    // Selects a random saxon, from the array of saxons
    let saxonRandom =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // Selects a random viking from the arrat of vikings
    let vikingRandom =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // Creating a variable that stores the received damage and stores it as viking health
    let vikingRandomHealth = vikingRandom.receiveDamage(saxonRandom.attack());
    // If the health of this random saxon is then less or equal to zero
    if (vikingRandom.health <= 0) {
      this.vikingArmy.splice(
        this.vikingArmy.indexOf(vikingRandom),
        this.vikingArmy.indexOf(vikingRandom) + 1
      );
    }
    return vikingRandomHealth;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length <= 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length >= 1 || this.vikingArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
