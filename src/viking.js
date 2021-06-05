// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
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
    this.randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    this.randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    
    this.randomSaxon = this.saxonArmy[this.randomSaxonIndex];
    this.randomViking = this.vikingArmy[this.randomVikingIndex];

    this.randomSaxon.receiveDamage(this.randomViking.strength);

    if (this.randomSaxon.health <= 0){
      this.saxonArmy.splice(this.randomSaxonIndex, 1);
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${this.randomViking.strength} points of damage`;
    }
  }

  saxonAttack() {
    this.randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    this.randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    
    this.randomSaxon = this.saxonArmy[this.randomSaxonIndex];
    this.randomViking = this.vikingArmy[this.randomVikingIndex];

    this.randomViking.receiveDamage(this.randomSaxon.strength);

    if (this.randomViking.health <= 0){
      this.vikingArmy.splice(this.randomVikingIndex, 1);
      return `${this.randomViking.name} has died in act of combat`;
    } else {
      return `${this.randomViking.name} has received ${this.randomSaxon.strength} points of damage`;
    }
  }

  showStatus() {
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
