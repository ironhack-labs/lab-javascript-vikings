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
    if (this.health <= damage) {
      this.health = 0;
    } else {
      this.health -= damage;
    }
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
  // constructor(health, strength){
  //   super(health, strength)
  // }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
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

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    //Select random viking to attack and random saxon to receive damage
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const viking = this.vikingArmy[vikingIndex];
    const saxon = this.saxonArmy[saxonIndex];

    const attackOutcome = saxon.receiveDamage(viking.attack());

    if (viking.strength > saxon.health) {
      this.saxonArmy.splice(saxonIndex, 1);
    }

    return attackOutcome;
  }

  saxonAttack() {
    //Select random viking to attack and random saxon to receive damage
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const viking = this.vikingArmy[vikingIndex];
    const saxon = this.saxonArmy[saxonIndex];

    const attackOutcome = viking.receiveDamage(saxon.attack());

    if (saxon.strength > viking.health) {
      this.vikingArmy.splice(vikingIndex, 1);
    }

    return attackOutcome;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }

  //Bonus attack function from iteration 5
  attack() {
    //Instead of having viking attack or saxon attack call an attack function we can have a single function that does both
    //choosing attacking army via user input

    //Select the attacker
    const attacker = prompt(
      'Choose the attacker (viking or saxon'
    ).toLowerCase();

    //Select random viking to attack and random saxon to receive damage
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const viking = this.vikingArmy[vikingIndex];
    const saxon = this.saxonArmy[saxonIndex];

    if (attacker === 'viking') {
      const attackOutcome = saxon.receiveDamage(viking.attack());
    } else if (attacker === 'saxon') {
      const attackOutcome = viking.receiveDamage(saxon.attack());
    } else {
      return `Please input the attacking army's name properly`;
    }

    return attackOutcome;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
