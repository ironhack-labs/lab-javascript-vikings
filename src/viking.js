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
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    super.receiveDamage(damage);
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

  randomAttack(attackerArmy, defenderArmy) {
    const randomDefenderIndex = Math.floor(Math.random() * defenderArmy.length);
    const randomAttackerArmy = attackerArmy[Math.floor(Math.random() * attackerArmy.length)];
    const randomDefenderArmy = defenderArmy[randomDefenderIndex];
    const attackResult = randomDefenderArmy.receiveDamage(randomAttackerArmy.strength);
    if (randomDefenderArmy.health <= 0) {
      defenderArmy.splice(randomDefenderIndex, 1);
    }
    return attackResult;
  }

  vikingAttack() {
    return this.randomAttack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.randomAttack(this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}







// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}