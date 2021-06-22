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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  attack(attackingArmy, defendingArmy) {
    let attacker = attackingArmy[0];
    let defender = defendingArmy[0];
    let result = defender.receiveDamage(attacker.attack());

    let newDefendingArmy = defendingArmy.filter((eachDefender) => {
      return eachDefender.health > 0;
    });

    return [result, newDefendingArmy];
  }

  vikingAttack() {
    // let viking = this.vikingArmy[0];
    // let saxon = this.saxonArmy[0];
    // let result = saxon.receiveDamage(viking.attack());
    // this.saxonArmy = this.saxonArmy.filter((saxon) => {
    //   return saxon.health > 0;
    // });
    // return result;
    // let [result, defendingArmy] = this.attack(this.vikingArmy, this.saxonArmy);
    let attackresult = this.attack(this.vikingArmy, this.saxonArmy);
    let result = attackresult[0];
    let newDefendingArmy = attackresult[1];
    this.saxonArmy = newDefendingArmy;
    return result;
  }
  saxonAttack() {
    // let saxon = this.saxonArmy[0];
    // let viking = this.vikingArmy[0];
    // let result = viking.receiveDamage(saxon.attack());
    // this.vikingArmy = this.vikingArmy.filter((viking) => {
    //   return viking.health > 0;
    // });
    // return result;
    let [result, defendingArmy] = this.attack(this.saxonArmy, this.vikingArmy);
    this.vikingArmy = defendingArmy;
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
