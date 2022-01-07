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
    const alive = `${this.name} has received ${damage} points of damage`;
    const dead = `${this.name} has died in act of combat`;
    return this.health > 0 ? alive : dead;
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    const alive = `A Saxon has received ${damage} points of damage`;
    const dead = `A Saxon has died in combat`;
    return this.health > 0 ? alive : dead;
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
    const randomVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const damage = this.vikingArmy[randomVikIndex].strength;
    const response = this.saxonArmy[randomSaxIndex].receiveDamage(damage);
    if (response === 'A Saxon has died in combat') {
      this.saxonArmy.splice(randomSaxIndex, 1);
    }
    return response;
  }
  saxonAttack() {
    const randomVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const damage = this.saxonArmy[randomSaxIndex].strength;
    const response = this.vikingArmy[randomVikIndex].receiveDamage(damage);
    if (
      response ===
      `${this.vikingArmy[randomVikIndex].name} has died in act of combat`
    ) {
      this.vikingArmy.splice(randomVikIndex, 1);
    }
    return response;
  }
  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0)
      return 'Vikings and Saxons are still in the thick of battle.';
    if (this.vikingArmy.length > 0)
      return 'Vikings have won the war of the century!';
    if (this.saxonArmy.length > 0)
      return 'Saxons have fought for their lives and survived another day...';
  }
}

function generateViking() {
  const name = 'Harald';
  const strength = 150;
  const health = 300;
  return new Viking(name, health, strength);
}

function generateSaxon() {
  const health = 60;
  const strength = 325;
  return new Saxon(health, strength);
}

let viking = generateViking();
let saxon = generateSaxon();
let war = new War();
war.addViking(viking);
war.addSaxon(saxon);
let oldHealth = saxon.health;
war.saxonAttack();

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
