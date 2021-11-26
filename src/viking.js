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
  };

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };

  battleCry() {
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  };

  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  };

  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

    let attack = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      let saxonIndex = this.saxonArmy.indexOf(randomSaxon);
      this.saxonArmy.splice(saxonIndex, 1);
    };

    return attack;
  };

  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];

    let attack = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      let vikingIndex = this.vikingArmy.indexOf(randomViking);
      this.vikingArmy.splice(vikingIndex, 1);
    };

    return attack;
  };

  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length !== 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0 && this.saxonArmy.length !== 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    };
  };
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
