////////////////////////////////////////////////////////// Soldier
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
};

/////////////////////////////////////////////////////////////////// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
};

/////////////////////////////////////////////////////////////////////////// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A saxon has Received ${theDamage} points of damage`;

    } else {
      return `A saxon has died in COMBAT`;
    }
  }
};

////////////////////////////////////////////////////////////////////////////// War
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

    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const result = saxon.receiveDamage(viking.strength);

    this.saxonArmy = this.saxonArmy.filter(function (saxon) {
      return saxon.health > 0;
    });

    return result;
  }

  saxonAttack() {
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const result = viking.receiveDamage(saxon.strength);

    this.vikingArmy = this.vikingArmy.filter(function (viking) {
      return viking.health > 0;
    });

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
};

//////////////////////////////////////////// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
