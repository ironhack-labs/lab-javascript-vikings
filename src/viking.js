// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(amountOfDamage) {
    this.health = this.health - amountOfDamage;
  }
}

const soldier1 = new Soldier(10, 15);
const soldier2 = new Soldier(15, 20);

soldier1.receiveDamage(soldier2.attack());
console.log(soldier1.health);

//Viking class

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(amountOfDamage) {
    super.receiveDamage(amountOfDamage);
    if (this.health > 0) {
      return `${this.name} has received ${amountOfDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

const viking1 = new Viking(10, 25, "Asgar");

// Saxon class

class Saxon extends Soldier {
  receiveDamage(amountOfDamage) {
  super.receiveDamage(amountOfDamage); {
  this.health = this.health - amountOfDamage;
  if (this.health <= 0) {
    return "A Saxon has died in combat";
  } else {
    return `A Saxon has received ${amountOfDamage} points of damage`;
  }
}
}
}

const saxon1 = new Saxon(10, 25);

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
    const randomVikingIndex = Math.floor(Math.random * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];

    const randomSaxonIndex = Math.floor(Math.random * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const result = randomSaxon.receiveDamage(strengthOfAViking);
    if (randomSaxon.health < 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
  }

  saxonAttack() {
    const randomSaxonIndex = Math.floor(Math.random * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const randomVikingIndex = Math.floor(Math.random * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];

    const result2 = randomViking.receiveDamage(strengthOfASaxon);
    if (randomViking.health < 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return result2;
  }

  showStatus() {
    if (this.saxonArmy == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy == 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy == 1 && this.vikingArmy == 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
