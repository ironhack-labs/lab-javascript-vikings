// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    return this.strength
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage; 
    if (this.health > 0) return `${this.name} has received ${theDamage} points of damage`;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage; 
    if (this.health > 0) return `A Saxon has received ${theDamage} points of damage`;
    if (this.health <= 0) return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(theViking) { 
    this.vikingArmy.push(theViking);
  }
  addSaxon(theSaxon) {
    this.saxonArmy.push(theSaxon);
  }
  vikingAttack() {
    let randomVikingIndex = 1 + Math.floor(Math.random() * this.vikingArmy.length - 1);
    let randomSaxonIndex = 1 + Math.floor(Math.random() * this.saxonArmy.length - 1);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];
    let damageResult = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxonIndex, 1);
    return damageResult
  }
  saxonAttack() {
    let randomVikingIndex = 1 + Math.floor(Math.random() * this.vikingArmy.length - 1);
    let randomSaxonIndex = 1 + Math.floor(Math.random() * this.saxonArmy.length - 1);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];
    let damageResult = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) this.vikingArmy.splice(randomVikingIndex, 1);
    return damageResult
  }
  showStatus() {
    if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle.";
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
