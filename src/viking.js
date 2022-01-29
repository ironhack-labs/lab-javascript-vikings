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
    this.health = parseInt(this.health - damage);
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = parseInt(this.health - damage);

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
 
  receiveDamage(damage) {
    this.health = parseInt(this.health - damage);

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War 

// INCOMPLETE ITERATION
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
    const randomSaxonPosition = this.getRandomSoldier(0, this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonPosition];

    const randomVikingPosition = this.getRandomSoldier(
      0,
      this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randomVikingPosition];
    
    const response = randomSaxon.receiveDamage(randomViking);
    
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonPosition, 1);
    }

    return response;
  }

  saxonAttack() {
    const randomSaxonPosition = this.getRandomSoldier(0, this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonPosition];

    const randomVikingPosition = this.getRandomSoldier(
      0,
      this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randomVikingPosition];

    const response = randomViking.receiveDamage(randomSaxon);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingPosition, 1);
    }

    return response;
  }

  getRandomSoldier(min = 0, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
