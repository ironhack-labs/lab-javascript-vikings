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

  //we need to re-implement this method because we need to have differents returns values.
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
}

// Saxon
class Saxon extends Soldier {
  //This method needs to be re-implemented, because in Saxon return differents values
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    //Choosen a random Viking and Saxon
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    //The parameter of the function must be the vikins's strength
    const result = saxon.receiveDamage(viking.strength);

    //Now I need to remove the deads of the saxonArmy array
    this.saxonArmy = this.saxonArmy.filter(function (saxon) {
      return saxon.health > 0;
    });

    return result;
  }

  saxonAttack() {
    //Choosen a random Viking and Saxon
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    //The parameter of the function must be the saxon's strength
    const result = viking.receiveDamage(saxon.strength);

    //Now I need to remove the deads of the saxonArmy array
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
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
