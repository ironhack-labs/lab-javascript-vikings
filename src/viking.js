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
    if (this.health) {
      this.msg = `${this.name} has received ${damage} points of damage`;
    } else {
      this.msg = `${this.name} has died in act of combat`;
    }
    return this.msg;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health) {
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
  vikingAttack() {
    // pick random Viking:
    this.randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    this.randomViking = this.vikingArmy[this.randomVikingIndex];
    this.vikingStrength = this.randomViking.attack();
    // console.log(this.randomViking);
    // console.log('His strength: ' + this.vikingStrength);
    //
    // pick random Saxon:
    this.randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    this.randomSaxon = this.saxonArmy[this.randomSaxonIndex];
    // console.log(this.randomSaxon);
    // console.log('His health: ' + this.randomSaxon.health);
    // console.log('.......');
    //
    // make a Saxon receiveDamage() equal to the strength of a Viking:
    this.result = this.randomSaxon.receiveDamage(this.vikingStrength);
    console.log(this.result);
    // console.log('Remaining health after attack: ' + this.randomSaxon.health);
    //
    // remove dead saxons from the army:
    this.saxonArmy = this.saxonArmy.filter((saxons) => saxons.health > 0);
    // console.log('Remaining Saxon Army: ' + this.saxonArmy.length);
    //
    // return result of calling receiveDamage():
    return this.result;
  }

  saxonAttack() {
    // pick random Saxon:
    this.randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    this.randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    this.result = this.randomViking.receiveDamage(this.randomSaxon.attack());
    //
    // this.randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    // this.randomViking = this.vikingArmy[this.randomVikingIndex];
    // this.randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // this.randomSaxon = this.saxonArmy[this.randomSaxonIndex];
    // this.saxonStrength = this.randomSaxon.attack();
    // const result = this.randomViking.receiveDamage(this.saxonStrength);
    //
    this.vikingArmy = this.vikingArmy.filter((vikings) => vikings.health > 0);
    // console.log(this.result);
    // console.log(this.vikingArmy);
    return this.result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

const war = new War();
war.addViking(new Viking('Random Viking', 300, 50));
war.addSaxon(new Saxon(50, 15));
// war.vikingAttack();
war.saxonAttack();

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
