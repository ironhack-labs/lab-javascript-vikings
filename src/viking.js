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
  constructor(health, strength) {
    super(health, strength);
  }

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

  //push instances of Viking "viking" into the vikingArmy array
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  ////push instances of Saxon "saxon" into the saxonArmy array
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  attack(attackingArmy, defendingArmy) {
    let randomIndexAttacker = Math.floor(Math.random() * attackingArmy.length);
    let randomIndexDefender = Math.floor(Math.random() * defendingArmy.length);

    let damage = defendingArmy[randomIndexDefender].receiveDamage(
      attackingArmy[randomIndexAttacker].strength
    );

    if (defendingArmy[randomIndexDefender].health <= 0) {
      defendingArmy.splice(randomIndexDefender, 1);
    }
    return damage;
  }

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
    // let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    // let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);

    // let damageSaxon = this.saxonArmy[randomIndexSaxon].receiveDamage(
    //   this.vikingArmy[randomIndexViking].strength
    // );

    // if (this.saxonArmy[randomIndexSaxon].health <= 0) {
    //   this.saxonArmy.splice(randomIndexSaxon, 1);
    // }
    // return damageSaxon;
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
    // let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    // let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);

    // let damageViking = this.vikingArmy[randomIndexViking].receiveDamage(
    //   this.saxonArmy[randomIndexSaxon].strength
    // );

    // if (this.vikingArmy[randomIndexSaxon].health <= 0) {
    //   this.vikingArmy.splice(randomIndexSaxon, 1);
    // }
    // return damageViking;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length === 1 || this.vikingArmy.length === 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

const thor = new Viking('Thor', 100, 80);
//const thor2 = new Viking('Thor2', 100, 70);
const loki = new Saxon(100, 85);
//const loki2 = new Saxon(100, 75);

let war1 = new War();
war1.addViking(thor);
war1.addSaxon(loki);

war1.vikingAttack();
war1.showStatus();

console.log(war1.vikingArmy);
console.log(war1.saxonArmy);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
