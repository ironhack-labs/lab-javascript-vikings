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
    this.damage = damage;
    this.health -= this.damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    super.attack();
    return this.strength;
  }
  receiveDamage(damage) {
    super.receiveDamage()
    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
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
  attack() {
    super.attack();
    return this.strength;
  }
  receiveDamage(damage) {
    super.receiveDamage()
    // this.health > 0;
    if (this.health > 0)
      return `A Saxon has received ${this.damage} points of damage`;
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking1);
    this.vikingArmy.push(viking2);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon1);
    this.saxonArmy.push(saxon2);
  }
  vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonSoldier = this.saxonArmy[randomSaxon];
    let vikingSoldier = this.vikingArmy[randomViking];
    let damage = saxonSoldier.health - receiveDamage(vikingSoldier.strength);
    if (saxonSoldier.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxonSoldier), 1 )
      // this.saxonArmy.pop(saxonSoldier)
    }
    console.log(damage)
    return damage
  }

  saxonAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonSoldier = this.saxonArmy[randomSaxon];
    let vikingSoldier = this.vikingArmy[randomViking];
    let damage = vikingSoldier.receiveDamage(saxonSoldier.attack());
    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(vikingSoldier),1 )
    }
    return damage
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

let saxon1 = new Saxon(10,5);
let saxon2 = new Saxon(10,5);
let viking1 = new Viking('Sema', 20,15);
let viking2 = new Viking('Antonio', 20,15);

console.log(war.vikingAttack())