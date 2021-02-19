/* eslint-disable max-classes-per-file */
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

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }

    return `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return 'A Saxon has died in combat';
    }

    return `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }

  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack(viking, saxon, saxonIndex) {
    const battleFeedback = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }

    return battleFeedback;
  }

  saxonAttack(saxon, viking, vikingIndex) {
    const battleFeedback = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }

    return battleFeedback;
  }

  attack(soldierType) {
    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
      return 'Both armies needs soldiers to battle agains each other';
    }

    const vikingAndSaxonMinIndex = 0;
    const vikingMaxIndex = this.vikingArmy.length;
    const saxonMaxIndex = this.saxonArmy.length;

    const vikingIndex = Math.floor(Math.random() * (vikingMaxIndex - vikingAndSaxonMinIndex)) + vikingAndSaxonMinIndex;
    const saxonIndex = Math.floor(Math.random() * (saxonMaxIndex - vikingAndSaxonMinIndex)) + vikingAndSaxonMinIndex;

    const viking = this.vikingArmy[vikingIndex];
    const saxon = this.saxonArmy[saxonIndex];

    let battleFeedback = '';

    switch(soldierType.toLowerCase()) {
      case 'viking':
        battleFeedback = this.vikingAttack(viking, saxon, saxonIndex);
        break;
      case 'saxon':
        battleFeedback = this.saxonAttack(saxon, viking, vikingIndex);
        break;
      default:
        return 'soldierType argument should be "viking" or "saxon"';
    }

    return battleFeedback;
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }

    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }

    return 'Vikings and Saxons are still in the thick of battle.';
  }
}

const war = new War();

const conan = new Viking('Conan', 150, 10);
const saxon1 = new Saxon(80, 8);

war.addViking(conan);
war.addSaxon(saxon1);

console.log(war.attack('viking'));

console.log(war.showStatus());

console.log(war.attack('saxon'));

console.log(war.showStatus());
debugger
console.log(war.attack('viking'));
console.log(war.attack('viking'));
console.log(war.attack('viking'));
console.log(war.attack('viking'));
console.log(war.attack('viking'));
console.log(war.attack('viking'));
console.log(war.attack('viking'));

console.log(war.showStatus());


