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

  // Since the attack method is the same, as we are extending the class Soldier, we don't need to do anything. Viking will have attack as soldier()

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

  // What are the parts that are generic about the code?
  genericAttackMethod(attackerArmy, defenderArmy) {
    // 1 - Chose reandom attacked soldier
    const attackedSoldierId = randomNum(0, defenderArmy.length - 1);
    const attackedSoldier = defenderArmy[attackedSoldierId];

    // 2 - Choose a random attacking soldier
    const attackingSoldier =
      attackerArmy[randomNum(0, attackerArmy.length - 1)];

    // 3 - Make sure that the defender receives the attacker attack
    const result = attackedSoldier.receiveDamage(attackingSoldier.strength);
    // 3 - If the saxon is dead, we delete it from the army
    if (attackedSoldier.health <= 0) {
      defenderArmy.splice(attackedSoldierId, 1);
    }
    return result;
  }

  vikingAttack() {
    return this.genericAttackMethod(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.genericAttackMethod(this.saxonArmy, this.vikingArmy);
  }

  // First iteration of the function
  //   vikingAttack() {
  //     // 1 - Choose random saxon
  //     const attackedSaxonId = randomNum(0, this.saxonArmy.length - 1);
  //     const attackedSaxon = this.saxonArmy[attackedSaxonId];
  //     // 2 - Choose a random viking
  //     const attackingViking =
  //       this.vikingArmy[randomNum(0, this.vikingArmy.length - 1)];

  //     // we make the saxon receive attack
  //     const result = attackedSaxon.receiveDamage(attackingViking.strength);
  //     // 3 - If the saxon is dead, we delete it from the army
  //     if (attackedSaxon.health <= 0) {
  //       this.saxonArmy.splice(attackedSaxonId, 1);
  //     }
  //     return result;
  //   }
  /**
   * // First iteration of the function. Random saxon attacks random viking
   * @returns message from
   */
  //   saxonAttack() {
  //     // 1 - Choose random viking to be attacked
  //     const attackedVikingId = randomNum(0, this.vikingArmy.length - 1);
  //     const attackedViking = this.vikingArmy[attackedVikingId];

  //     // 2 - Choose a random viking to receive the attack
  //     const attackingSaxon =
  //       this.saxonArmy[randomNum(0, this.saxonArmy.length - 1)];

  //     // atacckingSaxon attacks attackedVikingi receive attack
  //     const result = attackedViking.receiveDamage(attackingSaxon.strength);
  //     // 3 - If the saxon is dead, we delete it from the army
  //     if (attackedViking.health <= 0) {
  //       this.vikingArmy.splice(attackedVikingId, 1);
  //     }
  //     return result;
  //   }

  showStatus() {
    if (this.vikingArmy.length == 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    if (this.saxonArmy.length == 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
